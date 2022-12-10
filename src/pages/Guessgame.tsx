import "../styles/guessgame.css"
import { useEffect, useState } from "react"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_CONVERTKIT_API_SECRET_DATABASE,
    authDomain: "unique-caldron-362117.firebaseapp.com",
    projectId: "unique-caldron-362117",
    storageBucket: "unique-caldron-362117.appspot.com",
    messagingSenderId: "458607624724",
    appId: import.meta.env.VITE_APP_CONVERTKIT_API_SECRET_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


//alredy used lines
var lineuseds = new Array();
//alredy used blocks
var blocksuseds = new Array();
//historico de palpites
var history = new Array();



export function Guessgame() {

    //contagem de chances
    const [chances, setchances] = useState(0);
    //imagem que vai ser utilizada
    const [image, setimage] = useState("")
    //resposta correta
    const [name, setname] = useState("")
    //valor do input
    const [inputValue, setInputValue] = useState('');
    //palpite do input
    const inputresponse = (document.getElementById("response") as HTMLInputElement);
    //container
    const elem = (document.getElementById("guessgame_image_container") as ParentNode);


    useEffect(() => {
        getImage()

        if (localStorage.getItem("history")){
            //receber historicos de palpites
            let historyX = localStorage.getItem("history")
            historyX = JSON.parse(historyX!)
            console.log(historyX)
            for (let i = 0; i < historyX!.length; i++) {
                addhistory(historyX![i])
            }
        }


        if (document.cookie) {
            endgame();
        } else if (localStorage.getItem("chances")) {
            setchances(parseInt(localStorage.getItem("chances")!) + 1)

            //receber linhas
            let lines: any = localStorage.getItem("lines");
            lines = JSON.parse(lines!)
            //receber blocos
            let blocks: any = localStorage.getItem("blocks");
            blocks = JSON.parse(blocks!)
            console.log(lines)
            //deletar blocos ja utilizados
            lines!.forEach(element => {
                deleteblock(element, blocks![lines!.indexOf(element)])
            });

        }

    }, [])

    //funcao principal
    function mainCheck() {
        if (chances < 6) {

            //acertar
            if (inputresponse.value.toUpperCase() == name.toUpperCase()) {
                //salvar q venceu
                // Set the expiration date to the beginning of the next day
                var date = new Date();
                date.setDate(date.getDate() + 1);
                date.setHours(0, 0, 0, 0);
                // Set the cookie with the expiration date
                document.cookie = "name=win; expires=" + date.toUTCString();
                endgame();
            } else {
                //errar
                //selecionar bloco aleatório para remover
                let lineindex = Math.floor(Math.random() * 6);
                let blockindex = Math.floor(Math.random() * 8);
                while (lineuseds.includes(lineindex) && blocksuseds.includes(blockindex)) {
                    lineindex = Math.floor(Math.random() * 6);
                    blockindex = Math.floor(Math.random() * 8);
                }

                deleteblock(lineindex, blockindex)


                //adicionar blocos e linhas selecionados na lista de ja utilizados
                lineuseds.push(lineindex);
                blocksuseds.push(blockindex);

                //save posiitons
                localStorage.setItem("lines", JSON.stringify(lineuseds));
                localStorage.setItem("blocks", JSON.stringify(blocksuseds));



                //adicionar contador
                setchances(chances => chances + 1);
                //localStorage.setItem("chances", String(chances));

            }
            history.push(inputValue);
            addhistory(inputValue);

            //adicionar historico
            localStorage.setItem("history", JSON.stringify(history));

        } else {
            console.log('fim das chances')
        }

        setInputValue('');
    }

    //funcao enter
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // Check if the key that was pressed is the enter key
        if (event.key === 'Enter') {
            // If it is, run your mainCheck function
            mainCheck();

        }

    }

    //receber dados do banco
    async function getImage() {
        let data = new Date();
        let dia = data.getDay();
        const querySnapshot = await getDocs(collection(db, "images"))
        var dbimage = querySnapshot.docs.map(doc => doc.data());
        setimage(dbimage[dia].image);
        setname(dbimage[dia].nome);


        //resetar dados quando mudar o dia
        if (!document.cookie) {
            localStorage.clear();
        }

    }


    //adicionar historico de respostas
    function addhistory(inputresponse) {

        let parent = document.getElementById("history_list")
        let child = document.createElement("li")
        child.setAttribute("className", "guessgame_history_text")
        child.innerHTML = inputresponse;
        parent?.appendChild(child)

    }

    //apagar blocos
    function deleteblock(line, block) {
        const elem = (document.getElementById("guessgame_image_container") as ParentNode);

        let linha = elem?.childNodes[line];
        let bloco = linha?.childNodes[block];
        (bloco as HTMLElement).style.background = 'transparent';
    }

    //endgame
    function endgame() {
        let input = (document.getElementById("response") as HTMLInputElement);
        const elem = (document.getElementById("guessgame_image_container") as ParentNode);

        for (let i = 0; i <= 5; i++) {
            let child = (elem?.firstChild! as ChildNode)
            elem?.removeChild(child);
        }

        // desativar funcoes
        input.setAttribute("disabled", 'disabled');
        let button = (document.getElementById("guessgame_button") as HTMLButtonElement)
        button.setAttribute("disabled", 'disabled');



    }

    return (
        <div className="guessgame_container">
            <section className="guessgame_image_section">
                <div className="guessgame_image_container" id='guessgame_image_container'>
                    <div className="guessgame_block_line">
                        <div className="guessgame_block" ></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                    </div>
                    <div className="guessgame_block_line">
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                    </div>
                    <div className="guessgame_block_line">
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block" ></div>
                        <div className="guessgame_block" ></div>
                        <div className="guessgame_block" ></div>
                        <div className="guessgame_block" ></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                    </div>
                    <div className="guessgame_block_line">
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block" ></div>
                        <div className="guessgame_block" id='middle_block'></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                    </div>
                    <div className="guessgame_block_line">
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                    </div>
                    <div className="guessgame_block_line">
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                        <div className="guessgame_block"></div>
                    </div>
                    <img src={image} alt="" />
                </div>
            </section>
            <div className="guessgame_responses">
                <h1>ADIVINHE A SÉRIE</h1>
                <div className="guessgame_form">
                    <input type="text" id='response' value={inputValue}
                        onChange={event => setInputValue(event.target.value)}
                        onKeyPress={handleKeyPress} />

                    <div className="guessgame_butto_counts">
                        <h2>{chances}/6</h2>
                        <button onClick={() => { mainCheck() }} id='guessgame_button'>Submit</button>
                    </div>
                </div>
                <ul className="history_list" id="history_list">
                </ul>
            </div>
        </div>
    )
}
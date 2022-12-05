import "../styles/guessgame.css"
import { createElement, useEffect, useState } from "react"



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


var lineuseds = [4]
var blocksuseds = [5]
var history = new Array();

export function CookieRobot() {
    const [chances, setchances] = useState(0);
    const [image, setimage] = useState("")
    const [name, setname] = useState("")


    async function getImage() {
        const querySnapshot = await getDocs(collection(db, "images"))
        var dbimage = querySnapshot.docs.map(doc => doc.data());
        setimage(dbimage[0].image);
        setname(dbimage[0].nome);
    }

    function endgame(elem, response) {
        for (let i = 0; i <= 5; i++) {
            elem?.removeChild(elem?.firstChild!);
        }

        // desativar funcoes
        response.setAttribute("disabled", 'disabled');
        let button = (document.getElementById("guessgame_button") as HTMLButtonElement)
        button.setAttribute("disabled", 'disabled');

        //salvar q venceu
        document.cookie = `key1 = venceu;key2 = value2;expires = date`;

    }

    function addhistory(response) {
        //adicionar historico de respostas

        let parent = document.getElementById("history_list")
        let child = document.createElement("li")
        child.setAttribute("className", "guessgame_history_text")
        child.innerHTML = response;
        parent?.appendChild(child)

        //salvar historico de palavras
        if (Array.isArray(history)) {
            history.push(response);
        }
    }

    function deleteblocks(elem, line, block) {

        //apagar blocos
        lineuseds.push(line);
        blocksuseds.push(block);
        console.log(block);

        let linha = elem?.childNodes[line];
        let bloco = linha?.childNodes[block];
        (bloco as HTMLElement).style.background = 'transparent';

    }

    function cleanblock() {

        //deleteblock
        let elem = (document.getElementById("guessgame_image_container") as ParentNode);
        let response = (document.getElementById("response") as HTMLInputElement);

        if (chances < 6) {

            //acertar
            //limpar imagem
            if (response.value.toUpperCase() == name.toUpperCase()) {
                endgame(elem, response)
            } else {
                //errar
                //selecionar bloco aleatório
                let lineindex = Math.floor(Math.random() * 6);
                let blockindex = Math.floor(Math.random() * 8);
                while (lineuseds.includes(lineindex) && blocksuseds.includes(blockindex)) {
                    lineindex = Math.floor(Math.random() * 6);
                    blockindex = Math.floor(Math.random() * 8);
                }
                deleteblocks(elem, lineindex, blockindex)


                //save posiitons
                localStorage.setItem("lines", JSON.stringify(lineuseds));
                localStorage.setItem("blocks", JSON.stringify(blocksuseds));

                //adicionar historico
                addhistory(response.value)
                localStorage.setItem("history", JSON.stringify(history));

                //adicionar contador
                setchances(chances => chances + 1);
                localStorage.setItem("chances", String(chances));

            }
        } else {
            //fim das chances
            endgame(elem, response)
        }
        //limpar input
        response.value = '';
    }


    useEffect(() => {
        //carrregar database
        getImage()
        if (localStorage.getItem("chances")) {
            let chancesX = localStorage.getItem("chances");
            setchances(parseInt(chancesX!) + 1)

            //receber historicos de palpites
            let historyX = localStorage.getItem("history")
            historyX = JSON.parse(historyX!)
            for (let i = 0; i < historyX!.length; i++) {
                addhistory(historyX![i])
            }

            let lines: any = localStorage.getItem("lines");
            lines = JSON.parse(lines!)

            let blocks = localStorage.getItem("blocks");
            blocks = JSON.parse(blocks!)

            const elem = (document.getElementById("guessgame_image_container") as ParentNode);
            //console.log(blocks);
            //console.log(lines)
            lines!.forEach(element => {

                deleteblocks(elem,element,blocks![lines!.indexOf(element)])

            });
        }

    }, []);


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
                    <input type="text" id='response' />
                    <div className="guessgame_butto_counts">
                        <h2>{chances}/6</h2>
                        <button onClick={() => { cleanblock() }} id='guessgame_button'>Submit</button>
                    </div>
                </div>
                <ul className="history_list" id="history_list">
                </ul>
            </div>
        </div>
    )
}
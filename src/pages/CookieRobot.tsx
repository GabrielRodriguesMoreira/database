import "../styles/guessgame.css"
import { createElement, useEffect, useState } from "react"



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs  } from "firebase/firestore";
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



export function CookieRobot(){
    const [chances,setchances] = useState(0);
    const [image,setimage] = useState("")
    const [name,setname] = useState("")
    var lineuseds = [4]
    var blocksuseds =[5]


    useEffect(() => {
        //carrregar database    

    getImage()
    },[]);
    
    async function getImage(){
        const querySnapshot = await getDocs(collection(db, "images"));
        var dbimage = querySnapshot.docs.map(doc => doc.data());

        if(dbimage){
            document.getElementById('response')!.addEventListener('keypress', function (e:KeyboardEventInit) {
                if (e.key === 'Enter') {
                    cleanblock(dbimage[0].name);
                    console.log(name)
            }
            });
        }


        setimage(dbimage[0].image);
        setname(dbimage[0].nome); 
        console.log("amilton")

        //funcao apertar enter

    }



    function cleanblock(nomerson:String){

        //deleteblock
        let elem = (document.getElementById("guessgame_image_container") as ParentNode);
        let lineindex = Math.floor(Math.random() * 6);
        let blockindex = Math.floor(Math.random() * 8);
        while(lineuseds.includes(lineindex) && blocksuseds.includes(blockindex)) {
            lineindex = Math.floor(Math.random() * 6);
            blockindex = Math.floor(Math.random() * 8);
        }

        let response = (document.getElementById("response") as HTMLInputElement);

    if(chances<6){
            //acertar
            //limpar imagem
            if(nomerson == name.toUpperCase()){
                for(let i=0; i<=5;i++){
                    elem?.removeChild(elem?.firstChild!);
                }
                // desativar funcoes
                response.setAttribute("disabled",'disabled');
                let button = (document.getElementById("guessgame_button") as HTMLButtonElement)
                button.setAttribute("disabled",'disabled');

            } else {
                //errar
                //apagar blocos
                lineuseds.push(lineindex);
                blocksuseds.push(blockindex);
                let line = elem?.childNodes[lineindex];
                let block = line?.childNodes[blockindex];
                (block as HTMLElement).style.background = 'transparent'

                //adicionar historico de respostas
                let parent = document.getElementById("history_list")
                let child = document.createElement("li")
                child.setAttribute("className", "guessgame_history_text")
                child.innerHTML = response.value;
                parent?.appendChild(child)

                //adicionar contador
                setchances(chances+1);
            }
    }
        //limpar input
        response.value = '';

    }

    return(
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
                <div className="guessgame_form">
                    <input type="text" id='response' />
                    <div className="guessgame_butto_counts">
                        <h2>{chances}/6</h2>
                        <button onClick={()=>{cleanblock(name)}} id='guessgame_button'>Submit</button>
                    </div>
                </div>
                <ul className="history_list" id="history_list">
                </ul>
            </div>
        </div>
    )
}
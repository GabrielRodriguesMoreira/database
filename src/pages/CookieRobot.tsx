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
    var history = new Array();

    async function getImage(){
        const querySnapshot = await getDocs(collection(db, "images"))   
        var dbimage = querySnapshot.docs.map(doc => doc.data());
        setimage(dbimage[0].image);
        setname(dbimage[0].nome);
    }
    
    function endgame(elem,response){
        for(let i=0; i<=5;i++){
            elem?.removeChild(elem?.firstChild!);
        }

        // desativar funcoes
        response.setAttribute("disabled",'disabled');
        let button = (document.getElementById("guessgame_button") as HTMLButtonElement)
        button.setAttribute("disabled",'disabled');

        //salvar q venceu
        document.cookie = `key1 = venceu;key2 = value2;expires = date`;

    }

function cleanblock(){

        //deleteblock
        let elem = (document.getElementById("guessgame_image_container") as ParentNode);
        let response = (document.getElementById("response") as HTMLInputElement);

    if(chances<9999){

            //acertar
            //limpar imagem
            if(response.value.toUpperCase() == name.toUpperCase()){
                endgame(elem,response)
            } else {
                //errar
                //selecionar bloco aleatório
                let lineindex = Math.floor(Math.random() * 6);
                let blockindex = Math.floor(Math.random() * 8);
                while(lineuseds.includes(lineindex) && blocksuseds.includes(blockindex)) {
                    lineindex = Math.floor(Math.random() * 6);
                    blockindex = Math.floor(Math.random() * 8);
                }

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
                setchances(chances=>chances+1);
                localStorage.setItem("chances", String(chances));
                if (Array.isArray(history)) {
                    history.push("test");
                    console.log("run")
                  }

                localStorage.setItem("history", JSON.stringify(history));
                console.log(history.length);

            }
    } else {
        //fim das chances
        endgame(elem,response)
    }
        //limpar input
        response.value = '';
}

    useEffect(() => {
            //carrregar database
            getImage()
        if(localStorage.getItem("chances")){
            let chancesX = localStorage.getItem("chances");
            setchances(parseInt(chancesX!)+1)

            let historyX = localStorage.getItem("history")
            console.log(historyX)
            historyX = JSON.parse(historyX!)

            if (Array.isArray(historyX)) {
                console.log(historyX)
              }
        }   

    },[]);
    

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
                <h1>ADIVINHE A SÉRIE</h1>
                <div className="guessgame_form">
                    <input type="text" id='response' />
                    <div className="guessgame_butto_counts">
                        <h2>{chances}/6</h2>
                        <button onClick={()=>{cleanblock()}} id='guessgame_button'>Submit</button>
                    </div>
                </div>
                <ul className="history_list" id="history_list">
                </ul>
            </div>
        </div>
    )
}
import "../styles/guessgame.css"
import { createElement, useEffect, useState } from "react"

export function CookieRobot(){
    const [chances,setchances] = useState(0);
    var name = 'Naruto'
    var lineuseds = [4]
    var blocksuseds =[5]

    useEffect(() => {
        //funcao apertar enter
        document.querySelector('#response')!.addEventListener('keypress', function (e:KeyboardEventInit) {
                if (e.key === 'Enter') {
                cleanblock()
                }
            });
          },[]);


    function cleanblock(){


        //deleteblock
        let elem = (document.getElementById("guessgame_image_container") as ParentNode);
        let lineindex = Math.floor(Math.random() * 6);
        let blockindex = Math.floor(Math.random() * 8);
        while(lineuseds.includes(lineindex) && blocksuseds.includes(blockindex)) {
            lineindex = Math.floor(Math.random() * 6);
            blockindex = Math.floor(Math.random() * 8);
        }

        let response = (document.getElementById("response") as HTMLInputElement);

    if(chances<8){
            //acertar
                //limpar imagem
            if(response.value.toUpperCase() == name.toUpperCase()){
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
                        <img src="https://tionitroblog.files.wordpress.com/2017/05/46e3b8b4cfec59be08b7b262ae7f611b.jpg" alt="" />
                </div>
            </section>
            <div className="guessgame_responses">
                <div className="guessgame_form">
                    <input type="text" id='response' />
                    <div className="guessgame_butto_counts">
                        <h2>{chances}/6</h2>
                        <button onClick={cleanblock} id='guessgame_button'>Submit</button>
                    </div>
                </div>
                <ul className="history_list" id="history_list">
                </ul>
            </div>
        </div>
    )
}
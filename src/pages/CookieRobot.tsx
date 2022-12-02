import "../styles/guessgame.css"
import { useEffect } from "react"

export function CookieRobot(){
    var name = 'Naruto'

    function cleanblock(){
        let lineuseds = [4]
        let blocksuseds =[5]

        //deleteblock
        let elem = (document.getElementById("guessgame_image_container") as ParentNode);
        let lineindex = Math.floor(Math.random() * 6);
        let blockindex = Math.floor(Math.random() * 8);
        while(lineuseds.includes(lineindex) && blocksuseds.includes(blockindex)) {
            lineindex = Math.floor(Math.random() * 6);
            blockindex = Math.floor(Math.random() * 8);
        }

        
        let response = (document.getElementById("response") as HTMLInputElement);

        //acertar
        if(response.value.toUpperCase() == name.toUpperCase()){
            for(let i=0; i<=5;i++){
                elem?.removeChild(elem?.firstChild!);
            }
        } else {
            lineuseds.push(lineindex);
            blocksuseds.push(blockindex);
            let line = elem?.childNodes[lineindex];
            let block = line?.childNodes[blockindex];
            (block as HTMLElement).style.background = 'transparent'
        }

    }


    document.addEventListener('keydown', function(event){
        if(event.key == "Enter"){
            console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`)
            cleanblock()
        }

    })




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
            <div className="guessgame_form">
                    <input type="text" id='response'/>
                    <button onClick={cleanblock}>Submit</button>
                    
                </div>
        </div>
    )
}
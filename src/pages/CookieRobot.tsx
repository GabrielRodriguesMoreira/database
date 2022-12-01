import "../styles/guessgame.css"
export function CookieRobot(){

    function cleanblock(){
        let lineuseds = [4]
        let blocksuseds =[5]

        let elem = document.getElementById("guessgame_image_container");


        let lineindex = Math.floor(Math.random() * 6);
        let blockindex = Math.floor(Math.random() * 8);

        while(lineuseds.includes(lineindex) && blocksuseds.includes(blockindex)) {
            lineindex = Math.floor(Math.random() * 6);
            blockindex = Math.floor(Math.random() * 8);
        }
        lineuseds.push(lineindex);
        blocksuseds.push(blockindex);

        let line = elem?.childNodes[lineindex];
        let block = line?.childNodes[blockindex];

        (block as HTMLElement).style.background = 'transparent'
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
                        <img src="https://i0.wp.com/www.otakupt.com/wp-content/uploads/2021/07/KONOSUBA-new-anime-visual-1.jpg?resize=1920%2C1365&ssl=1" alt="" />
                </div>
                <div className="guessgame_form">
                    <input type="text" />
                    <button onClick={cleanblock}>Click</button>
                </div>
            </section>

        </div>
    )
}
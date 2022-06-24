import React, {useState, useEffect} from 'react'
import '../styles/Ppm.css'



var frases = ["Press The button to Start", 
"DON'T BELIEVE IN YOURSELF! BELIEVE IN ME WHO BELIEVES IN YOU!",
"The world isn't perfect. But it's there for us, doing the best it can… that's what makes it so damn beautiful.",
"PEOPLE, WHO CAN'T THROW SOMETHING IMPORTANT AWAY, CAN NEVER HOPE TO CHANGE ANYTHING.",
"TO KNOW SORROW IS NOT TERRIFYING. WHAT IS TERRIFYING IS TO KNOW YOU CAN'T GO BACK TO HAPPINESS YOU COULD HAVE.",

]



let n =0;


function auto_grow(element) {
  console.log(element);
  element.style.height = "10px";
  element.style.height = (element.scrollHeight)+"px";
}

export function Ppm(){


    const [word1,setword1] = useState(frases[n]);
    const [result,setresult] = useState("");

    function compare(){
        const word2 = (document.getElementById('text') as HTMLInputElement).value.toUpperCase();
        let word1check = word1.toUpperCase()
        if (word1check!=word2){
          document.getElementById("text")!.classList.add("tremer");
          setTimeout(() => {document.getElementById("text")!.classList.remove("tremer");},1500)
        } else {
            document.getElementById("text")!.style.borderBottom  = '4px solid #1cf540'
            setIsActive(false);
             setresult(String("You type " + (word1.length/(minutes*60 + seconds)).toFixed(1) + " letters per second." ));
             document.getElementById("startbutton")!.style.display='block';
             document.getElementById("checkbutton")!.style.display='none';
        }
    }

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isActive, setIsActive] = useState(false);
  
    function toggle() {
        n++;
        setword1(frases[n])
        setSeconds(0);
        setMinutes(0);
        setIsActive(true);
        document.getElementById("startbutton")!.style.display='none';
        document.getElementById("checkbutton")!.style.display='block';
        document.getElementById("text")!.style.borderBottom  = '4px solid #bff8c9';
        (document.getElementById('text') as HTMLInputElement).value = ''
    }
  
    function reset() {
        setMinutes(0);
      setSeconds(0);
      setIsActive(false);
    }
  
    useEffect(() => {
      let interval = setInterval(() => 0);
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }

      if(seconds>=60){
        setSeconds(seconds => seconds - 60);
        setMinutes(minutes => +minutes+1);
      }

      return () => clearInterval(interval);
    }, [isActive, seconds]);


    //Adicionar numero a esquerda (Muito útil!!!!!! )
    function addLeadingZeros(num, totalLength) {
        return String(num).padStart(totalLength, '0');
      }

      document.onkeydown = function(e){
        e = e || window.event;
        var key = e.which || e.keyCode;
        if(key===13){
            compare();
            return (key != 13)
        }
    }

    return(
        <div className="ppmcontainer" id='ppmcontainer'>
            <section className='questionask'>
              <h1>{word1}</h1 >
              <h1 id='clock'>{addLeadingZeros(minutes,2)}:{addLeadingZeros(seconds,2)}</h1>
              <div className='secflor'>
                <div className='textareacontainer'>
                  <textarea spellCheck="false" onInput={() => {auto_grow(document.getElementById('text'))}} rows={1} wrap='hard' id="text" placeholder='type here' />
                  <button className='nextbutton' onClick={toggle} id='startbutton'> START</button>
                  <button className='nextbutton' onClick={compare} id='checkbutton' style={{display:'none'}}>CHECK</button>
                </div>
                <div id='result'>  
                  <h1>- RESULT -</h1>            
                  <h1 id='resulttext'>{result}</h1>
                </div>
              </div>
            </section>
        </div>
    )
}

import React, {useState, useEffect} from 'react'
import '../../styles/mobilestyles/mobileppm.css'

var frases = ["Aperte o botão START para começar", 
"Esta casa está ladrilhada. Quem a desenladrilhará? O desenladrilhador. O desenladrilhador que a desenladrilhar bom desenladrilhador será!",
"A fiadeira fia a farda do filho do feitor Felício",
"La vem o velho Félix com o fole velho nas costas",
"O bispo de Constantinopla é um bom desconstantinopolitanizador. Quem o desconstantinopolitanizar um bom desconstantinopolitanizador será.",
"O original não se desoriginaliza! O original não se desoriginaliza! O original não se desoriginaliza! Se o desoriginalizássemos, original não seria!",
]

//aumenta tamanho da textarea
function auto_grow(element) {

  element.style.height = "10px";
  element.style.height = (element.scrollHeight)+"px";
}

let current = 0;

export function MobilePpm(){

    const [word1,setword1] = useState(frases[current]);
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
            setresult(String("Você escreve " + (word1.length/(minutes*60 + seconds)).toFixed(1) + " letras por segundo." ));
            document.getElementById("startbutton")!.style.display='block';
            document.getElementById("checkbutton")!.style.display='none';
        }
    }
    
    // relogio
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isActive, setIsActive] = useState(false);
    function toggle() {
        current++;
        setword1(frases[current])
        setSeconds(0);
        setMinutes(0);
        setIsActive(true);
        document.getElementById("startbutton")!.style.display='none';
        document.getElementById("checkbutton")!.style.display='block';
        document.getElementById("text")!.style.borderBottom  = '4px solid #bff8c9';
        (document.getElementById('text') as HTMLInputElement).value = ''
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


    //Adicionar numero a esquerda
    function addLeadingZeros(num, totalLength) {
        return String(num).padStart(totalLength, '0');
      }

    //função Apertar Enter
      document.onkeydown = function(e){
        e = e || window.event;
        var key = e.which || e.keyCode;
        if(key===13){
            compare();
            return (key != 13)
        }
    }


    return(
        <div className='mobileppm_container'>
            <h1>{word1}</h1>
            <h1>{addLeadingZeros(minutes,2)}:{addLeadingZeros(seconds,2)}</h1>
            <div className='mobileppm_textbutton'>
                <textarea spellCheck="false" onInput={() => {auto_grow(document.getElementById('text'))}} rows={1} wrap='hard' id="text" placeholder='Escreva aqui' />
                <button  onClick={toggle} id='startbutton'> START</button>
                <button onClick={compare} id='checkbutton' style={{display:'none'}}>CHECK</button>
            </div>
            <div className='mobileppm_result'>
                <h1>- RESULTADO - </h1>
                <h1 id='resulttext'>{result}</h1>
            </div>
        </div>
    )
}
import '../styles/cookierobot.css'
import React,{useState, useEffect} from 'react'
import typewritesound from '../componenets/typewrite.wav'
import spr1 from '../componenets/spr1.webp'
import spr2 from '../componenets/spr2.webp'


export function CookieRobot(){
    const [face,setface] = useState("｡◕‿◕｡")
    const [sprite,setsprite] = useState(spr1)
    const [action,setaction] = useState(0)
    const [fillspace,setfillspace] = useState(<></>)
    const [infos, setinfos] = useState({
        name:'',
        charname:'',
        video:''
      })
    var i = 0;
    var speed = 30;



useEffect(() => {

    if(document.cookie.length>0){
        setaction(-50);
        setinfos(() =>{
             var obj =  JSON.parse(document.cookie);
            return obj})
            console.log(infos)
        typeWriter(`Bem vindo de volta ${JSON.parse(document.cookie).name}`);
    } else {  typeWriter('Olá visitante');}
},[])


function nextaction(){
    i=0;
    //tirar botão
    (document.getElementById("nextbutton") as HTMLInputElement).style.display = 'none';
    
    //limpar caixa de texto
    (document.getElementById("type") as HTMLInputElement).innerHTML = '';

    //proxima ação
    setaction(action+1)

    //ações
    switch(action){
        //primeiro acesso
        case 0:
            setface('° □ °');
            setsprite(spr2);
            typeWriter('Parece que é sua primeira vez aqui.');
            break;
        case 1:
            setface('• _ •');
            setsprite(spr1);
            typeWriter('Poderia me dizer seu nome?');
            setfillspace((<input type="text" id='username' autoComplete='off' placeholder='type here'/>));
            break;
        case 2:
            setinfos({
                name: (document.getElementById('username') as HTMLInputElement).value,
                charname:'',
                video:'',
            })
            setface('👍 ');
            setsprite(spr1);
            typeWriter(`Obrigado ${(document.getElementById('username') as HTMLInputElement).value}`);
            setfillspace((<></>));
            break;
        
        case 3:
            setsprite(spr1);
            typeWriter('Mas parece que eu também não tenho um nome. Poderia me dar um?');
            setfillspace((<input type="text" id='charname' autoComplete='off' placeholder='type here'/>));
            break;
        
        case 4:
            setinfos({
                name: infos.name,
                charname:(document.getElementById('charname') as HTMLInputElement).value,
                video:'',
            })
            setfillspace((<></>));
            setsprite(spr1);
            typeWriter('Perfeito!')
            break;

        case 5:
            typeWriter('Antes de ir me responda apenas uma pergunta. De que animal você gosta mais?');
            setfillspace(<div className='animalbutton'> 
            <button id='gato' onClick={() =>{
              setinfos({
                name: infos.name,
                charname: infos.charname,
                video:'/src/componenets/catvideo.mp4'
              });
               }}>Gato</button>

            <button id='cachorro' onClick={() =>{
              setinfos({
                name: infos.name,
                charname: infos.charname,
                video:'/src/componenets/dogvideo.mp4'
              });
              }}>Cachorro</button>
            <button id='coelho' onClick={() =>{
              setinfos({
                name: infos.name,
                charname: infos.charname,
                video:'/src/componenets/bunnyvideo.mp4'
              });
               }}>Coelho</button>
          </div>);
            setsprite(spr1);
        break;

        case 6:
            typeWriter('Ótimo, agora me da só um segundo para que eu possa memorizar tudo.');
            setsprite(spr1);
            setfillspace((<></>));
            document.cookie = JSON.stringify(infos);
            break;
        
        case 7:
            console.log(document.cookie);
        typeWriter('tudo pronto, da próxima vez que você recarregar a página terei novidades. Dê uma olhada nos outros projetos depois volte aqui.')
        setsprite(spr2);
        break;

        case 8:
            setsprite(spr1);
            (document.getElementById('textbox') as HTMLInputElement).style.display = 'none';
            break;

        
        //segundo acesso
        case -50:
            typeWriter('Quem bom que você voltou.');
            break;
        
        case -49:
            typeWriter('Agora lembra da pergunta que fiz?');
        break;

        case -48:
            typeWriter("Aqui vai uma surpresa! Espero que goste.");
            break;
        
        case -47:
            (document.getElementById('textbox') as HTMLInputElement).style.display = 'none';
            (document.getElementById('textface') as HTMLInputElement).style.display = 'none';
            (document.getElementById('tvscreen') as HTMLInputElement).setAttribute('class','nobefore');

            //criar player
            let parent = (document.getElementById('face') as HTMLInputElement);
            let video = document.createElement('video');
            let source = document.createElement('source');
            
            video.setAttribute('class','iframevideo');
            video.setAttribute('autoplay', 'on');
            source.setAttribute('id','videoplace');
            source.setAttribute('src',infos.video);
            source.setAttribute('type','video/mp4');

            video.appendChild(source);
            parent.appendChild(video);
            break;
    }

    //resetar transição
    (document.getElementById('robotbox') as HTMLInputElement).style.display = 'none';
    setTimeout(comeback, 1)

    function comeback(){
        (document.getElementById('robotbox') as HTMLInputElement).style.display = 'flex';

        
    }
}

function typeWriter(falo) {
        if (i < falo.length) {
          (document.getElementById('typewritesound') as HTMLAudioElement).play();
          (document.getElementById("type") as HTMLInputElement).innerHTML += falo.charAt(i);
          i++;
          setTimeout(() => {typeWriter(falo)}, speed);
        } else {
          (document.getElementById('typewritesound') as HTMLAudioElement).pause();
          //colocar botão de volta
          (document.getElementById("nextbutton") as HTMLInputElement).style.display = 'block';
        }
      };
      
    return(
        <div className='main_cookierobot_cotainer'>
            <audio id='typewritesound' src={typewritesound} ></audio>
            <div className='robotbox' id='robotbox'>
                <div  id='tvscreen'>
                    <div className="face" id='face'>
                        <p className="glitch" id='textface'>
                        <span aria-hidden="true">{face}</span>
                            {face}
                        <span aria-hidden="true">{face}</span>
                        </p>
                    </div>
                </div>
                <img id='charimg' src={sprite} alt=""/>
            </div>
            <div className='textbox' id='textbox'>
                <div className='charname'>{infos.charname}</div>
                <span className='typewriter' id='type'></span>
                {fillspace}
                <button id='nextbutton' onClick={nextaction}>next</button>
            </div>
           
        </div>
    )

}
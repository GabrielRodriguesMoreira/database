import React, {useState, useEffect} from 'react'
import '../../styles/mobilestyles/mobilecookierobot.css'
import happyface from '../sources/happyface.webp'
import sadface from '../sources/sadface.webp'
import talk2 from '../sources/talk2.webp'
import surpreso from '../sources/surpreso.webp'
import pergunta from '../sources/pergunta.webp'
import seriusface from '../sources/seriusface.webp'
import typewritesound from '../sources/typewrite.wav'



export function MobileCookieRobot(){

  const [fillspace,setfillspace] = useState(<></>)
  const [img, setimg] = useState(happyface)
  const [action,setaction] = useState(0)
  const [actions,setactions] = useState('line1')
  var fala ='Olá estranho'
  const [infos, setinfos] = useState({
    name:'',
    charname:'',
    place:''
  })
  var i = 0;
  var speed = 35;

  useEffect(() => {
    window.alert("versão mobile ainda em desenvolvimento, por favor acesse por um computador")
    if(document.cookie.length>0){
      var obj = JSON.parse(document.cookie);
      setinfos({
        name: obj.name,
        charname:obj.charname,
        place:obj.place,
      });
      switch(obj.place){
        case 'praia':
      (document.getElementById("main_robot_container") as HTMLInputElement).style.backgroundImage = 'url(https://image.winudf.com/v2/image/Y29tLnNnbS5iZWF1dGlmdWxiZWFjaHdhbGxwYXBlcl9zY3JlZW5zaG90c18wXzFjMTMxZGFj/screen-0.jpg?fakeurl=1&type=.webp)'
        break;
        case 'futebol':
          (document.getElementById("main_robot_container") as HTMLInputElement).style.backgroundImage = 'url(https://img.freepik.com/fotos-gratis/estadio-de-futebol-3d-render-arena-de-campo-de-estadio-de-futebol_3544-1363.jpg?)'
          break;
        case 'parque':
          (document.getElementById("main_robot_container") as HTMLInputElement).style.backgroundImage = 'url(https://wallpaperaccess.com/full/1826326.jpg)'
        break;
    }
    setactions('line2')
    typeWriter(`Bem vindo de volta ${obj.name}`)
    } else {typeWriter(`Olá estraho!`)}
    var imageList = [sadface, happyface, seriusface, pergunta, surpreso, talk2]
    imageList.forEach((image) => {
        new Image().src = image
    });
  },[])

function nextaction(){
  //limpar caixa de texto
  (document.getElementById("type") as HTMLInputElement).innerHTML = '';
  i=0;
  //proxima ação
  setaction(action+1)

  //ações
if (actions=='line1'){
  switch (action){
    case 0:
      typeWriter('Parece que é sua primeira vez aqui, poderia me dizer seu nome?');
      setfillspace(<input type="text" id='namequestion' placeholder='type here'/>);
      setimg(surpreso);
      break;

    case 1:
      setinfos({
        name:(document.getElementById('namequestion') as HTMLInputElement).value,
        charname:'',
        place:''
      });
      typeWriter(`Entendido ${(document.getElementById('namequestion') as HTMLInputElement).value}, Parece que eu também não tenho um nome, poderia me dar um?`);
      (document.getElementById('namequestion') as HTMLInputElement).value = '';
      setfillspace((<input type="text" id='charname' placeholder='type here'/>));
      setimg(sadface);
      break;

    case 2:
      setinfos({
        name:infos.name,
        charname:(document.getElementById('charname') as HTMLInputElement).value,
        place:''
      });
     typeWriter('Ótima escolha!');
     setfillspace((<></>));
      setimg(happyface);
      break;

    case 3:
      typeWriter('Antes de sair por favor responda. Qual desses lugares você gosta mais?')
      setfillspace(<div className='localebuttons'> 
                    <button id='praiabutton' onClick={() =>{
                      setinfos({
                        name: infos.name,
                        charname: infos.charname,
                        place:'praia'
                      });
                       }}>Praia</button>

                    <button id='futebolbutton' onClick={() =>{
                      setinfos({
                        name: infos.name,
                        charname: infos.charname,
                        place:'futebol'
                      });
                      }}>Campo de futebol</button>
                    <button id='parquebutton' onClick={() =>{
                      setinfos({
                        name: infos.name,
                        charname: infos.charname,
                        place:'parque'
                      });
                       }}>Parque</button>
                  </div>)
         setimg(talk2);
      break;

    case 4:
      typeWriter('Perfeito, agora me da só um sengudo para que eu possa memorizar tudo.')
      setfillspace(<></>)
      console.log(infos);
      setimg(pergunta);
      document.cookie = JSON.stringify(infos);
      break;

    case 5:
      typeWriter('tudo pronto, da próxima vez que você recarregar a página terei novidades. Dê uma olhada nos outros projetos depois volte aqui.')
      setimg(talk2);
      break;

    case 6:
      setimg(sadface);
      (document.getElementById('name_text_container') as HTMLInputElement).style.display = 'none';
      break;


    }

  }

if (actions=='line2'){
  switch(action){
    case 0:
      typeWriter('Gostou do ambiente? Espero que sim.');
      setimg(talk2);
      break;

    case 1:
      typeWriter('Espera que botão é esse?')
      setimg(surpreso);
      break;
    
    case 2:
      typeWriter('Bem, mesmo sendo apenas um código não parece uma sensação muito boa ter a memória deletada.')
      setimg(sadface);
      break;
    
    case 3:
      typeWriter('Mas bem... Fica a seu critério.')
      setimg(pergunta);
      break;
    
    case 4:
      setimg(seriusface);
      (document.getElementById('name_text_container') as HTMLInputElement).style.display = 'none';
      break;
  }
}


(document.getElementById('Mobile_charimg') as HTMLInputElement).style.display = 'none';
setTimeout(comeback, 1)
  function comeback(){
    (document.getElementById('Mobile_charimg') as HTMLInputElement).style.display = 'block';
  }
  console.log(fala)
}

function typeWriter(falo) {
  console.log(falo)
  if (i < falo.length) {
    (document.getElementById('musicamanerona') as HTMLAudioElement).play();
    (document.getElementById("type") as HTMLInputElement).innerHTML += falo.charAt(i);
    i++;
    setTimeout(() => {typeWriter(falo)}, speed);
  } else {
    (document.getElementById('musicamanerona') as HTMLAudioElement).pause();
  }
};

return(
  
  <div className='Mobile_main_robot_container' id='main_robot_container'>
    <audio id='musicamanerona' src={typewritesound} ></audio>
    <div className='Mobile_name_text_container' id='name_text_container'>
      <div className='Mobile_charname'><p id='Mobile_charnameplace'>{infos.charname}</p></div>
      <div className='Mobile_textbox' >
        <span className='Mobile_typewriter' id='type'></span>
        {fillspace}
        <button onClick={nextaction}>next</button>
      </div>
    </div>
    <img src={img} id='Mobile_charimg'></img>
  </div>
)

}


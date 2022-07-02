import React, {useState, useEffect} from 'react'
import '../styles/robot.css'
import happyface from './sources/happyface.webp'
import sadface from './sources/sadface.webp'
import talk2 from './sources/talk2.webp'
import surpreso from './sources/surpreso.webp'
import pergunta from './sources/pergunta.webp'
import seriusface from './sources/seriusface.webp'
export function Ppm(){

  const [fillspace,setfillspace] = useState(<></>)
  const [fala,setfala] = useState(0);
  const [img, setimg] = useState(happyface)
  const [infos, setinfos] = useState({
    name:'',
    charname:'',
    place:''
  })

  var actions ='line1';

  var falas = ['Olá estranho!',
   'Parece que é sua primeira vez aqui, poderia me dizer seu nome?',
   `Entendido ${infos.name}, Parece que eu também não tenho um nome, poderia me dar um?`,
    'Ótima escolha!',
    'Antes de sair responda. Qual desses lugares você gosta mais?',
    'Perfeito, agora me da só um sengudo para eu memorizar tudo.',
  'tudo pronto, da próxima vez que você recarregar a página terei novidades. Dê uma olhada nos outros projetos depois volte aqui.']


  useEffect(() => {
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
      actions = 'line2';
      var falas = [`Bem vindo de volta ${obj.name}!`,'Gostou do novo ambiente?']
    } else {
    }
    console.log(infos)
  },[])

function nextaction(){
  setfala(fala+1);
  (document.getElementById('charimg') as HTMLInputElement).style.display = 'none';
  (document.getElementById('type') as HTMLInputElement).style.display = 'none';
  setTimeout(comeback, 1)

  //ações
  if (actions=='line1'){
  switch (fala+2){

    case 0:
      //six mana do nothing
      break;

    case 1:  
      (document.getElementById('namequestion') as HTMLInputElement).style.display = 'block';
      break;

    case 2:  
      setfillspace(<input type="text" id='namequestion' placeholder='type here'/>)
      setimg(surpreso);

      break;

    case 3:
      setinfos({
        name:(document.getElementById('namequestion') as HTMLInputElement).value,
        charname:'',
        place:''
      });
      (document.getElementById('namequestion') as HTMLInputElement).value = '';
      setfillspace((<input type="text" id='charname' placeholder='type here'/>));
      setimg(sadface);
      break;

    case 4:
      setinfos({
        name: infos.name,
        charname:(document.getElementById('charname') as HTMLInputElement).value,
        place:''
      });
      setimg(happyface);
      setfillspace(<></>)
      break;

    case 5:
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

      case 6:
        setfillspace(<></>)
        console.log(infos);
        setimg(pergunta);
        document.cookie = JSON.stringify(infos);
        break;
      
      case 7:
        console.log(document.cookie);
        setimg(talk2);
        break;

        case 8:
          setimg(sadface);
          (document.getElementById('name_text_container') as HTMLInputElement).style.display = 'none';
          break;
    }
  }

  function comeback(){
    (document.getElementById('charimg') as HTMLInputElement).style.display = 'block';
    (document.getElementById('type') as HTMLInputElement).style.display = 'block';
  }
}


return(
  
  <div className='main_robot_container' id='main_robot_container'>
    <div className='name_text_container' id='name_text_container'>
      <div className='charname'><p id='charnameplace'>{infos.charname}</p></div>
      <div className='textbox' >
        <span className='type' id='type' style={{ "--n":70} as React.CSSProperties}>{falas[fala]}</span>
        {fillspace}
        <button onClick={nextaction}>next</button>
      </div>
    </div>
    <img src={img} id='charimg'></img>
  </div>
)

}

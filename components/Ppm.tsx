import React, {useState, useEffect} from 'react'
import '../styles/robot.css'
import happyface from './sources/happyface.webp'
import sadface from './sources/sadface.webp'
import talk2 from './sources/talk2.webp'
import surpreso from './sources/surpreso.webp'
import pergunta from './sources/pergunta.webp'
import seriusface from './sources/seriusface.webp'


var pictures = []
export function Ppm(){




  const [fillspace,setfillspace] = useState(<></>)
  const [img, setimg] = useState(happyface)
  const [action,setaction] = useState(0)
  const [actions,setactions] = useState('line1')
  const [fala,setfala] = useState('Olá estranho')
  const [infos, setinfos] = useState({
    name:'',
    charname:'',
    place:''
  })

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
    setactions('line2')
    setfala(`Bem vindo de volta ${obj.name}`)
    }

    var imageList = [sadface, happyface, seriusface, pergunta, surpreso, talk2]
    imageList.forEach((image) => {
        new Image().src = image
    });
  },[])



  
function nextaction(){
  setaction(action+1);

  //ações
if (actions=='line1'){
  switch (action){

    case 0:
      setfala('Parece que é sua primeira vez aqui, poderia me dizer seu nome?')
      setfillspace(<input type="text" id='namequestion' placeholder='type here'/>)
      setimg(surpreso);
      break;

    case 1:
      setinfos({
        name:(document.getElementById('namequestion') as HTMLInputElement).value,
        charname:'',
        place:''
      });
      setfala(`Entendido ${(document.getElementById('namequestion') as HTMLInputElement).value}, Parece que eu também não tenho um nome, poderia me dar um?`);
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
     setfala('Ótima escolha!');
     setfillspace((<></>));
      setimg(happyface);
      break;

    case 3:
      setfala('Antes de sair por favor responda. Qual desses lugares você gosta mais?')
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
      setfala('Perfeito, agora me da só um sengudo para que eu possa memorizar tudo.')
      setfillspace(<></>)
      console.log(infos);
      setimg(pergunta);
      document.cookie = JSON.stringify(infos);
      break;

    case 5:
      setfala('tudo pronto, da próxima vez que você recarregar a página terei novidades. Dê uma olhada nos outros projetos depois volte aqui.')
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
      setfala('Gostou do ambiente? Espero que sim.');
      setimg(talk2);
      break;

    case 1:
      setfala('Espera que botão é esse?')
      setimg(surpreso);
      break;
    
    case 2:
      setfala('Bem, mesmo sendo apenas um código não parece uma sensação muito boa ter a memória deletada.')
      setimg(sadface);
      break;
    
    case 3:
      setfala('Mas bem... Fica a seu critério.')
      setimg(pergunta);
      break;
    
    case 4:
      setimg(seriusface);
      (document.getElementById('name_text_container') as HTMLInputElement).style.display = 'none';
      break;
  }
}


(document.getElementById('charimg') as HTMLInputElement).style.display = 'none';
(document.getElementById('type') as HTMLInputElement).style.display = 'none';
setTimeout(comeback, 1)

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
        <span className='type' id='type' style={{ "--n":70} as React.CSSProperties}>{fala}</span>
        {fillspace}
        <button onClick={nextaction}>next</button>
      </div>
    </div>
    <img src={img} id='charimg'></img>
  </div>
)

}
function componentDidMount() {
  throw new Error('Function not implemented.')
}



import '../styles/randomstore.css'
import React, {useState, useEffect} from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';


export function RandomStore(){
  const defobj = {
    key: String(new Date().valueOf()),
    name:"knife",
    price: 21.50,
    img:'https://cdn.picpng.com/knives/shape-knives-39538.png'
  }
  const [components,setcomponenets] = useState([defobj])
  const [visible, setvisible] = useState('none')

  return(
    <div className='mainstore'>
            <Createscreen visibility={visible} />
      <div className='Store_header'>
      <h1>Store Name</h1>
      <button onClick={() =>{ setvisible('flex')}}>Criar Produto</button>
      </div>


      <div className='main_store_container'>
        {components.map(componenet => {
          return <Product stats={componenet}  />
        })}
      </div>
    </div>
  )

  function Createscreen(props){
    function addComponent(){
      const obj = {
        key: String(new Date().valueOf()),
        name: String((document.getElementById('productname') as HTMLInputElement).value),
        price: Number((document.getElementById('productprice') as HTMLInputElement).value),
        img:String((document.getElementById('productimg') as HTMLInputElement).value)
      }
      setcomponenets([...components,obj]);
      setvisible('none')
    }

    return(
      <div id='createscreen_container' style={{display:props.visibility}}>
          <button 
          onClick={() =>{setvisible('none')}}
          className='closebutton'>
            <GrClose />
          </button>
          <span>Nome do produto:</span>
          <input type="text" id='productname' />
          <span>Preço do produto:</span>
          <input type="number" id='productprice' />
          <span>URL da Imagem do produto:</span>
          <input type="text" id='productimg' />
          <button onClick={addComponent} >Criar </button>
      </div>
    )
  }
}

function Product(props){

  const [visible, setvisible] = useState('none')
  var id = props.stats.key;

  function selfdestruction(){
    let element = (document.getElementById(id) as HTMLInputElement);
    element.remove()
  }

  return(
      <div className='product_container' id={id}>
        <Edit isvisibility={visible} id={id}  />
          <button onClick={() =>{ 
            if(visible=='none'){
              setvisible('flex')
          } else {setvisible('none')}
        }} 
            id='editbutton'><AiFillEdit />
            </button>
        <div className='imgcontainer'>
            <img src={props.stats.img} alt="product image" id= {id+'productimg'} />
        </div>
        <div className='producttexts'>
          <h1 id={id+'productname'}>{props.stats.name}</h1>
          <h1 id={id+'productprice'}> R$: {props.stats.price}</h1>
        </div>
          <button >Comprar</button>
          <button onClick={selfdestruction}>deletar</button>
      </div>
  )

  function Edit(props){
    
    function changeall(){
      let oldname = (document.getElementById(props.id+'productname') as HTMLInputElement);
      let oldimg = (document.getElementById(props.id+'productimg') as HTMLInputElement);
      let oldprice = (document.getElementById(props.id+'productprice') as HTMLInputElement);
      
      oldname.innerHTML = (document.getElementById(props.id+'newname') as HTMLInputElement).value;
      oldprice.innerHTML = (document.getElementById(props.id+'newprice') as HTMLInputElement).value;
      oldimg.src = (document.getElementById(props.id+'newimg') as HTMLInputElement).value;
      setvisible('none')
    }
    
    return(
      <div className='Editscreen' style={{display:props.isvisibility}}>
        <span>Novo nome:</span>
        <input type="text" id={props.id+'newname'} />
        <span>Novo valor:</span>
        <input type="number" id={props.id+'newprice'}/>
        <span>Nova imagem:</span>
        <input type="text" id={props.id+'newimg'} />
        <button onClick={changeall}>Change</button>
      </div>
    )
  }

}

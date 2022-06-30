import '../styles/randomstore.css'
import React, {useState, useEffect} from 'react'



export function RandomStore(){
  const defobj = {
    id: String(new Date().valueOf()),
    name:"knife",
    price: 21.50,
    img:'https://i.imgur.com/nD24joWb.jpg'
  }
  const [components,setcomponenets] = useState([defobj])
  const [visible, setvisible] = useState('none')


  return(
    <div className='mainstore'>
      <div className='Store_header'>
      <h1>Store Name</h1>
      <button onClick={() =>{ setvisible('flex')}}>Criar Produto</button>
      </div>

      <Createscreen visibility={visible} />
      <div className='main_store_container'>
        {components.map(componenet => {
          return <Product stats={componenet} />
        })}
      </div>
    </div>
  )

  function Createscreen(props){
    function addComponent(){


      const obj = {
        id: String(new Date().valueOf()),
        name: String((document.getElementById('productname') as HTMLInputElement).value),
        price: Number((document.getElementById('productprice') as HTMLInputElement).value),
        img:String((document.getElementById('productimg') as HTMLInputElement).value)
      }
      setcomponenets([...components,obj]);
      setvisible('none')


    }
    return(
      <div id='createscreen_container' style={{display:props.visibility}}>
          <span>Nome do produto:</span>
          <input type="text" id='productname' />
          <span>Preço do produto:</span>
          <input type="number" id='productprice' />
          <span>Imagem do produto:</span>
          <input type="text" id='productimg' />
          <input type="file" id='productimgfile' />
          <button onClick={addComponent} >Criar </button>
      </div>
    )
  }
}


function Product(props){
  function selfdestruction(){
    let element = (document.getElementById(props.stats.id) as HTMLInputElement);
    element.remove()
  }
  return(
      <div className='product_container' id={props.stats.id}>
        <div className='imgcontainer'>
            <img src={props.stats.img} alt="product image" />
        </div>
        <div className='producttexts'>
          <h1>{props.stats.name}</h1>
          <h1> R$: {props.stats.price}</h1>
        </div>
          <button onClick={() =>{window.alert('????')}}>Comprar</button>
          <button onClick={selfdestruction}>deletar</button>
      </div>
  )
}


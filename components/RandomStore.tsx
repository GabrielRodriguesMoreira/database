import '../styles/randomstore.css'
import React, {useState, useEffect} from 'react'


var counter = 0;
export function RandomStore(){
 
    const defaultobj = {
        id: String(new Date().valueOf()),
        name:"knife",
        price: 21.50,
        img:'https://i.imgur.com/nD24joWb.jpg'
    }

const [components, setComponents] = useState([defaultobj]); 

useEffect(() => {
  if(document.cookie.length>0){
  console.log(document.cookie)
  const mounter = JSON.parse(document.cookie)
  console.log(mounter)
  for(let i=0;i<mounter.length;i++){
    console.log("mamacita")
    addComponent(mounter[i].id,mounter[i].name,mounter[i].price,mounter[i].img)
  }
}
  },[])

    function addComponent(id,name,price,img) {

      if(id==null){
        id = String(new Date().valueOf()) 
        name = String((document.getElementById('productname') as HTMLInputElement).value)
        price = Number((document.getElementById('productprice') as HTMLInputElement).value),
        img = String((document.getElementById('productimg') as HTMLInputElement).value)

      }
      const obj = {
        id: id,
        name: name,
        price: price,
        img: img
    }
      setComponents([...components,obj]);
      document.cookie = JSON.stringify(components);
    }

    return (
      <div className='storeparent'>
        <input type="text" id='productname' />
        <input type="number" id='productprice' />
        <input type="text" id='productimg' />
        <button onClick={() =>{addComponent(null,null,null,null)}} >pindamonhagaba </button>

        <div className='main_store_container'>
          {components.map((item) => ( <Component set={item} />))} 
        </div>
      </div>
    )
}




function Component(props){

    function selfdestruction(){
      let element = (document.getElementById(props.set.id) as HTMLInputElement);
      element.remove()
    }

    return(
        <div className='product_container' id={props.set.id}>
            <img src={props.set.img} alt="" />
            <h1>{props.set.name}</h1>
            <h1>{props.set.price}</h1>
            <button onClick={selfdestruction}>delete</button>
        </div>
    )
}
import {useState, useEffect} from 'react'
import '../styles/randomstore.css'

const apiSecret2 = import.meta.env.VITE_APP_IMGSPALASH_API_SECRET; 

export function RandomStore(){

    function createitem(){
        fetch(`https://api.unsplash.com/photos/?client_id=${apiSecret2}`)
        .then(response => response.json())
        .then( response => {
            console.log(response)
            if(response){
                let storeparent = (document.getElementById('storeparent') as HTMLInputElement);
                let productdiv = document.createElement('div')
                let imgproduct = document.createElement('img');
                let productname = document.createElement('p');
                let productprice = document.createElement('p');
                productdiv.setAttribute('class','product_container')
                productname.textContent = response?.[0].alt_description;
                productprice.textContent = String((Math.random() * 10000).toFixed(2));
                imgproduct.setAttribute('src',response?.[0]?.['urls']?.small)
                console.log(productname);
                productdiv.append(imgproduct, productname, productprice);
                storeparent.appendChild(productdiv)
            }
        })
    }

    return(
        <div className='main_store_container'>
            <div id='storeparent'>
                <button onClick={createitem}>click-me</button>
            </div>
        </div>
    )
}
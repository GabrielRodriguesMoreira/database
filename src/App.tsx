import React,{ useState } from 'react'
import '../styles/App.css'
import {Navbar} from '../components/Navbar'
import {Ppm} from '../components/Ppm'
import {Quiz} from '../components/Quiz'
import {Fut} from '../components/fut'
import { BiHelpCircle } from 'react-icons/bi';





export default function  App() { 

  const[state, setState]=useState(<Fut />);
  const [helptext, sethelptext]=useState("placeholder");


    return (
      
      <div className="App">
        <div className="Square"> </div>
        <Navbar stateChanger={setState} estadomudador={sethelptext} style={{zIndex:99}} />
        <div className="content" style={{zIndex:0}}>
          {state}
          <div className="help" > <BiHelpCircle /> 
          </div>
          <div className='helptext'>
            <p>{helptext}</p>
          </div>
        </div>
        

      </div>
    )
}



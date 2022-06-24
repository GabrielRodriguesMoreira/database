import React,{ useState } from 'react'
import '../styles/App.css'
import {Navbar} from '../components/Navbar'
import {Ppm} from '../components/Ppm'
import {Quiz} from '../components/Quiz'
import {Fut} from '../components/fut'
import { BiHelpCircle } from 'react-icons/bi';
export default function  App() { 

  const[state, setState]=useState(<Ppm />);
  const [helptext, sethelptext]=useState("placeholder");


    return (
      
      <div className="App">
        <div className="Square"> </div>
        <Navbar stateChanger={setState} estadomudador={sethelptext} />
        <div className="content" style={{zIndex:0}}>
          {state}
          <div className="help" > <BiHelpCircle /> 
          </div>
          <div className='helptext'>
            <p>{helptext}</p>
          </div>
        </div>
        
        <img className='aqua' src="../components/sources/profile.gif" alt="profile pic" width={120} />
      </div>
    )
}



import React,{ useState } from 'react'
import '../styles/App.css'
import {Navbar} from '../components/Navbar'
import {Ppm} from '../components/Ppm'
import {Quiz} from '../components/Quiz'
import { BiHelpCircle } from 'react-icons/bi';





export default function  App() { 

  const[state, setState]=useState(<Ppm />);


    return (
      
      <div className="App">
        <div className="Square"> </div>
        <Navbar stateChanger={setState} />
        <div className="content">
          {state}
          <div className="help" > <BiHelpCircle /> </div>
        </div>
        

      </div>
    )
}



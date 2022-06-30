import React,{ useState } from 'react'
import ReactDOM from 'react-dom'
import '../styles/App.css'
import {Navbar} from '../components/Navbar'
import {Ppm} from '../components/Ppm'
import {Fut} from '../components/fut'
import {Profile} from '../components/Profile'




export default function  App() { 

  const[state, setState]=useState(<Profile />);
    return (
      <div className="App">
        <Navbar stateChanger={setState} />
        <div className="content">
          {state}
        </div>
      </div>
    )
}



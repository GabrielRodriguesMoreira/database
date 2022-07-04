import './styles/app.css'
import React,{useState} from 'react'
import {Header} from './pages/Header'
import {Profile} from './pages/Profile'
import {CookieRobot} from './pages/CookieRobot'

function App() {
  const[state, setState]=useState(<Profile />);
  return (
    <div className="App">
      <Header stateChanger={setState} />
      <div className='content'>
      {state}
      </div>
    </div>
  )
}

export default App

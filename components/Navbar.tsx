import '../styles/Navbar.css'
import React from 'react'
import {Ppm} from '../components/Ppm'
import {Quiz} from '../components/Quiz'
import {Fut} from '../components/fut'
import {Profile} from '../components/Profile'
import logo from './sources/logo.png'

export function  Navbar({stateChanger, ...rest}) {
  return(
    <div className="navcontainer">
      <nav className="header">
        <div className='logo'><img src={logo} alt="logo" /> </div>
        <div className="navlinks">
           <a onClick={() => {stateChanger(<Ppm />)}} >PROJETO 1</a>
           <a onClick={() => {stateChanger(<Quiz />) }} >PROJETO 2</a>
           <a onClick={() => {stateChanger(<Fut />)}} >PROJETO 3</a>
           <a onClick={() => {stateChanger(<Profile />)}} >PERFIL</a>
        </div>
      </nav>
    </div>
  )
}

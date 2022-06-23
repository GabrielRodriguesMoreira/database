import '../styles/Navbar.css'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import {Ppm} from '../components/Ppm'
import {Quiz} from '../components/Quiz'
import {Fut} from '../components/fut'


const helps = ['roboi po', 'eu vou caiir', 'me ajuda aqui vei']

export function  Navbar({stateChanger, estadomudador, ...rest}) {
  return(
    <div className="navcontainer">
      <nav className="header">
        <div className='logo'><img src="../components/sources/logo.webp" alt="logo" /> </div>
        <div className="navlinks">
           <a onClick={() => {stateChanger(<Ppm />), estadomudador(helps[0])}} >PROJECT 1</a>
           <a onClick={() => {stateChanger(<Quiz />), estadomudador(helps[1]) }} >PROJECT 2</a>
           <a onClick={() => {stateChanger(<Fut />), estadomudador(helps[2])}} >PROJECT 3</a>
           <a onClick={() => {stateChanger(<Fut />), estadomudador(helps[2])}} >PROFILE</a>
          <div className="menu"> <GiHamburgerMenu /></div>
        </div>

      </nav>
    </div>
  )
}

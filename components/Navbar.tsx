import '../styles/Navbar.css'
import React from 'react'
import {Ppm} from '../components/Ppm'
import {Quiz} from '../components/Quiz'
import {Fut} from '../components/fut'
import {Profile} from '../components/Profile'

const helps = ['roboi po', 'eu vou caiir', 'me ajuda aqui vei']

export function  Navbar({stateChanger, estadomudador, ...rest}) {
  return(
    <div className="navcontainer">
      <nav className="header">
        <div className='logo'><img src="./sources/logo.webp" alt="logo" /> </div>
        <div className="navlinks">
           <a onClick={() => {stateChanger(<Ppm />), estadomudador(helps[0])}} >PROJETO 1</a>
           <a onClick={() => {stateChanger(<Quiz />), estadomudador(helps[1]) }} >PROJETO 2</a>
           <a onClick={() => {stateChanger(<Fut />), estadomudador(helps[2])}} >PROJETO 3</a>
           <a onClick={() => {stateChanger(<Profile />), estadomudador(helps[3])}} >PERFIL</a>

        </div>
      </nav>
    </div>
  )
}

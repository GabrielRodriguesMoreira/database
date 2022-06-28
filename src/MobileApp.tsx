import '../styles/mobilestyles/mobileapp.css'
import React,{ useState } from 'react'
import {MobileNavbar} from '../components/mobile_components/MobileNavbar'
import {MobileProfile} from '../components/mobile_components/MobileProfile'
import {MobilePpm} from '../components/mobile_components/MobilePpm'



export default function  MobileApp() { 
  const[state, setState]=useState(<MobileProfile />);
  
    return (
      <div >
            <MobileNavbar stateChanger={setState} />
            <div className='navbarspacing'></div>
              {state}
            <footer>
              <p>placeholder footer</p>
            </footer>
      </div>
    )
}



import logo from '../sources/logo.png'
import '../../styles/mobilestyles/mobilenavbar.css'
import { GiHamburgerMenu } from 'react-icons/gi';

export function MobileNavbar(){
    return(
        <div className='mobilenavcontainer'>
            <img src={logo} alt="logo" width={120} />
            <div className='mobilenavmenu'><GiHamburgerMenu /></div> 
        </div>
    )
}
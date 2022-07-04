import '../styles/cookierobot.css'
import spr1 from '../componenets/spr1.webp'
import spr2 from '../componenets/spr2.webp'

var text = 'ಠ _ ಠ'
export function CookieRobot(){
    return(
        <div className='main_cookierobot_cotainer'>
            <div className='robotbox'>
                <div  id='tvscreen'>
                    <div className="container">
                        <p className="glitch">
                        <span aria-hidden="true">{text}</span>
                        {text}
                        <span aria-hidden="true">{text}</span>
                        </p>
                    </div>
                    </div>
                <img src={spr2} alt=""/>
            </div>
        </div>
    )
}
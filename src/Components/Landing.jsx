import React from 'react'
import '../Assets/Styles/Landing.css'
import RedScribble from '../Assets/Images/RedScribble.png'
import BlueScribble from '../Assets/Images/BlueScribble.png'
import CRLogo from '../Assets/Images/CRLogo.png'
import LandingLogo from '../Assets/Images/LandingCover.png'

export default function Landing() {
  return (
<div className="container">
  <div className="Bottom">
    <div className='Bottom-flex'>
        <div className='left-img'>
          <img src={RedScribble} alt="Img Loading..." className='img-size left-img'/>
        </div>
        <div className='right-img'>
          <img src={BlueScribble} alt="Img Loading..." className='img-size right-img'/>
        </div>
    </div>
  </div>
  <div className="Top">
    <div className='TopFlex'>
      <div className='Section'>
        <header>CR Riddle</header>
        <h3>A simple Riddle game</h3>
        <p>This little game is a gussing game , if you are so good at this game its time for you to touch some grass man but if you like this game fund me so i can publish this on a seperate domain</p>
        <div>
          <button>Play Now</button>
          <button>Know how to play?</button>
        </div>
      </div>
      <div className='coverImg'>
        <div>
          <img src={CRLogo} alt="" srcset="" />
        </div>
        <div>
          <img src={LandingLogo} alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

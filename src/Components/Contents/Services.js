import React from 'react'
import '../Contents/ServiceStyle.css'
import UI from '../../Assets/ui.png'
import Web from '../../Assets/web.png'
import Mobile from '../../Assets/mobile.png'
const services = () => {
  return (
    <div className='services-box'>
        <div className='container'>
            <div className='service-item'>
                <div className='service-item-icon service-ui'>
                    <img className='service-icon' src={UI} alt='ui-ux'/>
                </div>
                <div className='service-item-label'>
                    <p>UI / UX Design</p>
                </div>
            </div>

            <div className='service-item'>
                <div className='service-item-icon service-web'>
                <img className='service-icon' src={Web} alt='web development'/>
                </div>
                <div className='service-item-label'>
                    <p>Web Development</p>
                </div>
            </div>

            <div className='service-item'>
                <div className='service-item-icon service-mobile'>
                <img className='service-icon' src={Mobile} alt='mobile development'/>
                </div>
                <div className='service-item-label'>
                    <p>Mobile Development</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default services
import React from 'react'
import '../Contents/WorkStyle.css'
import UI from '../../Assets/ui.png'
import Web from '../../Assets/web.png'
import Mobile from '../../Assets/mobile.png'
const work = () => {
  return (
    <>
        <div className='container'>
            <div class="grid grid-flow-col gap-3 connect">
                <div class=" col-span-4 connect-width">
                    <p className='lets-connect'>Let's Work Together</p>
                </div>
                <div class=" col-span-4">
                    
                    <p className='connect-email'>freelance.jason24608@gmail.com</p>

                    <div className='container'>
                        <div className='connect-item'>
                            <div className='connect-item-icon service-ui'>
                                <img className='service-icon' src={UI} alt='ui-ux'/>
                            </div>
                            
                        </div>

                        <div className='connect-item'>
                            <div className='connect-item-icon service-web'>
                            <img className='service-icon' src={Web} alt='web development'/>
                            </div>
                            
                        </div>

                        <div className='connect-item'>
                            <div className='connect-item-icon service-mobile'>
                            <img className='service-icon' src={Mobile} alt='mobile development'/>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default work
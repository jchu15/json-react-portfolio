import React from 'react'
import '../Contents/AboutStyle.css'
import AboutImg from '../../Assets/about.png'
const About = () => {
  return (
    <> 
       
     
           
            <p className=' about-title'>About Me</p>
            


               <div class="grid grid-flow-col gap-3">
                <div class=" col-span-4">
                <img className='about-img' src={AboutImg} alt='Me img' /> 
                </div>
                <div class=" col-span-4">
                <p className='about-me'>Hi there, Thank you for visiting my portfolio. 
                    I am a UI/UX Designer and also a Web Developer
                    with 2+ years of experience in the field with 
                    companies and a freelance. based on the philippines.</p>
                </div>
                </div>
        
    </>
  )
}

export default About
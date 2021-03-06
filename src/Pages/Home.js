import React from 'react'
 import Navbar from '../Components/Navbar/Navbar'
import Carousel from '../Components/Contents/Carousel'
import Services from '../Components/Contents/Services'
import About from '../Components/Contents/About'
import Work from '../Components/Contents/Work'
//import Footer from '../Components/Footer/Footer'
export const Home = () => {
  return (
    <>
    <Navbar />
    <Carousel />
    <Services />
    <About />
    <Work />
    </>
  )
}
export default Home

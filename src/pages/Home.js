import React from 'react'
import MainCarousel from '../components/MainCarousel/MainCarousel'
import Header from '../components/Header/Header'
import MainAbout from '../components/MainAbout/MainAbout'
import Footer from '../components/Footer/Footer'
import ButtonToTop from '../components/ButtonToTop/ButtonToTop'


const Home = () => {
  return (
    <div>
      <Header/>
      <MainCarousel/>
      <MainAbout/>
      <ButtonToTop/>
      <Footer/>
    </div>
  )
}

export default Home

import React from 'react'
import ButtonToTop from "../components/ButtonToTop/ButtonToTop"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Schedules from "../components/Schedules/Schedules"
import SpeakersCards from '../components/SpeakersCards/SpeakersCards'

const AboutEvent = () => {
  return (
    <div>
      <Header/>
      <Schedules/>
      <SpeakersCards/>
      <ButtonToTop/>
      <Footer/>
    </div>
  )
}

export default AboutEvent

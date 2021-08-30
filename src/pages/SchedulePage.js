import React from 'react'
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Schedules from "../components/Schedules/Schedules"
import ButtonToTop from "../components/ButtonToTop/ButtonToTop"

const SchedulePage = () => {
  return (
    <div>
      <Header/>
      <Schedules/>
      <ButtonToTop/>
      <Footer/>
    </div>
  )
}

export default SchedulePage

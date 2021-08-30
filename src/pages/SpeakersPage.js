import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import SpeakersCards from '../components/SpeakersCards/SpeakersCards'
import ButtonToTop from '../components/ButtonToTop/ButtonToTop'

const SpeakersPage = () => {
  return (
    <div>
      <Header/>
      <SpeakersCards/>
      <ButtonToTop/>
      <Footer/>
    </div>
  )
}

export default SpeakersPage

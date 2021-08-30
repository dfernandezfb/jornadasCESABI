import React from 'react'
import {useState} from 'react'
import {FaArrowUp} from 'react-icons/fa'
import './ButtonToTop.css'

const ButtonToTop = () => {
  const [visible, setVisible]= useState(false)
  const toTop = ()=>{
    window.scrollTo(0,0)
  }
  window.addEventListener('scroll',()=>{
    if(window.scrollY<40){
      setVisible(false);
    }else{
      setVisible(true);
    }
  })
  return (
    <button id="button-to-top" onClick={toTop} style={{display:visible?'block':'none'}}>
      <FaArrowUp/>
    </button>
  )
}

export default ButtonToTop

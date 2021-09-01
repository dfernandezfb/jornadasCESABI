import React from 'react'
import unaj1 from './../../assets/images/unaj1.jpg'
import unaj2 from './../../assets/images/unaj2.png'
import facetunt from './../../assets/images/facet-unt.png'
import './MainAbout.css'

const MainAbout = () => {
  return (
    <div className='container'>
      <div className='row mb-2'>
        <div className='col-4 about-event-title d-flex justify-content-center align-items-center'>
          <h1 className='text-light'> Sobre el evento</h1>
        </div>
        <div className='col-8 d-flex justify-content-center align-items-center'>
          <p className=''> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eos aliquam facilis, iste dolore, praesentium qui vitae illum adipisci asperiores recusandae voluptates atque perspiciatis veniam magnam expedita obcaecati quam dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eos aliquam facilis, iste dolore, praesentium qui vitae illum adipisci asperiores recusandae voluptates atque perspiciatis veniam magnam expedita obcaecati quam dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eos aliquam facilis, iste dolore. 
          </p>
        </div>
      </div>
      <div className='row mb-3'>
        <div className='px-0 about-event-image'/>
      </div>
      <div className='row mb-2'>
        <div className='col-8 d-flex justify-content-center align-items-center'>
          <p className=''> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eos aliquam facilis, iste dolore, praesentium qui vitae illum adipisci asperiores recusandae voluptates atque perspiciatis veniam magnam expedita obcaecati quam dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eos aliquam facilis, iste dolore, praesentium qui vitae illum adipisci asperiores recusandae voluptates atque perspiciatis veniam magnam expedita obcaecati quam dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eos aliquam facilis, iste dolore. 
          </p>
        </div>
        <div className='col-4 about-us-title d-flex justify-content-center align-items-center'>
          <h1 className=''> ¿Quienes somos? </h1>
        </div>
      </div>
      <div className='row mb-5'>
        <div className='px-0 about-us-image'/>
      </div>
      <h2 className="text-center my-5">Auspician este evento</h2>
      <div className="d-flex"></div>
      <h2 className="text-center my-5">Apoyan este evento</h2>
      <div className="d-flex mb-5 justify-content-around flex-wrap">
        <img src={unaj1} alt="logo-unaj" className="logos-bajos m-4" />
        <img src={unaj2} alt="logo-unaj" className="logos-bajos m-4" />
        <img src={facetunt} alt="logo-facet-unt" className="logos-altos m-4" />
      </div>
    </div>
  )
}

export default MainAbout

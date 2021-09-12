import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ponentes from './../../assets/images/ponentes.png'
import descuento from './../../assets/images/descuento.png'
import sponsor from './../../assets/images/sponsor.png'
import './MainCarousel.css'

const MainCarousel = () => {

  return (
    <Carousel className='mb-3' nextLabel='' prevLabel=''>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ponentes}
          alt="First slide"
          />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={descuento}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sponsor}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default MainCarousel
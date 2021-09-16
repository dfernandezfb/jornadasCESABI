import React from 'react'
import useMediaQuery from '../../hooks/useMediaQuery.js'
import Carousel from 'react-bootstrap/Carousel'
import premios from './../../assets/images/premios.png'
import premiossm from './../../assets/images/premios-sm.png'
import desc from './../../assets/images/desc.png'
import descsm from './../../assets/images/desc-sm.png'
import beneplacito from './../../assets/images/beneplacito.png'
import beneplacitosm from './../../assets/images/beneplacito-sm.png'
import './MainCarousel.css'

const MainCarousel = () => {
  const {width} = useMediaQuery();
  return (
    width>592?
    <Carousel className='mb-3' nextLabel='' prevLabel=''>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={beneplacito}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desc}
          alt="Second slide"
          />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={premios}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    :
    <Carousel className='mb-3' nextLabel='' prevLabel=''>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={beneplacitosm}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={descsm}
          alt="Second slide"
          />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={premiossm}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default MainCarousel
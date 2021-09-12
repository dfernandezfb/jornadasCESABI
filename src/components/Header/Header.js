import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import brand from './../../assets/images/cesabi-horizontal.png'
// import brand from './../../assets/images/cesabi-original.png'
import './Header.css'

const Header = () => {
  const location = useHistory().location.pathname;
  return (
    <Navbar collapseOnSelect expand="lg" className='pbg-darkblue'>
      <Container className='d-flex justify-content-between'>
        <Navbar.Brand href="/">
          {/* <img
            alt=""
            src={brand}
            width="120"
            height="75" 
            className="d-inline-block align-top"
          /> */}
          <img
            alt=""
            src={brand}
            width="250"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='pbg-green' />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <div className="nav-menu">
            {location=='/'?<Link to='/' className='mx-3 nav-links nav-link-active'>Home</Link>:<Link to='/' className='mx-3 nav-links'>Home</Link>}
            {location.includes('/inscripcion')?<Link to='/inscripcion' className='mx-3 nav-links nav-link-active'>Inscríbete</Link>:<Link to='/inscripcion' className='mx-3 nav-links'>Inscríbete</Link>}
            {location.includes('/evento')?<Link to='/evento' className='mx-3 nav-links nav-link-active'>Sobre el evento</Link>:<Link to='/evento' className='mx-3 nav-links'>Sobre el evento</Link>}
            {location.includes('/capitulo')?<Link to='/capitulo' className='mx-3 nav-links nav-link-active'>¿Quienes somos?</Link>:<Link to='/capitulo' className='mx-3 nav-links'>¿Quienes somos?</Link>}
            <a href='https://sabi.org.ar/socios/' target='_blank' rel="noopener noreferrer" className='mx-3 nav-links'>Asociate a SABI</a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

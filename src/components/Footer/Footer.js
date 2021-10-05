import React from 'react'
import {Link} from 'react-router-dom'
import { FaInstagram, FaFacebook, FaLinkedin, FaEnvelope, FaUser } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <div className="container-fluid text-light bg-dark">
      <div className="row p-3">
        <div className="col-md-12 col-lg-6 p-3 d-flex flex-column">
          <h4>I Jornadas CESABI</h4>
          <p className='text-light'> Sitio oficial de las I Jornadas de Bioingeniería del Capítulo de Estudiantes de la Sociedad Argentina de Bioingeniería.</p>
          <div className='d-flex justify-content-evenly mt-3'>
            <div className='footer-cesabi mb-3'></div>
            <div className='footer-sabi mb-3'></div>
          </div>
        </div>
        <div className="col-12 col-lg-3 p-3">
          <h4 className="text-center">Redes Sociales</h4>
          <div className="social-icons mt-3">
            <a className="icon social-icon p-1" target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/capituloestudiantilsabi/"><FaInstagram /></a>
            <a className="icon social-icon p-1" target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/cesabi.sabi.9"><FaFacebook /></a>
            <a className="icon social-icon p-1" target='_blank' rel="noopener noreferrer" href="https://ar.linkedin.com/in/capitulo-de-estudiantes-sociedad-argentina-de-bioingenier%C3%ADa-8262741b9"><FaLinkedin /></a>
          </div>
        </div>
        <div className="col-12 col-lg-3 p-3 mb-2">
          <h4 className="text-center">Contactanos</h4>
          <div className="col-12 text-center mb-4">
            <a className='icon social-icon' href='mailto:capituloestudiantes@sabi.org.ar'><FaEnvelope /></a>
            <p>capituloestudiantes@sabi.org.ar</p>
          </div>
          <h4 className="text-center">Acerca de nosotros</h4>
          <div className="col-12 text-center">
            <Link to="/capitulo" className="icon social-icon"><FaUser /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

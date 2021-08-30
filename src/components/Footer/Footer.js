import React from 'react'
import {FaInstagram, FaFacebook, FaLinkedin, FaEnvelope} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
      <div className="container-fluid text-light bg-dark">
        <div className="row p-3">
          <div className="col-md-12 col-lg-6 p-3 d-flex flex-column">
            <h4>I Jornadas CESABI</h4>
            <p className='text-light'> Breve descripción del capitulo o del evento? Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            <div className='d-flex justify-content-around mt-3'>
              <div className='footer-cesabi'></div>
              <div className='footer-sabi'></div>
            </div>
          </div>
          <div className="col-12 col-lg-3 p-3">
            <h4 className="text-center">Redes Sociales</h4>
            <div className="social-icons mt-3">
              <a className="icon social-icon p-1" target='_blank' rel='noreferrer' href="https://www.instagram.com/capituloestudiantilsabi/"><FaInstagram/></a>
              <a className="icon social-icon p-1" target='_blank' rel='noreferrer' href="https://www.facebook.com/cesabi.sabi.9"><FaFacebook/></a>
              <a className="icon social-icon p-1" target='_blank' rel='noreferrer' href="https://ar.linkedin.com/in/capitulo-de-estudiantes-sociedad-argentina-de-bioingenier%C3%ADa-8262741b9"><FaLinkedin/></a>
            </div>
          </div>
          <div className="col-12 col-lg-3 p-3 mb-2">
            <h4 className="text-center">Contactanos</h4>
              <div className="col-12 text-center">
                <a className='icon social-icon' href='mailto:capituloestudiantil@sabi.org.ar'><FaEnvelope/></a>
                <p>capituloestudiantil@sabi.org.ar</p>
            </div>
          </div>
          </div>
        </div>
        )
}

export default Footer

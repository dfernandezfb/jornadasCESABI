import React from 'react'
import {Link} from 'react-router-dom'
import nosotros from './../../assets/images/nosotros.png'
import meeting from './../../assets/images/meeting.png'
import unaj1 from './../../assets/images/unaj1.jpg'
import unaj2 from './../../assets/images/unaj2.png'
import facetunt from './../../assets/images/facet.svg'
import fiunsj from './../../assets/images/fi-unsj.png'
import uf from './../../assets/images/uf.png'
import um from './../../assets/images/um.png'
import fiuner from './../../assets/images/fi-uner.jpg'
import coral from './../../assets/images/coral.png'
import drk from './../../assets/images/drk.png'
import fcefynunc from './../../assets/images/unc.svg'
import eicaunvime from './../../assets/images/unvime.svg'
import './MainAbout.css'
import useMediaQuery from '../../hooks/useMediaQuery'

const MainAbout = () => {
  const { width } = useMediaQuery();
  return (
    <main className='container'>
      <div className='row mb-2'>
        <div className='col-md-4 about-event-title d-flex justify-content-center align-items-center py-3 mb-2'>
          <h1 className='text-light'> Sobre el evento</h1>
        </div>
        <div className='col-md-8 d-flex justify-content-center align-items-center'>
          <p style={{ textAlign: 'justify' }}>
            Las I Jornadas de Bioingeniería - CESABI buscan brindar un espacio de intercambio entre estudiantes y profesionales de la Bioingeniería con el objeto de promocionar y difundir las diferentes áreas de la carrera. Está organizada en un bloque de 6 días, desde el 12 al 17 de octubre. Por la mañana, de martes a viernes, los asistentes podrán participar de charlas brindadas por profesionales de las diversas áreas de la carrera, mientras que por la tarde, se dictarán workshops prácticos. Por último, desde el día viernes por la tarde, se dará inicio al Hackathon, que consistirá en la resolución por grupos de problemáticas planteadas al inicio del evento, incentivando el trabajo en equipo, la comunicación interdisciplinaria y la creatividad a la hora de resolver problemas.
          </p>
        </div>
      </div>
      <div className='row mb-3 justify-content-center'>
        <img src={meeting} alt="meeting" style={{ width: '70%' }} />
      </div>
      {
        width > 768 ?
          (
            <div className='row mb-2'>
              <div className='col-md-8 d-flex justify-content-center align-items-center'>
                <p style={{ textAlign: 'justify' }}>
                  Somos un grupo de estudiantes de ingeniería biomédica/bioingeniería ubicados en distintos puntos del país, pero unidos con el mismo objetivo: crear un ámbito formal dentro de la sociedad para generar y proponer actividades de interés. Creemos que tener redes de contactos con profesionales de las diferentes áreas de aplicación de la bioingeniería puede ser de muchísima ayuda para la formación académica, así como también, en la inserción laboral. Buscamos darles herramientas a los estudiantes desde que ingresan hasta que deciden en qué especializarse. <Link to='/capitulo'> Conocé a los integrantes del capítulo aquí</Link>
                </p>
              </div>
              <div className='col-md-4 about-us-title d-flex justify-content-center align-items-center py-3 mb-2'>
                <h1 className=''> ¿Quienes somos? </h1>
              </div>
            </div>
          ) : (
            <div className='row mb-2'>
              <div className='col-md-4 about-us-title d-flex justify-content-center align-items-center py-3 mb-2'>
                <h1 className=''> ¿Quienes somos? </h1>
              </div>
              <div className='col-md-8 d-flex justify-content-center align-items-center'>
                <p style={{ textAlign: 'justify' }}>
                  Somos un grupo de estudiantes de ingeniería biomédica/bioingeniería ubicados en distintos puntos del país, pero unidos con el mismo objetivo: crear un ámbito formal dentro de la sociedad para generar y proponer actividades de interés. Creemos que tener redes de contactos con profesionales de las diferentes áreas de aplicación de la bioingeniería puede ser de muchísima ayuda para la formación académica, así como también, en la inserción laboral. Buscamos darles herramientas a los estudiantes desde que ingresan hasta que deciden en qué especializarse. <Link to='/capitulo'> Conocé a los integrantes del capítulo aquí</Link>
                </p>
              </div>
            </div>
          )
      }

      <div className='row mb-5 justify-content-center'>
        <img src={nosotros} alt="reunion-cesabi" style={{ width: '70%' }} />
      </div>
      <h2 className="text-center my-5">Auspicia este evento</h2>
      <div className="d-flex mb-5 justify-content-around flex-wrap">
        <div className="row justify-content-center">
          <div className="col-10 col-md-6">
            <img src={drk} alt="logo-dr-k" class="img-fluid"/>
          </div>
        </div>
      </div>
      <h2 className="text-center my-5">Este evento cuenta con el aval institucional de</h2>
      <div className="d-flex mb-5 justify-content-around flex-wrap">
        <img src={unaj1} alt="logo-unaj" className="logos-bajos m-4" />
        <img src={unaj2} alt="logo-unaj" className="logos-bajos m-4" />
        <img src={facetunt} alt="logo-facet-unt" className="logo-facet m-4" />
        <img src={fiunsj} alt="logo-fi-unsj" className="logos-altos fiunsj m-4" />
        <img src={uf} alt="logo-uf" className="logos-altos m-4" />
        <img src={um} alt="logo-um" className="logos-altos m-4" />
        <img src={fiuner} alt="logo-fi-uner" className="logos-altos m-4" />
        <img src={fcefynunc} alt="logo-fcefyn-unc" className="logo-unc m-4" />
        <img src={eicaunvime} alt="logo-eica-unvime" className="logo-unvime m-4" />
        <img src={coral} alt="logo-coral" className="logos-altos m-4" />
      </div>
    </main >
  )
}

export default MainAbout

import React from 'react'
import {HashLink} from 'react-router-hash-link'
import './Schedules.css'
const Schedules = () => {
  return (
    <div className='container mt-5 mb-5'>
      <h2 className="blue">Cronograma del evento<small className='fs-6 text-dark'> Última actualización: 26/09/21 </small></h2>
      <p>Conocé como estan organizadas las jornadas en este cronograma. Podés presionar sobre cada ponente para conocer más acerca de él/ella, y también, podés descargarlo <a href='https://drive.google.com/file/d/11tgHz0fIFYQsZmsPMFn9Bjut29z1H4Bg/view?usp=sharing' target="_blank" rel="noopener noreferrer" className='clean-link'>haciendo click aquí</a>.</p>
      <div className="table-responsive">
      <table className='col-12 text-center table-bordered'>
        <thead className="pbg-green">
          <tr className="">
            <th scope="col" className='p-2'>Hora (Argentina)</th>
            <th scope="col" className='p-2'>Martes 12</th>
            <th scope="col" className='p-2'>Miercoles 13</th>
            <th scope="col" className='p-2'>Jueves 14</th>
            <th scope="col" className='p-2'>Viernes 15</th>
            <th scope="col" className='p-2'>Sábado 16</th>
            <th scope="col" className='p-2'>Domingo 17</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row' className='p-3'>09:00</th>
            <td className='p-3'>Presentación oficial</td>
            <td className='p-3'> Simulación molecular - <HashLink to='/cronograma#wednesday-3' className='ponente-link'>Bioing. Silvina Moyano</HashLink> </td>
            <td className='p-3'>Mamógrafos móviles - <HashLink to='/cronograma#thursday-1' className="ponente-link" smooth> Ing. Melani Larrain e Ing. Virginia Tesio</HashLink></td>
            <td className='p-3'>Radiación - <HashLink to='/cronograma#friday-1' className="ponente-link" smooth> Ing. Florencia Zalazar</HashLink> e <HashLink to='/cronograma#friday-2' className="ponente-link" smooth> Ing. Daniela Zanchi</HashLink></td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>H</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>H</td>
          </tr>
          {/* <HashLink to="" className=""></HashLink> */}
          <tr>
            <th scope='row' className='p-3'>09:45</th>
            <td className='p-3'>Transformación digital - <HashLink to="/cronograma#tuesday-2" className="ponente-link">Dr. Daniel Luna</HashLink></td>
            <td className='p-3'>Rehabilitación con BCI - <HashLink to='/cronograma#wednesday-2' className="ponente-link">Mg. Bioing. L. Carolina Carrere </HashLink></td>
            <td className='p-3'>Ingeniería Clínica</td>
            <td className='p-3'>Nanomedicinas - <HashLink to="/cronograma#friday-6" className="ponente-link">Dra. Julia Altube</HashLink></td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>A</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>A</td>
          </tr>
          <tr>
            <th scope='row' className='p-3'>10:30</th>
            <td className='p-3'>Inteligencia artificial - <HashLink to="/cronograma#tuesday-3" className="ponente-link">Bioing. Matías Tejerian</HashLink></td>
            <td className='p-3'>Biomecánica</td>
            <td className='p-3'>Biomateriales - <HashLink to='/cronograma#thursday-3' className="ponente-link" smooth> Dr. Ing. Carlos Oldani</HashLink></td>
            <td className='p-3'>Neurociencias - <HashLink to='/cronograma#friday-5' className="ponente-link">Dr. Ing. Fernando Farfán</HashLink></td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>C</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>C</td>
          </tr>
          <tr>
            <th scope='row' className='p-3'>11:15</th>
            <td className='p-3'></td>
            <td className='p-3'>EBERS</td>
            <td className='p-3'>Ingeniería de tejidos - <HashLink to='/cronograma#thursday-4' className="ponente-link" smooth>Ing. Eduardo Nieva </HashLink></td>
            <td className='p-3'>Ingeniería de rehabilitación</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>K</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>K</td>
          </tr>
          <tr>
            <th scope='row' className='p-3'>12:00</th>
            <td className='p-3'>Estudiantes en acción</td>
            <td className='p-3'>Estudiantes en acción</td>
            <td className='p-3'>Estudiantes en acción</td>
            <td className='p-3' rowSpan='2'>Desarrollo biomédico - <HashLink to='/cronograma#friday-4' className="ponente-link" smooth> Dra. Ing. Betiana Felice</HashLink></td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>A</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>A</td>
          </tr>
          <tr>
            <th scope='row' className='p-3'>12:25</th>
            <td className='p-3'>Estudiantes en acción</td>
            <td className='p-3'>Estudiantes en acción</td>
            <td className='p-3'>Estudiantes en acción</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>T</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>T</td>
          </tr>
          <tr>
            <th scope="row" className='p-3'>12:50</th>
            <td colSpan='4' className='p-3'>RECESO</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>H</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>H</td>
          </tr>
          <tr>
            <th scope="row" className='p-3'>14:30</th>
            <td rowSpan='3' className='p-3'>Tecnologías asistivas</td>
            <td rowSpan='4' className='p-3'>Arduino - <HashLink to='/cronograma#tuesday-1' className="ponente-link" smooth> Ing. Ramiro Detke</HashLink></td>
            <td rowSpan='4' className='p-3'>Video Pitch</td>
            <td rowSpan='6' className='p-3'>Joystick adaptado - <HashLink to='/cronograma#friday-3' className="ponente-link" smooth> Ing. Diego Beltramone</HashLink></td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>O</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>O</td>
          </tr>
          <tr>
            <th scope="row" className='p-3'>15:00</th>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>N</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>N</td>
          </tr>
          <tr>
            <th scope="row" className='p-3'>15:30</th>
            <td className='p-3 pbg-darkgreen text-light fw-bold'></td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'></td>
          </tr>
          <tr>
            <th scope="row" className='p-3'>16:00</th>
            <td className='p-3'>RECESO</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>H</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>H</td>
          </tr>
          <tr>
            <th scope="row" className='p-3'>16:30</th>
            <td rowSpan='4' className='p-3'>Python - <HashLink to='/cronograma#tuesday-1' className="ponente-link" smooth> Ing. Ramiro Detke</HashLink></td>
            <td className='p-3'>RECESO</td>
            <td className='p-3'>RECESO</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>A</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>A</td>
          </tr>
          <tr>
            <th scope="row" className='p-3'>17:00</th>
            <td rowSpan='6' className='p-3'> SCRUM Espresso - <HashLink to='/cronograma#wednesday-1' className="ponente-link" smooth> Ing. Guillermo Hintz</HashLink></td>
            <td rowSpan='3' className='p-3'>Impresión 3D orientado a prototipado</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>C</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>C</td>
          </tr>
          <tr>
            <th scope="row" className='p-3'>17:30</th>
            <td className='p-3'>RECESO</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>K</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>K</td>
          </tr>
          <tr>
            <th scope="row" className='p-3'>18:00</th>
            <td className='p-3'>Presentación Hackathon</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>A</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>A</td>
          </tr>
          <tr>
            <th scope="row" className='p-3'>18:30</th>
            <td rowSpan='3' className='p-3'>Impresión 3D Intro</td>
            <td className='p-3'>RECESO</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>H</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>T</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>T</td>
          </tr>
          <tr>
            <th scope="col" className='p-3'>19:00</th>
            <td rowSpan='3' className='p-3'>App moviles + desafíos - <HashLink to='/cronograma#thursday-2' className="ponente-link" smooth> Gisel Bustos y Mariam Calmels</HashLink></td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>A</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>H</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>H</td>
          </tr>
          <tr>
            <th scope="col" className='p-3'>19:30</th>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>C</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>O</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>O</td>
          </tr>
          <tr>
            <th scope="col" className='p-3'>20:00</th>
            <td className='p-3'></td>
            <td className='p-3'></td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>K</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>N</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>N</td>
          </tr>
        </tbody>
      </table>
      </div>
      
    </div>
  )
}

export default Schedules

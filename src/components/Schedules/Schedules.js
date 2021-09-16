import React from 'react'
import {HashLink} from 'react-router-hash-link'
const Schedules = () => {
  return (
    <div className='container mt-5 mb-5'>
      <h2 className="mb-4 blue">Cronograma del evento<span className='fs-6'> <a href='https://drive.google.com/file/d/1SQ-0BpaJvcDkJ48HKgudn459_h6BfH4O/view?usp=sharing' target="_blank" rel="noopener noreferrer" className='clean-link'>(Haciendo click aquí, podés descargarlo)</a></span></h2>
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
            <td className='p-3'></td>
            <td className='p-3'>Mamografos móviles - <HashLink to='/evento#thursday-2' className="ponente-link" smooth> Ing. Melani Larrain e Ing. Virginia Tesio</HashLink></td>
            <td className='p-3'>Radiación - <HashLink to='/evento#friday-1' className="ponente-link" smooth> Ing. Florencia Zalazar</HashLink> e <HashLink to='/evento#friday-2' className="ponente-link" smooth> Ing. Daniela Zanchi</HashLink></td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>H</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>H</td>
          </tr>
          <tr>
            <th scope='row' className='p-3'>09:45</th>
            <td className='p-3'>Transformación digital</td>
            <td className='p-3'>Rehabilitación con BCI</td>
            <td className='p-3'>Ingeniería Clínica</td>
            <td className='p-3'>Nanomedicina</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>A</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>A</td>
          </tr>
          <tr>
            <th scope='row' className='p-3'>10:30</th>
            <td className='p-3'>Inteligencia artificial</td>
            <td className='p-3'>Biomecánica</td>
            <td className='p-3'>Biomateriales - <HashLink to='/evento#thursday-4' className="ponente-link" smooth> Dr. Ing. Carlos Oldani</HashLink></td>
            <td className='p-3'>Neurociencias</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>C</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>C</td>
          </tr>
          <tr>
            <th scope='row' className='p-3'>11:15</th>
            <td className='p-3'></td>
            <td className='p-3'>EBERS</td>
            <td className='p-3'>Ingeniería de tejidos</td>
            <td className='p-3'>Ingeniería de rehabilitación</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>K</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>K</td>
          </tr>
          <tr>
            <th scope='row' className='p-3'>12:00</th>
            <td className='p-3'>Estudiantes en acción</td>
            <td className='p-3'>Estudiantes en acción</td>
            <td className='p-3'>Estudiantes en acción</td>
            <td className='p-3'>Neurociencias</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>A</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>A</td>
          </tr>
          <tr>
            <th scope="row" className='p-3'>12:45</th>
            <td colSpan='4' className='p-3'>RECESO</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>T</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>T</td>
          </tr>
          <tr>
            <th scope="row" className='p-3'>14:30</th>
            <td rowSpan='3' className='p-3'>Tecnologías asistivas</td>
            <td rowSpan='4' className='p-3'>Arduino - <HashLink to='/evento#thursday-1' className="ponente-link" smooth> Ing. Ramiro Detke</HashLink></td>
            <td rowSpan='4' className='p-3'>Video Pitch</td>
            <td rowSpan='6' className='p-3'>Joystick adaptado - <HashLink to='/evento#friday-3' className="ponente-link" smooth> Ing. Diego Beltramone</HashLink></td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>H</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>H</td>
          </tr>
          <tr>
            <th scope="row" className='p-3'>15:00</th>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>O</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>O</td>
          </tr>
          <tr>
            <th scope="row" className='p-3'>15:30</th>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>N</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>N</td>
          </tr>
          <tr>
            <th scope="row" className='p-3'>16:00</th>
            <td className='p-3'>RECESO</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>H</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>H</td>
          </tr>
          <tr>
            <th scope="row" className='p-3'>16:30</th>
            <td rowSpan='4' className='p-3'>Python - <HashLink to='/evento#thursday-1' className="ponente-link" smooth> Ing. Ramiro Detke</HashLink></td>
            <td className='p-3'>RECESO</td>
            <td className='p-3'>RECESO</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>A</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>A</td>
          </tr>
          <tr>
            <th scope="row" className='p-3'>17:00</th>
            <td rowSpan='6' className='p-3'> SCRUM Espresso - <HashLink to='/evento#wednesdat-1' className="ponente-link" smooth> Ing. Guillermo Hintz</HashLink></td>
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
            <td rowSpan='3' className='p-3'>App moviles + desafíos - <HashLink to='/evento#thursday-3' className="ponente-link" smooth> Gisel Bustos y Mariam Calmels</HashLink></td>
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

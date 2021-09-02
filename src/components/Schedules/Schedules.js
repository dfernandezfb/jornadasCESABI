import React from 'react'
import {HashLink} from 'react-router-hash-link'
const Schedules = () => {
  return (
    <div className='container mt-5 mb-5'>
      <h2 className="mb-4">Cronograma del evento<span className='fs-6'> <a href='/' className='clean-link'>(Haciendo click aquí, podés descargarlo)</a></span></h2>
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
            <td className='p-3'> <HashLink to='/ponentes#friday1' class="ponente-link" smooth> Charla 15</HashLink></td>
            <td className='p-3'>Mamografos</td>
            <td className='p-3'>Radiación</td>
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
            <td className='p-3'>Biomateriales</td>
            <td className='p-3'>Neurociencias</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>C</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>C</td>
          </tr>
          <tr>
            <th scope='row' className='p-3'>11:15</th>
            <td className='p-3'>Neurociencias</td>
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
            <td className='p-3'>Estudiantes en acción</td>
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
            <td rowSpan='4' className='p-3'>Arduino</td>
            <td rowSpan='4' className='p-3'>Video Pitch</td>
            <td rowSpan='6' className='p-3'>Joystick adaptado</td>
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
            <td rowSpan='4' className='p-3'>Python</td>
            <td className='p-3'>RECESO</td>
            <td className='p-3'>RECESO</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>A</td>
            <td className='p-3 pbg-darkgreen text-light fw-bold'>A</td>
          </tr>
          <tr>
            <th scope="row" className='p-3'>17:00</th>
            <td rowSpan='6' className='p-3'> SCRUM Espresso</td>
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
            <td rowSpan='3' className='p-3'>App moviles + desafíos</td>
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

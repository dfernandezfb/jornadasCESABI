import React from 'react'
import {useEffect} from 'react'
import './CesabiCards.css'

const CesabiCards = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="my-5 container">
      <h2 className="blue">Capítulo de Estudiantes de la Sociedad Argentina de Bioingeniería</h2>
      <p className="text-justify">Somos un grupo de estudiantes de ingeniería biomédica/bioingeniería ubicados en distintos puntos del país, pero unidos con el mismo objetivo: <b>crear un ámbito formal dentro de la sociedad para generar y proponer actividades de interés</b>. Creemos que tener redes de contactos con profesionales de las diferentes áreas de aplicación de la bioingeniería puede ser de muchísima ayuda para la formación académica, así como también, en la inserción laboral. Buscamos darles herramientas a los estudiantes desde que ingresan hasta que deciden en qué especializarse. Los representantes actuales de las distintas universidades son:</p>
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-4 mb-5">
          <div className="elizondo-card">
            <div className="card-black">
              <div className="text-center">
                <h3>Cecilia Elizondo</h3>
                <hr />
                <p>Representante de la Universidad Nacional de San Juan</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mb-5">
          <div className="zucarelli-card">
            <div className="card-black">
              <div className="text-center">
                <h3>Gabriel Zucarelli Serra</h3>
                <hr />
                <p>Representante de la Universidad de Mendoza</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mb-5">
          <div className="guinart-card">
            <div className="card-black">
              <div className="text-center">
                <h3>Carolina Guinart Boguslawski</h3>
                <hr />
                <p>Representante de la Universidad Favaloro</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mb-5">
          <div className="navarro-card">
            <div className="card-black">
              <div className="text-center">
                <h3>Florencia Navarro</h3>
                <hr />
                <p>Representante de la Universidad Nacional Arturo Jauretche</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mb-5">
          <div className="tartabini-card">
            <div className="card-black">
              <div className="text-center">
                <h3>Yazmín Tartabini</h3>
                <hr />
                <p>Representante de la Universidad Nacional de Villa Mercedes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mb-5">
          <div className="fernandez-card">
            <div className="card-black">
              <div className="text-center">
                <h3>Diego Fernández</h3>
                <hr />
                <p>Representante de la Universidad Nacional de Tucumán</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mb-5">
          <div className="giorgio-card">
            <div className="card-black">
              <div className="text-center">
                <h3>Giovanni Giorgio</h3>
                <hr />
                <p>Representante de la Universidad Nacional de Entre Ríos</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mb-5">
          <div className="trujillo-card">
            <div className="card-black">
              <div className="text-center">
                <h3>Fernando Trujillo</h3>
                <hr />
                <p>Representante de la Universidad Nacional de San Martín</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mb-5">
          <div className="bouza-card">
            <div className="card-black">
              <div className="text-center">
                <h3>Andrea Bouza</h3>
                <hr />
                <p>Representante de la Universidad Nacional de Córdoba</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CesabiCards

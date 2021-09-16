import React from 'react'
import './CesabiCards.css'

const CesabiCards = () => {
  return (
    <div className="my-5 container">
      <h2 className="blue">Capítulo de Estudiantes de la Sociedad Argentina de Bioingeniería</h2>
      <p>Somos un grupo de estudiantes de ingeniería biomédica/bioingeniería ubicados en distintos puntos del país, pero unidos con el mismo objetivo: crear un ámbito formal dentro de la sociedad para generar y proponer actividades de interés. Creemos que tener redes de contactos con profesionales de las diferentes áreas de aplicación de la bioingeniería puede ser de muchísima ayuda para la formación académica, así como también, en la inserción laboral. Buscamos darles herramientas a los estudiantes desde que ingresan hasta que deciden en qué especializarse. Los representantes actuales de las distintas universidades son:</p>
      <div className="row">
        <div className="col-12 col-sm-4">
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
      </div>
    </div>
  )
}

export default CesabiCards

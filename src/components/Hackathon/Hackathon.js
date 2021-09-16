import React from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'
import './Hackathon.css'

const Hackathon = () => {
  const { width } = useMediaQuery()
  return (
    <div className="container my-5">
      <h2 className="blue">¿Qué es el Hackathon CESABI?</h2>
      <p className="mb-4">
        El “HACKATHON CESABI” es una competencia establecida con el propósito de crear grupos multidisciplinarios que se verán ante la situación de resolver una problemática real que será brindada por la organización y  elegida por cada equipo. <br />
        La edición 2021 se llevará a cabo durante los días <b>15, 16 y 17 de octubre del 2021</b> dando inicio formal a la competencia el día 15 por la tarde y cerrando el 17. <br />
        El Hackathon CESABI nace en el marco de las “I Jornadas de Bioingeniería del Capítulo de Estudiantes de la SABI - I Jornadas CESABI” para dar cierre a 3 días de puro ingeniería que estarán compuestos por charlas y workshops que serán las bases para que los equipos puedan dar soluciones relacionadas a lo visto durante la semana, adquiriendo de esta forma nuevas competencias. <br />
        Los desafíos para resolver en la competencia consistirán en problemas reales que requieran de una solución creativa. Estos no están limitados únicamente al ámbito tecnológico, pudiendo ser  de varios sectores de actividades o temas sociales, ambientales, organizacionales, artísticos,  logísticos o de otro tipo. Estos desafíos podrán ser propuestos para su consideración por  empresas, instituciones públicas o privadas, ONG´s, o cualquier otra institución. <br />
        La Edición 2021 se realizará de manera virtual. Los equipos serán armados por el comité organizativo para generar una mayor interrelación entre los diferentes concursantes, siendo este el espíritu del capítulo estudiantil. <br />
        Una vez elegida la propuesta a desarrollar que será seleccionada por consenso del equipo, se deberán ir haciendo entregables para ver la evolución y se finalizará con un video pitch de 3 minutos donde deberán “vender” la solución, exponiendo de esta manera la capacidad de síntesis de los equipos. Cabe aclarar que todos los equipos tendrán tutores que realizarán un seguimiento asesorándolos de forma objetiva y apoyándolos a la hora de realizar la edición del video pitch.
      </p>
      <h2 className="blue">¿Quienes pueden participar?</h2>
      <p className="mb-4">
        La convocatoria a participar está principalmente dirigida a estudiantes universitarios de ingeniería y carreras afines, pudiendo asimismo participar graduados, docentes, profesores o investigadores de cada universidad. Debido a que la conformación de los equipos estará dada por la gobernanza, existirá una equidad de competencias y conocimientos. Es por ello, que incentivamos a que estudiantes de todos los años puedan inscribirse ya que a nivel sistémico, no se verán en desigualdad de condiciones.
      </p>
      <h2 className="mb-3 blue">Premios</h2>
      {width < 592 ?
        <div>
          
          <div className="row">
            <div className="col-12 mb-4 awards">
              <div className="award">
                <div className="winner-name">Aquí puede estar el nombre de tu equipo</div>
              </div>
              <div className="base-1"><p className="number-1">#1</p><p className="integrants-1">Integrantes: <br />- Participante 1 <br />- Participante 2<br />- Participante 3 <br />- Participante 4<br />- Participante 5</p></div>
            </div>
            <div className="col-12">
              <h4>Primer premio:</h4>
              <ul>
                <li>Multímetro digital</li>
                <li>Kit Arduino</li>
                <li>Inscripción a SABI 2022</li>
                <li>Publicación del trabajo en revista SABI</li>
              </ul>
            </div>
            <div className="col-12 mb-4 awards">
              <div className="award">
                <div className="winner-name">Aquí puede estar el nombre de tu equipo</div>
              </div>
              <div className="base-2"><p className="number-2">#2</p> <p className="integrants-2">Integrantes: <br />- Participante 1 <br />- Participante 2<br />- Participante 3 <br />- Participante 4<br />- Participante 5</p>  </div>
            </div>
            <div className="col-12">
              <h4>Segundo premio:</h4>
              <ul>
                <li>Descuento en la inscripción a SABI 2022</li>
                <li>Publicación del trabajo en revista SABI</li>
              </ul>
            </div>
            <div className="col-12 mb-4 awards">
              <div className="award">
                <div className="winner-name">Aquí puede estar el nombre de tu equipo</div>
              </div>
              <div className="base-3"><p className="number-3">#3</p><p className="integrants-3">Integrantes: <br />- Participante 1 <br />- Participante 2<br />- Participante 3 <br />- Participante 4<br />- Participante 5</p></div>
            </div>
            <div className="col-12">
              <h4>Tercer premio:</h4>
              <ul>
                <li>Publicación del trabajo en revista SABI</li>
              </ul>
            </div>
          </div>
        </div>
        :
        <div>
        <div className="row mb-3">
            <div className="col">
              <h4>Tercer premio:</h4>
              <ul>
                <li>Publicación del trabajo en revista SABI</li>
              </ul>
            </div>
            <div className="col">
              <h4>Primer premio:</h4>
              <ul>
                <li>Multímetro digital</li>
                <li>Kit Arduino</li>
                <li>Inscripción a SABI 2022</li>
                <li>Publicación del trabajo en revista SABI</li>
              </ul>
            </div>
            <div className="col">
              <h4>Segundo premio:</h4>
              <ul>
                <li>Descuento en la inscripción a SABI 2022</li>
                <li>Publicación del trabajo en revista SABI</li>
              </ul>
            </div>
          </div>
        <div className="row">
          <div className="col awards">
            <div className="award">
              <div className="winner-name">Aquí puede estar el nombre de tu equipo</div>
            </div>
            <div className="base-3"><p className="number-3">#3</p><p className="integrants-3">Integrantes: <br />- Participante 1 <br />- Participante 2<br />- Participante 3 <br />- Participante 4<br />- Participante 5</p></div>
          </div>
          <div className="col awards">
            <div className="award">
              <div className="winner-name">Aquí puede estar el nombre de tu equipo</div>
            </div>
            <div className="base-1"><p className="number-1">#1</p><p className="integrants-1">Integrantes: <br />- Participante 1 <br />- Participante 2<br />- Participante 3 <br />- Participante 4<br />- Participante 5</p></div>
          </div>
          <div className="col awards">
            <div className="award">
              <div className="winner-name">Aquí puede estar el nombre de tu equipo</div>
            </div>
            <div className="base-2"><p className="number-2">#2</p> <p className="integrants-2">Integrantes: <br />- Participante 1 <br />- Participante 2<br />- Participante 3 <br />- Participante 4<br />- Participante 5</p> </div>
          </div>
        </div>
        </div>
      }

    </div>
  )
}

export default Hackathon

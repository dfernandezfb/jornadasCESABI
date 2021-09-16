import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import detke from './../../assets/images/detke.jpg'
import zalazar from './../../assets/images/zalazar.jpg'
import zanchi from './../../assets/images/zanchi.jpg'
import larrainTesio from './../../assets/images/larrain-tesio.jpg'
import beltramone from './../../assets/images/beltramone.png'
import bustosCalmels from './../../assets/images/bustos-calmels.jpg'
import oldani from './../../assets/images/oldani.jpg'
import hintz from './../../assets/images/hintz.jpeg'
import felice from './../../assets/images/felice.jpeg'
import './SpeakersCards.css'

const SpeakersCards = () => {
  const speakersTuesday=[
  ];
  const speakersWednesday=[
    {id:'wednesday-1', photo:hintz,name:'Guillermo Hintz', description:'Senior Quality Assurance Automation y Scrum Master. Estudió Ingeniería en Sistemas en la Universidad Tecnológica Nacional, Facultad Regional Córdoba. Trabaja aplicando Scrum diariamente con clientes de todo el mundo hace más de 6 años y estuvo involucrado en equipos de 10 a 150 personas.'}
  ];
  const speakersThursday=[
    {id:'thursday-1', photo:detke,name:'Ramiro Detke', description:'Ingeniero en Computación. Se encuentra haciendo el Doctorado en Ciencias de la Ingeniería de la UNC con una beca del CONICET, investigando redes de contacto entre dispositivos de comunicaciones móviles. Es parte del equipo del Laboratorio de Comunicaciones Digitales de la UNC, donde realizo tareas de investigación y desarrollo.'},
    {id:'thursday-2', photo:larrainTesio, name: 'Melani Larrain y Virginia Tesio', description:'Ingenieras biomédicas egresedas de la Universidad Nacional de Córdoba. Melani finalizó la residencia de Ingeniería Clínica en el Ministerio de Salud de la Provincia de Córdoba y es Diplomada en Evaluación de Cálidad de Organizaciones de Salud por la Universidad Católica de Salta. Actualmente es evaluadora de cálidad para ITAES y representante comercial de una empresa de productos médicos. \nVirginia, actualmente se encuentra realizando la residencia de Ingeniería Clínica en el Ministerio de Salud de la Provincia de Córdoba, y finalizando Posgrado de Gestión de Proyectos en la Universidad Tecnológica Nacional, Facultad Regional de Buenos Aires.'},
    {id:'thursday-3', photo:bustosCalmels, name:'Gisel Bustos y Mariam Calmels', description:'Estudiantes avanzadas de la carrera de Ingeniería Biomédica en la Universidad Nacional de Córdoba, actualmente realizando sus tesis de grado. Han participado en importantes proyectos asociados a la discapacidad tales como IncApp, emprendimiento para el desarrollo de aplicaciones móviles Open Source para la enseñanza de personas con discapacidad cognitiva; Junig, proyecto para la enseñanza de personas con discapacidad cognitiva e investigación y desarollo de prótesis uterina para el tratamiento de la incontinencia urinaria post-histerectomías.'},
    {id:'thursday-4', photo:oldani, name: 'Carlos Oldani', description:'Ingeniero Metalúrgico egresado de la Universidad Católica de Córdoba y Doctor en Ciencias de la Ingeniería de la Universidad Nacional de Córdoba. Su carrera profesional la realizó en el INTI haciendo desarrollos metalúrgicos y análisis de falla de componentes mecánicos. Fue además, Jefe del sector Ensayos Mecánicos hasta que dejó el INTI e ingresó a tiempo completo en la FCEFyN – UNC. Es docente en la Universidad Nacional de Córdoba, y es Profesor Titular de la Cátedra de Biomateriales desde el año 2006. Dirige desde su ingreso a la FCEFyN el Laboratorio de Materiales. \nSus trabajos estuvieron siempre centrados en los materiales metálicos: estudió aceros de uso eléctrico, aleaciones de bajo punto de fusión, nitinol, titanio y magnesio, entre otros. Desde hace algunos años su interés está centrado en la pulvimetalurgia de materiales con aplicaciones biomédicas.'}
  ];
  const speakersFriday=[
    {id:'friday-1', photo:zalazar,name:'María Florencia Zalazar', description:'Ingeniera Biomédica egresada de la Universidad Nacional de Córdoba, Facultad de Ciencias Exactas, Fisicas y Naturales. Sus estudios de posgrados incluyen la Residencia en Física Médica en el Hospital Oncológico de Córdoba donde se formó  en Radioterapia y la Especialziación en Física de la Radioterapia dictada por el Instituto Dan Beninson y la Universidad Nacional de San Martin. Actualmente cuenta con permiso individual de Especialista en Física de la Radioterapia emitido por la Autoridad Regulatoria Nuclear y está cursando la Maestría en Física Médica dictada por el Instituto Balseiro y la Universidad Nacional de Cuyo.'},
    {id:'friday-2', photo:zanchi,name:'Daniela Zanchi', description:'Ingeniera Biomédica egresada de la Universidad Nacional de Córdoba, Facultad de Ciencias Exactas, Fisicas y Naturales. Posteriormente obtuvo el título de Magister en Física Médica de la Universidad Nacional de Cuyo - Instituto Balseiro.    Actualmente se desempeña como Física Médica Especialista en Medicina Nuclear en la Fundación Escuela de Medicina Nuclear (FUESMEN), y como docente en las Cátedras de Física del Instituto de Ciencias Biomédicas San Agustín.'},
    {id:'friday-3', photo:beltramone, name:'Diego Beltramone', description:'Ingeniero Eléctrico/Electrónico. Magister en Dirección de Empresas. Experto en TIC y Discapacidad. Doctorando en “Doctorado en Ciencias de la Ingeniería” en la Facultad de Ciencias Exactas, Físicas y Naturales (FCEFyN) de la Universidad Nacional de Córdoba (UNC). Profesor Titular de la Cátedra “Ingeniería en Rehabilitación” en la FCEFyN-UNC. Investigador Categoría 2 dentro del Programa de Incentivos a Docentes investigadores. Director de la Escuela de Ingeniería Biomédica de la FCEFyN-UNC. Director del Laboratorio de Ingeniería en Rehabilitación de la FCEFyN-UNC. Ex Director del Departamento de Bioingeniería de la FCEFyN-UNC. Ex Subdirector del Departamento de Bioingeniería de la FCEFyN-UNC. Ex integrante de la Oficina de Inclusión Educativa de Personas en Situación de Discapacidad de la UNC. Socio Fundador y ex Presidente de la Fundación Inclubyte. Socio originario del Equipo Ébano y a cargo del área Electrónica e Interfaz Física. Ex integrante del Consejo Provincial de Accesibilidad (Córdoba, Argentina) y de la Comisión de Ayudas Técnicas en particular. Ex vicepresidente de la Sociedad Argentina de Bioingeniería (SABI). Ex Presidente del Capítulo de Ingeniería en Rehabilitación de la SABI. Ex Presidente del Capítulo Argentino IEEE/EMBS.'},
    {id:'friday-4', photo:felice, name:'Betiana Felice', description:'Ingeniera Biomédica y Doctora en Ciencias Biológicas, egresada de la Universidad Nacional de Tucumán. Realizó su pasantía en una empresa fabricante de implantables activos médicos (CCC, actualmente parte de un grupo internacional más grande). Realizó su doctorado en Tucumán, Singapur, Alemania y España, especializandose en ingeniería de tejidos. \n Al finalizar su doctorado, comenzó a trabajar en Alemania como arquitecta de software externa para BMW, participando en el desarrollo del sistema de actualización remota de automóviles. Luego de un año en BMW, comenzó a trabajar como Ingeniera de proyectos en Brainlab, una gran empresa Alemana que se dedica al desarrollo de software y hardware para cirugías navegadas. Particpó como Quality Assurance Engineer en el desarrollo del sistema operativo de Brainlab, en el desarrollo del software que manipula y procesa todas las imagenes médicas con las que trabajan las aplicaciones de Brainlab, así como también en la interfaces que comunican e integran todos los productos de Brainlab en grandes hospitales. Actualmente se desempeña como Project Manager de la plataforma hospitalaria on-premise para la integración con distintos tipos de aplicaciones del ámbito clínico, en Snke OS, empresa subsidiaria de Brainlab.'}
  ];
  return (
    <div className="container my-5">
      <h2 className="mb-2 blue">Ponentes</h2>
      <p>Aquí conocerás a los ponentes a medida que nos vayamos acercando al inicio del evento</p>
      <h4 className='mb-3'>Martes 12 de Octubre</h4>
      <Row xs={1} md={3} className="g-4 mb-5">
        {speakersTuesday.map((speaker,id) => (
          <Col key={id} id={speaker.id}>
            <Card>
              <Card.Img variant="top" src={speaker.photo} className="speaker-image"/>
              <Card.Body>
                <Card.Title> <strong> {speaker.name} </strong></Card.Title>
                <Card.Text className="speaker-description">
                  {speaker.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h4 className='mb-3'>Miércoles 13 de Octubre</h4>
      <Row xs={1} md={3} className="g-4 mb-5">
        {speakersWednesday.map((speaker,id) => (
          <Col key={id} id={speaker.id}>
            <Card>
              <Card.Img variant="top" src={speaker.photo} className="speaker-image"/>
              <Card.Body>
                <Card.Title> <strong> {speaker.name} </strong></Card.Title>
                <Card.Text className="speaker-description">
                  {speaker.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h4 className='mb-3'>Jueves 14 de Octubre</h4>
      <Row xs={1} md={3} className="g-4 mb-5">
        {speakersThursday.map((speaker,id) => (
          <Col key={id} id={speaker.id}>
            <Card>
              <Card.Img variant="top" src={speaker.photo} className="speaker-image"/>
              <Card.Body>
                <Card.Title> <strong> {speaker.name} </strong></Card.Title>
                <Card.Text className="speaker-description">
                  {speaker.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h4 className='mb-3'>Viernes 15 de Octubre</h4>
      <Row xs={1} md={3} className="g-4 mb-5">
        {speakersFriday.map((speaker,index) => (
          <Col key={index} id={speaker.id}>
            <Card>
              <Card.Img variant="top" src={speaker.photo} className="speaker-image"/>
              <Card.Body>
                <Card.Title> <strong> {speaker.name} </strong></Card.Title>
                <Card.Text className="speaker-description">
                  {speaker.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>


    </div>
  )
}

export default SpeakersCards

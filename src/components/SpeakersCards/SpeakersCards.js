import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import logo from './../../assets/images/cesabi-solo.png'
import detke from './../../assets/images/detke.jpg'
import zalazar from './../../assets/images/zalazar.jpg'
import zanchi from './../../assets/images/zanchi.jpg'
import './SpeakersCards.css'

const SpeakersCards = () => {
  const speakersTuesday=[
    {id:1, photo:logo,name:'example', description:'description example'}
  ];
  const speakersWednesday=[
    {id:1, photo:logo,name:'example', description:'description example'}
  ];
  const speakersThursday=[
    {id:1, photo:detke,name:'Ingeniero Ramiro Detke', description:'Ingeniero en Computación. Se encuentra haciendo el Doctorado en Ciencias de la Ingeniería de la UNC con una beca del CONICET, investigando redes de contacto entre dispositivos de comunicaciones móviles. Es parte del equipo del Laboratorio de Comunicaciones Digitales de la UNC, donde realizo tareas de investigación y desarrollo.'}
  ];
  const speakersFriday=[
    {id:1, photo:zalazar,name:'Ingeniera Ma. Florencia Zalazar', description:'Ingeniera Biomédica egresada de la Universidad Nacional de Córdoba, Facultad de Ciencias Exactas, Fisicas y Naturales. Sus estudios de posgrados incluyen la Residencia en Física Médica en el Hospital Oncológico de Córdoba donde se formó  en Radioterapia y la Especialziación en Física de la Radioterapia dictada por el Instituto Dan Beninson y la Universidad Nacional de San Martin. Actualmente cuenta con permiso individual de Especialista en Física de la Radioterapia emitido por la Autoridad Regulatoria Nuclear y está cursando la Maestría en Física Médica dictada por el Instituto Balseiro y la Universidad Nacional de Cuyo.'},
    {id:2, photo:zanchi,name:'MSc. Daniela Zanchi', description:'Ingeniera Biomédica egresada de la Universidad Nacional de Córdoba, Facultad de Ciencias Exactas, Fisicas y Naturales. Posteriormente obtuvo el título de Magister en Física Médica de la Universidad Nacional de Cuyo - Instituto Balseiro.    Actualmente se desempeña como Física Médica Especialista en Medicina Nuclear en la Fundación Escuela de Medicina Nuclear (FUESMEN), y como docente en las Cátedras de Física del Instituto de Ciencias Biomédicas San Agustín.'}
  ];
  return (
    <div className="container my-5">
      <h3 className="mb-2">Ponentes</h3>
      <p>Aquí conocerás a los ponentes a medida que nos vayamos acercando al inicio del evento</p>
      <h5 className='blue mb-3'>Martes 12 de Octubre</h5>
      <Row xs={1} md={3} className="g-4 mb-5">
        {speakersTuesday.map((speaker,id) => (
          <Col key={id}>
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
      <h5 className='blue mb-3'>Miércoles 13 de Octubre</h5>
      <Row xs={1} md={3} className="g-4 mb-5">
        {speakersWednesday.map((speaker,id) => (
          <Col key={id}>
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
      <h5 className='blue mb-3'>Jueves 14 de Octubre</h5>
      <Row xs={1} md={3} className="g-4 mb-5">
        {speakersThursday.map((speaker,id) => (
          <Col key={id}>
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
      <h5 className='blue mb-3'>Viernes 15 de Octubre</h5>
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

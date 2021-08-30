import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import logo from './../../assets/images/cesabi-solo.png'
import './SpeakersCards.css'

const SpeakersCards = () => {
  const speakersTuesday=[
    {id:1, photo:logo,name:'example', description:'description example'},
    {id:2, photo:logo,name:'example', description:'description example'},
    {id:3, photo:logo,name:'example', description:'description example'},
    {id:4, photo:logo,name:'example', description:'description example'},
    {id:5, photo:logo,name:'example', description:'description example'},
    {id:6, photo:logo,name:'example', description:'description example'},
    {id:7, photo:logo,name:'example', description:'description example'},
    {id:8, photo:logo,name:'example', description:'description example'},
    {id:9, photo:logo,name:'example', description:'description example'},
  ];
  const speakersWednesday=[
    {id:1, photo:logo,name:'example', description:'description example'},
    {id:2, photo:logo,name:'example', description:'description example'},
    {id:3, photo:logo,name:'example', description:'description example'},
    {id:4, photo:logo,name:'example', description:'description example'},
    {id:5, photo:logo,name:'example', description:'description example'},
    {id:6, photo:logo,name:'example', description:'description example'},
    {id:7, photo:logo,name:'example', description:'description example'},
    {id:8, photo:logo,name:'example', description:'description example'},
    {id:9, photo:logo,name:'example', description:'description example'},
  ];
  const speakersThursday=[
    {id:1, photo:logo,name:'example', description:'description example'},
    {id:2, photo:logo,name:'example', description:'description example'},
    {id:3, photo:logo,name:'example', description:'description example'},
    {id:4, photo:logo,name:'example', description:'description example'},
    {id:5, photo:logo,name:'example', description:'description example'},
    {id:6, photo:logo,name:'example', description:'description example'},
    {id:7, photo:logo,name:'example', description:'description example'},
    {id:8, photo:logo,name:'example', description:'description example'},
    {id:9, photo:logo,name:'example', description:'description example'},
  ];
  const speakersFriday=[
    {id:'friday1', photo:logo,name:'example', description:'description example'},
    {id:2, photo:logo,name:'example', description:'description example'},
    {id:3, photo:logo,name:'example', description:'description example'},
    {id:4, photo:logo,name:'example', description:'description example'},
    {id:5, photo:logo,name:'example', description:'description example'},
    {id:6, photo:logo,name:'example', description:'description example'},
    {id:7, photo:logo,name:'example', description:'description example'},
    {id:8, photo:logo,name:'example', description:'description example'},
    {id:9, photo:logo,name:'example', description:'description example'},
  ];
  return (
    <div className="container my-5">
      <h3 className="mb-2">Ponentes</h3>
      <h5 className='blue mb-3'>Martes 12 de Octubre</h5>
      <Row xs={1} md={3} className="g-4 mb-5">
        {speakersTuesday.map((speaker,id) => (
          <Col key={id}>
            <Card>
              <Card.Img variant="top" src={speaker.photo} />
              <Card.Body>
                <Card.Title>{speaker.name}</Card.Title>
                <Card.Text>
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
              <Card.Img variant="top" src={speaker.photo} />
              <Card.Body>
                <Card.Title>{speaker.name}</Card.Title>
                <Card.Text>
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
              <Card.Img variant="top" src={speaker.photo} />
              <Card.Body>
                <Card.Title>{speaker.name}</Card.Title>
                <Card.Text>
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
              <Card.Img variant="top" src={speaker.photo} />
              <Card.Body>
                <Card.Title>{speaker.name}</Card.Title>
                <Card.Text>
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

import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './PricesAndSteps.css'

const PricesAndSteps = () => {
  
  return (
    <div className="container my-5">
      <h3 className="mb-4">Aranceles</h3>
      <div className="prices-container mb-5">
        <div className="price-table">
          <h5 className="text-center mb-3"> <span role="img">🔥</span>  Inscripción temprana (17/08 al 21/09) <span role="img">🔥</span></h5>
          <table className="text-center border">
            <thead>
              <tr>
                <th className="p-3"></th>
                <th className="p-3">Socios SABI / IEEE</th>
                <th className="p-3">General</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="p-3">Estudiantes</th>
                <td className="p-3"> AR $375 / 3 USD</td>
                <td className="p-3"> AR $750 / 6 USD</td>
              </tr>
              <tr>
                <th className="p-3">Profesionales</th>
                <td className="p-3"> AR $500 / 6 USD</td>
                <td className="p-3"> AR $1000 / 8 USD</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="price-table">
          <h5 className="text-center mb-3">Inscripción tardía (22/09 al 04/10)</h5>
          <table className="text-center border">
            <thead>
            <tr>
              <th className="p-3"></th>
              <th className="p-3">Socios SABI / IEEE</th>
              <th className="p-3">General</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th className="p-3">Estudiantes</th>
              <td className="p-3"> AR $500 / 4 USD</td>
              <td className="p-3"> AR $1000 / 8 USD</td>
            </tr>
            <tr>
              <th className="p-3">Profesionales</th>
              <td className="p-3"> AR $625 / 5 USD</td>
              <td className="p-3"> AR $1250 / 10 USD</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h3 className="mb-4"> Pasos a seguir</h3>
      <div>
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first" className="blue">Paso 1 - Pago en AR$</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className="blue">Paso 1 - Pago en USD</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" className="blue">Paso 2 - Formulario</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth" className="blue">Paso 3 - Confirmación</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  Realizá el pago de la inscripción según corresponda, enviando el dinero a la siguiente cuenta: <br /> <br />
                  Cuenta corriente especial: $ 9750611-2 089-8 <br />
                  CBU: 0070089430009750611286 <br />
                  ALIAS: DELTA.VALIJA.LAPIZ <br />
                  Banco: Galicia <br />
                  CUIT: 30-70236495-3 <br /><br />
                  No olvides obtener el comprobante de pago, o realizarle una captura donde se pueda observar el número de transferencia.
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Envíanos un correo electrónico a <a href="mailto=capituloestudiantil@sabi.org.ar">capituloestudiantil@sabi.org.ar</a> con el asunto "Inscripción SABI", y en el mail especifica que tipo de inscripción es la que aplica a tu caso. Te responderemos con un link de pago para que realices la tranferencia. <br />
                  No olvides obtener el comprobante de pago, o realizarle una captura donde se pueda observar el número de transferencia.
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  Completá el siguiente formulario: <br /><br />
                  <a href="https://forms.gle/9AkMgfsTWjUGBpTr7" target="_blank" rel="noopener noreferrer"> Inscripción a las I Jornadas de Bioingeniería del Capítulo de Estudiantes SABI</a>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  Una vez completados y verificados los pasos anteriores, te estaremos envíando un mail de confirmación para participar del evento. <b>¡GRACIAS!</b>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <div>

      </div>
    </div>
  )
}

export default PricesAndSteps

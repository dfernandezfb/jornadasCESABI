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
import farfan from './../../assets/images/farfan.jpg'
import hintz from './../../assets/images/hintz.jpeg'
import felice from './../../assets/images/felice.jpeg'
import navarro from './../../assets/images/navarrof.jpeg'
import fgallo from './../../assets/images/fgallo.jpeg'
import noya from './../../assets/images/noya.jpeg'
import tell from './../../assets/images/tell.jpeg'
import carrere from './../../assets/images/carrere.png'
import nieva from './../../assets/images/nieva.png'
import luna from './../../assets/images/luna.png'
import tajerian from './../../assets/images/tajerian.png'
import moyano from './../../assets/images/moyano.jpg'
import altube from './../../assets/images/altube.jpg'
import gonzalez from './../../assets/images/gonzalez.JPG'
import gonzalezmassaccesi from './../../assets/images/gonzalez-massaccesi.jpg'
import lisazopopolo from './../../assets/images/lisazo-popolo.jpg'
import pidutti from './../../assets/images/pidutti.png'
import './SpeakersCards.css'

const SpeakersCards = () => {
  const speakersTuesday=[
    {id:'tuesday-1', photo:detke, name:'Ramiro Detke', description:'Ingeniero en Computación. Se encuentra haciendo el Doctorado en Ciencias de la Ingeniería de la UNC con una beca del CONICET, investigando redes de contacto entre dispositivos de comunicaciones móviles. Es parte del equipo del Laboratorio de Comunicaciones Digitales de la UNC, donde realizo tareas de investigación y desarrollo.'},
    {id:'tuesday-2', photo:luna, name:'Daniel Luna', description:'Médico (UBA). Especialista en Medicina Interna (MinSal). Master en Ingeniería de Sistemas de Información (UTN). Doctor en Ingeniería Informática (ITBA). Co Director de la Maestría y la Residencia de Informática en Salud del Instituto Universitario Hospital Italiano. Lideró desde sus inicios el diseño e implementación del sistema de información clínico del Hospital Italiano de Buenos Aires. Está a cargo del Departamento de Informática en Salud del Hospital Italiano de Buenos Aires desde el año 2010.'},
    {id:'tuesday-3', photo:tajerian, name:'Matías Tajerian', description:'Bioingeniero. Desarrollador en Departamento de Informática en Salud del Hospital Italiano de Buenos Aires. Profesor en Instituto Tecnológico de Buenos Aires. Trabaja en ingeniería y desarrollo en el Programa de Inteligencia Artificial en Salud del HIBA. Encargado del desarrollo, la validación interna y externa, e implementación en el proceso asistencial de modelos de aprendizaje profundo para análisis de imágenes mamográficas. Desarrollo de Sistemas de Soporte a la Decisión Clínica (CDSS) basados en conocimiento. Utilización e implementación de estándares FHIR y DICOM para interoperabilidad en los sistemas de salud.'},
    {id:'tuesday-4', photo:gonzalez, name:'Daniela Gonzalez', description:'La Dra. Daniela Gonzalez se recibió de Bioingeniera de la Facultad de Ingeniería de la Universidad Nacional de San Juan. Posteriormente obtuvo su doctorado en Ingeniería Química y Biomolecular en la Universidad de Nebraska Lincoln (UNL) en Estados Unidos. Sus estudios de postgrado estuvieron relacionados con la producción de nanomateriales poliméricos y su aplicación en sistemas de liberación controlada de drogas e ingeniería de tejidos.  Actualmente la Dra. Gonzalez es Investigador Asistente de CONICET en el Gabinete de Tecnología Médica (GATEME) de la Facultad de Ingeniería de la Universidad Nacional de San Juan, Argentina.'},
    {id:'tuesday-5', photo:lisazopopolo, name:'Clara Lisazo y Paula del Pópolo', description:'Estudiantes avanzadas de Bioingeniería de la Universidad de Mendoza (UM). Clara se encuentra terminando su tesis en la Fundación Escuela de Medicina Nuclear (FUESMEN), la cual se basa en un protocolo para el procesamiento conjunto de resonancia magnética y electroencefalograma para la identificación de focos epileptogénicos. También en FUESMEN, se dedica a el procesamiento de neuroimágenes en el departamento de resonancia magnética. \nPaula, está haciendo sus prácticas profesionales en FUESMEN, donde hace monitoreo de equipamiento de resonancia magnética y desarrollo de imágenes angiográficas.'},
    {id:'tuesday-6', photo:tell, name:'Lorenzo Tell', description:'Técnico electromecánico, estudiante avanzado de la Carrera de Bioingeniería en la Universidad Nacional de Villa Mercedes, San Luis, Argentina. Sus áreas de interés abarcan la electrónica especializada, la programación y la impresión 3D en materiales técnicos. Se encuentra realizando múltiples trabajos, desde instrumentación para laboratorio, creación de nuevos dispositivos musicales, interfaces humano/computadora y dispositivos de tecnología asistida.'}
  ];
  const speakersWednesday=[
    {id:'wednesday-1', photo:hintz, name:'Guillermo Hintz', description:'Senior Quality Assurance Automation y Scrum Master. Estudió Ingeniería en Sistemas en la Universidad Tecnológica Nacional, Facultad Regional Córdoba. Trabaja aplicando Scrum diariamente con clientes de todo el mundo hace más de 6 años y estuvo involucrado en equipos de 10 a 150 personas.'},
    {id:'wednesday-2', photo:carrere, name:'Lucía Carolina Carrere', description:'Bioingeniera con Magister en Ingeniera biomédica, egresada de la Facultad de Ingeniería de la Universidad Nacional de Entre Ríos (FIUNER). Se encuentra realizando también su doctorado en la misma institución académica. Su experiencia profesional en investigación se ha centrado en la Ingeniería en Rehabilitación, a través de explorar el diseño y desarrollo de tecnología basada en interface cerebro-computadora (BCI, por sus siglas en inglés de Brain-Computer Interface) para neuro-rehabilitación. En particular, se ha focalizado en la incipiente área de investigación sobre BCI con aplicaciones relacionadas con la recuperación de funciones motoras o cognitivas que pueden presentar personas con secuelas por accidente cerebro vascular; esclerosis múltiple; parkinson; trastornos cognitivos. Desde el año 2009 ha desarrollado su experiencia en investigación en el Laboratorio de Ingeniería en Rehabilitación e Investigaciones Neuromusculares de la FIUNER. Además, es directora del Grupo de Investigación y Desarrollo de la enseñanza en Ingeniería, y es docente en FIUNER.'},
    {id:'wednesday-3', photo:moyano, name:'Silvina Moyano', description:'Bioingeniera egresada de la Facultad de Ingeniería de la Universidad de Mendoza. Posteriormente a su egreso, se desempeñó como investigadora en el Instituto de Ciencias  Básicas (ICB) con un beca doctoral del CONICET en el Grupo de Biofísica y Materia Blanda Condensada. Actualmente, se desempeña como investigadora en el Instituto de Bioingeniería (IBIO) y en el Instituto de Enseñanza de las Ciencias (ECIEN), de la Facultad de Ingeniería de la Universidad de Mendoza y como docente de grado y de posgrado en la Universidad de Mendoza.'},
    {id:'wednesday-4', photo:noya, name:'Facundo Noya', description:'Ingeniero biomédico de la UNC. Premiado por diferentes instituciones a lo largo del mundo, elegido como innovador menor de 35 años por el MIT, emprendedor X por Santander, Global innovator por Expo 2020 en Dubai, Global student entrepreneur por EO organization en EEUU. También ha sido mentor en diferentes organizaciones de apoyo emprendedor en Argentina y Chile.'}
  ];
  const speakersThursday=[
    {id:'thursday-1', photo:larrainTesio, name: 'Melani Larrain y Virginia Tesio', description:'Ingenieras biomédicas egresadas de la Universidad Nacional de Córdoba. Melani finalizó la residencia de Ingeniería Clínica en el Ministerio de Salud de la Provincia de Córdoba y es Diplomada en Evaluación de Cálidad de Organizaciones de Salud por la Universidad Católica de Salta. Actualmente es evaluadora de cálidad para ITAES y representante comercial de una empresa de productos médicos. \nVirginia, cuenta con un Posgrado de Gestión de Proyectos en la Universidad Tecnológica Nacional, Facultad Regional de Buenos Aires, y actualmente se encuentra realizando la residencia de Ingeniería Clínica en el Ministerio de Salud de la Provincia de Córdoba.'},
    {id:'thursday-2', photo:fgallo, name: 'Lucila Figueroa Gallo', description:'Ingeniera Biomédica egresada de la Universidad Nacional de Tucumán (UNT) y actualmente profesora de la carrera en el Departamento de Bioingeniería en el área de Ing. Clínica y Evaluación de Tecnologías Médicas. Especialista en Ingeniería Clínica (FIUNER), egresada y actualmente instructora de la Residencia en Ing. Clínica (UNT - SIPROSA). Diplomada en Gestión y Dirección de Servicios de Salud y sistemas de Gestión de Calidad aplicados a Servicios de Salud basados en ISO 9001:2015. Actualmente cursando la Maestría en Administración de Negocios (FRT - UTN). Ing. Clínica en la Dirección General de Gestión de Tecnologías Médicas - SIPROSA. Soporte de calidad y referente de Bioingeniería del Laboratorio de Salud Pública de Tucumán - SIPROSA, trabajando en proyectos de aplicación de la Ing. Clínica en el sistema de salud pública'},
    {id:'thursday-3', photo:oldani, name: 'Carlos Oldani', description:'Ingeniero Metalúrgico egresado de la Universidad Católica de Córdoba y Doctor en Ciencias de la Ingeniería de la Universidad Nacional de Córdoba. Su carrera profesional la realizó en el INTI haciendo desarrollos metalúrgicos y análisis de falla de componentes mecánicos. Fue además, Jefe del sector Ensayos Mecánicos hasta que dejó el INTI e ingresó a tiempo completo en la FCEFyN – UNC. Es docente en la Universidad Nacional de Córdoba, y es Profesor Titular de la Cátedra de Biomateriales desde el año 2006. Dirige desde su ingreso a la FCEFyN el Laboratorio de Materiales. \nSus trabajos estuvieron siempre centrados en los materiales metálicos: estudió aceros de uso eléctrico, aleaciones de bajo punto de fusión, nitinol, titanio y magnesio, entre otros. Desde hace algunos años su interés está centrado en la pulvimetalurgia de materiales con aplicaciones biomédicas.'},
    {id:'thursday-4', photo:nieva, name:'Eduardo Gabriel Nieva', description:'Ingeniero Biomédico egresado de la Universidad Nacional de Córdoba. Se encuentra realizando su doctorado en Ingeniería de Tejidos con orientación a tejido cardíaco. Ha trabajado en el Laboratorio de Cardiología Traslacional dentro del Hospital Gregorio Marañon en Madrid. Actualmente está en dirección de varios proyectos relacionados con el área.'},
    {id:'thursday-5', photo:pidutti, name:'Milagros Pidutti', description:'Estudiante avanzada de Ingeniería Biomédica en la Universidad Nacional de Tucumán, actualmente realizando su tesis de grado en el área de procesamiento de señales electromiográficas. Es becaria de investigación del Laboratorio de Investigaciones en Neurociencias y Tecnologías Aplicadas (LINTEC) donde participó de proyectos de investigación que buscan relacionar el arte, la musica y la danza, con señales biomédicas. Es ayudante estudiantil en Circuitos Eléctricos II, en la Universidad Nacional de Tucumán'},
    {id:'thursday-6', photo:gonzalezmassaccesi, name:'Trinidad Gonzalez y Natalia Massaccesi', description:'Estudiantes avanzadas de la carrera de Bioingeniería en la Universidad de Mendoza. Trinidad se encuentra realizando actividades de extensión, procesando imágenes de próstata.\n Por su lado, Natalia se encuentra terminando su tesis basada en construcción de hospitales modulares, y realizando procesamiento de imágenes de resonancia magnética en la Fundación Escuela de Medicina Nuclear (FUESMEN)'},
    {id:'thursday-7', photo:navarro, name:'Florencia Nataly Navarro', description:'Ingeniera Industrial y estudiante avanzada de Bioingeniería de la Universidad Nacional Arturo Jauretche (UNAJ). Actualmente, se encuentra cursando su última materia y terminando su trabajo final de carrera. Está por comenzar la carrera de Certified Tech Developer en Digital House, gracias a la beca TechnoloShe de Accenture. Además, es parte del capitulo estudiantil SABI desde septiembre de 2020 como representante de la UNAJ, regional Buenos Aires. Trabaja en el Organismo Provincial para el Desarrollo Sostenible como Autoridad de Aplicación, llevando a cabo la función de inspectora, yendo a todo tipo de industrias y verificando que se cumpla con la normativa ambiental vigente. Se encuentra participando en los siguientes proyectos de investigación orientados a la "Industria 4.0":\n -“Relevamiento de madurez tecnológica en red PyME en el marco del paradigma 4.0” dirigido por el MSc Federico Walas Mateo.\n -“Tecnologías de IoT y Aprendizaje Automático para la Solución de Problemas en el Medio Productivo y el Cuidado del Medio Ambiente" dirigido por el Ing. Diego Montezanti.'},
    {id:'thursday-8', photo:bustosCalmels, name:'Gisel Bustos y Mariam Calmels', description:'Estudiantes avanzadas de la carrera de Ingeniería Biomédica en la Universidad Nacional de Córdoba, actualmente realizando sus tesis de grado. Han participado en importantes proyectos asociados a la discapacidad tales como IncApp, emprendimiento para el desarrollo de aplicaciones móviles Open Source para la enseñanza de personas con discapacidad cognitiva; Junig, proyecto para la enseñanza de personas con discapacidad cognitiva e investigación y desarollo de prótesis uterina para el tratamiento de la incontinencia urinaria post-histerectomías.'}
  ];
  const speakersFriday=[
    {id:'friday-1', photo:zalazar, name:'María Florencia Zalazar', description:'Ingeniera Biomédica egresada de la Universidad Nacional de Córdoba, Facultad de Ciencias Exactas, Fisicas y Naturales. Sus estudios de posgrados incluyen la Residencia en Física Médica en el Hospital Oncológico de Córdoba donde se formó  en Radioterapia y la Especialziación en Física de la Radioterapia dictada por el Instituto Dan Beninson y la Universidad Nacional de San Martin. Actualmente cuenta con permiso individual de Especialista en Física de la Radioterapia emitido por la Autoridad Regulatoria Nuclear y está cursando la Maestría en Física Médica dictada por el Instituto Balseiro y la Universidad Nacional de Cuyo.'},
    {id:'friday-2', photo:zanchi, name:'Daniela Zanchi', description:'Ingeniera Biomédica egresada de la Universidad Nacional de Córdoba, Facultad de Ciencias Exactas, Fisicas y Naturales. Posteriormente obtuvo el título de Magister en Física Médica de la Universidad Nacional de Cuyo - Instituto Balseiro.    Actualmente se desempeña como Física Médica Especialista en Medicina Nuclear en la Fundación Escuela de Medicina Nuclear (FUESMEN), y como docente en las Cátedras de Física del Instituto de Ciencias Biomédicas San Agustín.'},
    {id:'friday-3', photo:beltramone, name:'Diego Beltramone', description:'Ingeniero Eléctrico/Electrónico. Magister en Dirección de Empresas. Experto en TIC y Discapacidad. Doctorando en “Doctorado en Ciencias de la Ingeniería” en la Facultad de Ciencias Exactas, Físicas y Naturales (FCEFyN) de la Universidad Nacional de Córdoba (UNC). Profesor Titular de la Cátedra “Ingeniería en Rehabilitación” en la FCEFyN-UNC. Investigador Categoría 2 dentro del Programa de Incentivos a Docentes investigadores. Director de la Escuela de Ingeniería Biomédica de la FCEFyN-UNC. Director del Laboratorio de Ingeniería en Rehabilitación de la FCEFyN-UNC. Ex Director del Departamento de Bioingeniería de la FCEFyN-UNC. Ex Subdirector del Departamento de Bioingeniería de la FCEFyN-UNC. Ex integrante de la Oficina de Inclusión Educativa de Personas en Situación de Discapacidad de la UNC. Socio Fundador y ex Presidente de la Fundación Inclubyte. Socio originario del Equipo Ébano y a cargo del área Electrónica e Interfaz Física. Ex integrante del Consejo Provincial de Accesibilidad (Córdoba, Argentina) y de la Comisión de Ayudas Técnicas en particular. Ex vicepresidente de la Sociedad Argentina de Bioingeniería (SABI). Ex Presidente del Capítulo de Ingeniería en Rehabilitación de la SABI. Ex Presidente del Capítulo Argentino IEEE/EMBS.'},
    {id:'friday-4', photo:felice, name:'Betiana Felice', description:'Ingeniera Biomédica y Doctora en Ciencias Biológicas, egresada de la Universidad Nacional de Tucumán. Realizó su pasantía en una empresa fabricante de implantables activos médicos (CCC, actualmente parte de un grupo internacional más grande). Realizó su doctorado en Tucumán, Singapur, Alemania y España, especializandose en ingeniería de tejidos. \n Al finalizar su doctorado, comenzó a trabajar en Alemania como arquitecta de software externa para BMW, participando en el desarrollo del sistema de actualización remota de automóviles. Luego de un año en BMW, comenzó a trabajar como Ingeniera de proyectos en Brainlab, una gran empresa Alemana que se dedica al desarrollo de software y hardware para cirugías navegadas. Particpó como Quality Assurance Engineer en el desarrollo del sistema operativo de Brainlab, en el desarrollo del software que manipula y procesa todas las imagenes médicas con las que trabajan las aplicaciones de Brainlab, así como también en la interfaces que comunican e integran todos los productos de Brainlab en grandes hospitales. Actualmente se desempeña como Project Manager de la plataforma hospitalaria on-premise para la integración con distintos tipos de aplicaciones del ámbito clínico, en Snke OS, empresa subsidiaria de Brainlab.'},
    {id:'friday-5', photo:farfan, name:' Fernando Farfán', description:'Ingeniero Electrónico, Magister en Bioingeniería y Doctor en Ciencias Biológicas. Toda su carrera académica la realizó en la Universidad Nacional de Tucumán. Realizó trabajos postdoctorales en la Escuela Técnica Superior de Ingenieros Industriales de la Universidad Politécnica de Madrid y en el Instituto de Bioingeniería de la Universidad Miguel Hernández de Elche (Alicante – España). A lo largo de su carrera de posgrado se especializó en interfases cerebro computadora, biomecánica articular, rehabilitación, biomimética, electrofisiología, neurociencia computacional y procesamiento de señales. Actualmente es profesor en la carrera de Ingeniería Biomédica de la Universidad Nacional de Tucumán, investigador en el CONICET y, desde el año 2019, director del grupo de Investigación en Neurociencias y Tecnologías Aplicadas (LINTEC) en el Instituto Superior de Investigaciones Biológicas (INSIBIO – CONICET). Entre las diversas temáticas abordadas por el LINTEC se pueden mencionar los estudios sobre la caracterización electrofisiológica de la enfermedad del Parkinson, validación electrofisiológica de neuroprótesis de visión, neurociencia del deporte y modelos integrativos de la mecanotransducción sensorial.'},
    {id:'friday-6', photo:altube, name:'María Julia Altube', description:'Licenciada en Biotecnología por la Universidad Nacional de Quilmes (UNQ). En 2018 obtuvo un Doctorado en Ciencia y Tecnología de la UNQ en el área de Nanomedicinas. Actualmente es Investigadora Asistente de CONICET en el Centro de Investigación y Desarrollo de Nanomedicinas (CIDEN) y Profesora Instructora de Nanobiotecnología y Química Biológica de la UNQ. Desde 2019 es Tesorera de la Asociación Argentina de Nanomedicinas. Es coautora de 12 artículos científicos internacionales en el área de nanotecnología aplicada a la salud.'}
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

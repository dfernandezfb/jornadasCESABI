import logo from './../../assets/images/cesabi-blanco.png'
//CSS
import './LandingHero.css'


const LandingHero = () => {
    return (
        // <div className='hero-background'>
        //     <div className='hero-box d-flex align-items-center px-5 flex-column'>
        //         <img src={logo} alt='logo-cesabi' className='w-25'/>
        //         <div className='hero-title text-center mb-5'>
        //             I Jornadas de Bioingeniería e Ingeniería Biomédica del Capítulo de Estudiantes SABI
        //         </div>
        //         <div className='d-flex'>
        //             <button className='green-button'> Inscríbete </button>
        //             <button className='black-button'> Más información</button>
        //         </div>
        //     </div>
        // </div>
        <div className='hero-background'>
        <div className='hero-box d-flex justify-content-center align-items-center px-5 flex-column'>
            <div className='d-flex flex-row align-items-center'>
            <img src={logo} alt='logo-cesabi' className='w-25'/>
            <div className='hero-title'>
                I Jornadas de Bioingeniería e Ingeniería Biomédica del Capítulo de Estudiantes SABI
            </div>
            </div>
            <div className='d-flex'>
                <button className='green-button'> Inscríbete </button>
                <button className='black-button'> Más información</button>
            </div>
        </div>
    </div>
    )
}

export default LandingHero

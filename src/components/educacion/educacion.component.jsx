import React from 'react';
import {Link} from 'react-router-dom';
import UNAM_LOGO from '../assets/images/logo_UNAM.png';
import CONTADOR from '../assets/images/contador.jpeg';
import BYU from '../assets/images/byu.jpeg';
import CACHORROS from '../assets/images/cachorros.jpeg';
import './educacion.styles.scss';


function Educacion() {
    return (
        <>
            <h1>
               Educacion
               <br/>
               <Link to='/'>Inicio</Link> 
            </h1>
            <div > 
                
                <img className="unam" src={UNAM_LOGO} alt="UNAM Logo"/>
                <h1>Medico -Medicina familiar</h1>
                <h3>Universidad Autonoma de Mexico 
                <br/><i>Por mi raza hablara mi espiritu</i></h3>
                <hr/>
            </div>
            <div > 
                
                <img  src={CONTADOR} alt="Contador Publico"/>
                <h1>Contador Publico</h1>
                <h3>Academia Gregg De Comercio</h3>
                <hr/>
            </div>
            <div > 
                
                <img  src={BYU} alt="Escuela de ingles"/>
                <h1>ELC Brigham Young University </h1>
                <h3><i>Enter to Learn, Go Forth to Serve</i> 
                <div className="cachorros">
                <img  className='cachorro'  src={CACHORROS} alt="Escuela de ingles"/>
                <img  className='cachorro'  src={CACHORROS} alt="Escuela de ingles"/>
                <img  className='cachorro'  src={CACHORROS} alt="Escuela de ingles"/>
                </div>
                </h3>
                <hr/>
            </div>
        </>
    )
}

export default Educacion

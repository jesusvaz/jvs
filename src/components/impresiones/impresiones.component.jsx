import React from 'react';
import { Link } from 'react-router-dom';
import IMPRESIONES from '../assets/images/impresiones.jpeg';
import './impresiones.styles.scss';

function Impresiones() {
    return (
        <>
            <h1>Impresiones del Libro de Mormon</h1>
            
            <a href="https://escrituras-7f21e.web.app/">
                <img className="book" src={IMPRESIONES} alt="Anotar tus impresiones al leer" />
            </a>

            <br /><Link to='/'>Inicio</Link>
        </>
    )
}

export default Impresiones

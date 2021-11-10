import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SingleHistoria from './single-history/single-history.component';
import HISTORIAS from '../assets/conociendoAlTata';
import './historias.styles.scss';

const Hisorias = () => {
    let incrementAmount = 1
    const [historias, setHistorias] = useState(HISTORIAS.secciones);
    const [historyCounter, setHistryCounter] = useState(0);

    const showHistorias = historias.map(historia => (
        <SingleHistoria
            title={historia.title}
            subtitle={historia.subtitle}
            titleDelMensaje={historia.titleDelMensaje}
            historia={historia.historia} />
    ))

    const move = (side) => {
        // debugger;
        // if(historyCounter <= showHistorias.length )
        // console.log(`${historyCounter} <= ${showHistorias.length}`)
        // else
        // if(historyCounter >= showHistorias.length )
        // console.log(`${historyCounter} >= ${showHistorias.length}`)

        console.log('Total de historias:',showHistorias.length)

        side === 'left' ?
           
            setHistryCounter((prevHistryCounter) => prevHistryCounter - incrementAmount)
           
            :
            historyCounter <= showHistorias.length 
            ? setHistryCounter((prevHistryCounter) => prevHistryCounter + incrementAmount)
            : setHistryCounter((prevHistryCounter) => prevHistryCounter )
         
            console.log('Historias Counter:',historyCounter)
    }

    return (
        <>
            <h1>Historias</h1>
            <button onClick={() => move('left')}> <i class="fas fa-arrow-left"></i></button>
            <button onClick={() => move('rigth')}> <i class="fas fa-arrow-right"></i></button>
            <br/><Link to='/'>Inicio</Link> 
            {showHistorias[historyCounter]}
        </>
    )
}

export default Hisorias

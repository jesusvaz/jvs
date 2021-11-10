import React, { useState } from 'react';
import Paragraph from '../parrafo/parrafo.component';
import { Link } from 'react-router-dom';

function Impresiones(props) {
    let incrementAmount = 1;
    const [paragrhapCounter, setParagrhapCounter] = useState(0);
   
    const paragraphs = props.location.state.parrafos;
    //console.log('Paragraphs:', paragraphs)

    const showParagraphs = paragraphs.map(p => (
        <Paragraph
            id={p.id}
            parrafoEsp={p.parrafoEsp}
            impresionEsp={p.impresionEsp}/>
    ))

    const move = (side) => {

            

        side === 'left' ?
            setParagrhapCounter((prevParagrhapCounter) => prevParagrhapCounter - incrementAmount)
            :
            setParagrhapCounter((prevParagrhapCounter) => prevParagrhapCounter + incrementAmount)

        console.log('Show pargraph Counter:', paragrhapCounter);
    }

    return (
        <div>
            <h1>Impresiones de la Conferencia</h1>
            <button onClick={() => move('left')}> <i class="fas fa-arrow-left"></i></button>
            <button onClick={() => move('rigth')}> <i class="fas fa-arrow-right"></i></button>
            <br /><Link to='/'>Inicio</Link>
            {showParagraphs[paragrhapCounter]}


        </div>
    )
}

export default Impresiones

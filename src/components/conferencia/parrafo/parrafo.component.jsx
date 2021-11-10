import React from 'react';
import './parrafo.styles.scss';

function Parrafo({id,parrafoEsp,impresionEsp}) {
    return (
        <div className="parrafos" key={id}>
         <h1></h1>
            <p>
            <h4>Versiculo</h4>
                <mark>
                    {parrafoEsp}
                </mark>
            </p>
            <p>
                <h4>Impresion</h4>
                {impresionEsp}
            </p>
            
        </div>
    )
}

export default Parrafo

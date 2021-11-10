
import React  from 'react';
import { Link } from 'react-router-dom';
import './talk.styles.scss';


function Talk({ id,talk, speaker, calling, url, parrafos }) {

    const contenido = parrafos.map(parrafo => 
        (
            <div key={id} className="impresion">
       
               <h6>Subrayado</h6>
               <p><mark>{parrafo.parrafoEsp}</mark></p> 
               <h6>Impresion</h6>
               <p>{parrafo.impresionEsp}</p>
       
            </div>
        )

    )

    return (
        <div className="speakers">
           
            <h4>{speaker}</h4>
            <h4>{calling}</h4>
            <Link to={{
                pathname:'/ipresionesConferencia',
                state:{parrafos,talk}
            }}>
            Impresiones
            </Link>
            <hr/>
        </div>
    )
}

export default Talk








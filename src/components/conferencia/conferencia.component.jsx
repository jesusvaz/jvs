import React from 'react';
import { Link } from 'react-router-dom';
import CONFERENCIA_IMG from '../assets/images/centro-de-conderencias.jpeg';
import TALKS from '../assets/conferencia';
import Talk from '../conferencia/talk/talk.component';


function Impresiones() {
    //console.log('Diacursos:',TALKS);
    
  const impresiones = TALKS.map(talk => 
        (
            <>
                <Talk 
                      id={talk.id}
                      talk={talk.talk}
                      speaker= {talk.speaker}
                      calling= {talk.calling}
                      url= {talk.url.esp}
                      parrafos={talk.parrafos}
                      />
       
            </>
        )

    )
    return (
        <>
            <h1>Conferencia</h1>
          
            <img src={CONFERENCIA_IMG} alt="Conferencia General"/>
            <br/>
            <Link to='/'>Inicio</Link> 
            {
                impresiones
            }
        </>
    )
}

export default Impresiones

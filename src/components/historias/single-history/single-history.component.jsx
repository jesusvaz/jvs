import React from 'react';
import './single-history.styles.scss';

function SingleHistory({title,subtitle,titleDelMensaje,historia}) {

    return (
        <>
            <hr/>
            <h1 className='title'>{title}</h1>
            <h2 className='subtitle'>{subtitle}</h2>
            <h3 className='titleDelMensaje'>{titleDelMensaje}</h3>
            <p className='historia'>{historia}</p>
        </>
    )
}

export default SingleHistory

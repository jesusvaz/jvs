import React from 'react';
import PadresPic from '../../assets/images/padres.JPG';
import '../header-imgOne/header-imgOne.styles.scss';

function HeaderImgOne() {
    return (
        
           <img className="padres" src={PadresPic} alt="Parents"/>
        
    )
}

export default HeaderImgOne

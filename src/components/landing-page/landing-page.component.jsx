import React from 'react';
import { Link } from 'react-router-dom';

import Padres from "../header/header-imgOne/header-imgOne.component";
import Timpanogos from '../header/header-imgTwo/header.imgTwo.component';
import TempleMX from '../header/header-imgFour/header-imgFour.component';
import Fall from '../header/header-imgThree/header-imgThree.component';
import Carrusel from '../carrusel/carrusel.component'
import './landing-page.styles.scss';


function LandingPage() {
    return (
        <div>

            <div>
                <div className="titulo">
                    <h1>JOB 1:21:y dijo: Desnudo salí del vientre de mi madre y desnudo volveré allá. Jehová dio y Jehová aquitó: ¡Bendito sea el nombre de Jehová!</h1>
                </div>
                <div className="container">

                   
                        <div key='c1n' className="nav1"><Padres /></div>
                        <div key='c2n' className="nav2"><Timpanogos /></div>
                        <div key='c3n' className="nav3"><Fall /></div>
                        <div key='c4n' className="nav4"><TempleMX /></div>
                  

                    <main>
                        <Carrusel />
                    </main>

                    <div key='c1' className="content1">  <Link to='/educacion'>Educacion</Link>   </div>
                    <div key='c2' className="content2">  <Link to='/conferencia'>Conferencia</Link> </div>
                    <div key='c3' className="content3">  <Link to='historias'>Historias</Link>   </div>
                    <div key='c4' className="content4">  <Link to='/impresiones'>Escrituras</Link> </div>
                    <footer><h6>Tributo a Jesus Vaquez Sauceda &copy;copyright <em id="date">{new Date().getFullYear()}</em></h6></footer>


                </div>

            </div>
        </div>
    )
}

export default LandingPage

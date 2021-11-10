import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carrusel.styles.scss';
import pic1 from '../assets/images/1.JPG';
import pic2 from '../assets/images/2.JPG';
import pic3 from '../assets/images/3.JPG';
import pic4 from '../assets/images/4.JPG';
import pic5 from '../assets/images/5.JPG';
import pic6 from '../assets/images/6.JPG';
import pic7 from '../assets/images/7.JPG';
import pic8 from '../assets/images/8.JPG';
import pic9 from '../assets/images/9.JPG';
import pic10 from '../assets/images/10.JPG';
import pic11 from '../assets/images/11.JPG';
import pic12 from '../assets/images/12.JPG';
import pic13 from '../assets/images/13.JPG';
import pic14 from '../assets/images/14.JPG';

function Carrusel() {
    return (
        <Carousel className="main-slide">
            <div>
                <img src={pic1} alt={pic1} />
            </div>
            <div>
                <img src={pic2}  alt={pic2}  />
            </div>
            <div>
                <img src={pic3}  alt={pic3}  /> 
            </div>
            <div>
                <img src={pic4}  alt={pic4} />
            </div>
            <div>
                <img src={pic7} alt={pic7}  />
            </div>
            <div>
                <img src={pic8}  alt={pic8} />  
            </div>
            <div>
                <img src={pic9}  alt={pic9} />  
            </div>
            <div>
                <img src={pic10}  alt={pic10} />
            </div>
            <div>
                <img src={pic11} alt={pic11}  />
            </div>
            <div>
                <img src={pic12}  alt={pic12} />
            </div>
            <div>
                <img src={pic13}  alt={pic13} />
            </div>
       
        </Carousel>
    )
}

export default Carrusel

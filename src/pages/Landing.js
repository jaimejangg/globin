import React, { Component } from 'react';
import './CSS/landing.css';
import smarthub from '../images/smart.png';
import Navigation from '../components/Navigation';

class LandingPage extends Component {
  render() {
    return (
        <div>
          <Navigation />
          <section className='section1'>
              <div className='h2Section1PositionContainer'>
                <h2>
                  Bienvenido a globin el lugar donde hacemos<br></br>
                  &nbsp; de tu hogar mas inteligente, competitivo y<br></br> 
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; colaborativo.
                </h2>
              </div>   
          </section>
          <section className='section2'>
              <div className='h2Section2PositionContainer'>
                <h2>
                  globin es la red donde hacemos crecer a las comunidades. creando canales<br></br> 
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; de apoyo sobre diferentes necesidades dentro de ellas<br></br>
                  &nbsp; &nbsp; &nbsp; &nbsp;nos inventamos el CityFunding la manera en la que las comunidades<br></br> 
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;se apoyaran de manera inteligente y creceran economicamente.
                </h2>
              </div>
              <div className='h1Section2Position'>
                <h1>CityFunding con pensamiento por diseño.</h1>
              </div>
          </section>
          <section className='section3'>
            <div className='h1Section3Position'>
              <h1>Economia Compartida</h1>
            </div>
            <img className='smartHub' src={smarthub} alt={'smarthub'}/>
            <div>
              <h2 className='h2Section3Position'>
                SmartHub sera el citio dentro de tu telefono o computadora 
                donde se encontraran los resultados del CityFunding ahi el ciudadano 
                podra encontrar las distintas herramientas con las que podra ayudarse 
                a coexistir en comunidad y lograr ser mas productivos 
                de una manera mas eficiente.
              </h2>
            </div>
          </section>
          <section className='section4'>
          </section>
          <footer>
          </footer>
        </div>
    );
  }
}

export default LandingPage;

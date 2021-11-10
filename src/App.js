import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import LandingPage from './components/landing-page/landing-page.component';

import Template from './components/template/template.component';
import '../src/components/template/template.styles.scss';

import Padres from './components/header/header-imgOne/header-imgOne.component'; //'../header/header-imgOne/header-imgOne.component';
import Timpanogos from './components/header/header-imgTwo/header.imgTwo.component'; //'../header/header-imgTwo/header.imgTwo.component';
import TempleMX from './components/header/header-imgFour/header-imgFour.component';//'../header/header-imgFour/header-imgFour.component';
import Fall from './components/header/header-imgThree/header-imgThree.component'; //'../header/header-imgThree/header-imgThree.component';

import Education from './components/educacion/educacion.component'; 
import ImpresionesEscrituras from './components/impresiones/impresiones.component';  
import Conferencia from './components/conferencia/conferencia.component'; 
//import Historias from './components/historias/hisorias.component' 
import Historias from './components/historias/historias-page/historia-page.component'; 
import ImpresionesConferencia from './components/conferencia/impresiones/impresiones.component';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/educacion" component={Education} />
          <Route path="/impresiones" component={ImpresionesEscrituras} />
          <Route path="/conferencia" component={Conferencia} />
          <Route path="/historias" component={Historias} />
          <Route path="/ipresionesConferencia" exact component={ImpresionesConferencia} />
        </Switch>
      </div>
    </Router>

    )

  }
}
export default App;

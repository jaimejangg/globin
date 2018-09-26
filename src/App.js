import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Negocios from './pages/Negocios';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Perfil from './pages/Profile';
import AccountPage from './pages/AccountPage';
import ChatPage from './pages/ChatPage';
import NotificationPage from './pages/NotificationPage';
import HubStore from './pages/HubStore';
import PerfilSeguridad from './pages/PerfilSeguridad';
import Terminos from './pages/Terminos';
import Ayuda from './pages/Ayuda';
import * as routes from './constants/routes';
import Navigation from './components/Navigation';
import { firebase } from './firebase';
import withAuthentication from './components/withAuthentication';

const App = () => 
  <Router>
    <div>
      <Navigation />
      <Route exact path={routes.LANDING} component={Landing} />
      <Route exact path={routes.NEGOCIOS} component={Negocios} />
      <Route exact path={routes.HOME} component={Home} />
      <Route exact path={routes.ACCOUNT} component={AccountPage} />
      <Route exact path={routes.CHAT} component={ChatPage} />
      <Route exact path={routes.NOTIFICACIONES} component={NotificationPage} />
    </div>
  </Router>

export default withAuthentication(App);

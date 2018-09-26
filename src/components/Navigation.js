import React from 'react';
import { Link } from 'react-router-dom';
import AuthUserContext from '../AuthUserContext';
import logo from '../images/logo_globinn.png';
import Examples from './modal/ModalLogin';
import ModalRegistro from './modal/ModalRegistro';
import './Nabvar/navbar.css';
import Usuario from './icons/Usuario';
import Home from './icons/home';
import Chat from './icons/Chat';
import Notificaciones from './icons/Notificacions';
import * as routes from '../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <div className='nav-container'>
    <nav className='nav-home'>
      <div className='iconHomeContainer'>
          <Link to={routes.HOME}>
            <Home />
          </Link>
      </div>  
      <div className='iconos-container'>
        <div className='icon-size-div'>
          <Link to={routes.ACCOUNT}>
            <Usuario />
          </Link>
        </div>
        <div className='icon-size-div'>
          <Link to={routes.CHAT}>
            <Chat />
          </Link>
        </div>
        <div className='icon-size-div'>
          <Link to={routes.NOTIFICACIONES}>
            <Notificaciones />
          </Link>
        </div>
      </div>
    </nav>
  </div>

const NavigationNonAuth = () =>
  <div>
    <nav className='nav'>
    <ModalRegistro />
    <Examples />
    <Link to={routes.LANDING} ><img src={logo} className='logotipo' alt='logotipo' /></Link>
    <li className='para-negocios-li'><Link to={routes.NEGOCIOS}>Para Negocios</Link></li>
    </nav>
  </div>

export default Navigation;
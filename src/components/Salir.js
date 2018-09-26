import React from 'react';
import '../pages/CSS/home.css'
import { auth } from '../firebase';

const SignOutButton = () =>
  <button
    className='boton-salir'
    type="button"
    onClick={auth.doSignOut}
  >
    Salir
  </button>

export default SignOutButton;
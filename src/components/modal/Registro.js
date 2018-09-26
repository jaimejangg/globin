import React, { Component } from 'react';
import './CSS/Registro.css';
import { Link, withRouter } from 'react-router-dom';
import isotipo from '../../images/isotipologin.png';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const SignUpPage = ({ history }) =>
  <div>
    <SignUpForm history={history} />
  </div>

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE  };
  }

  onSubmit = (event) => {
    const {
        username,
        email,
        passwordOne,
      } = this.state;
      
    const {
        history,
    } = this.props;
      
    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
    })
    .catch(error => {
      this.setState(byPropKey('error', error));
    });
  
    event.preventDefault();
  }

  render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;

      const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';
    
      return (
      <form onSubmit={this.onSubmit}>
          <img src={isotipo} alt='globin' className='size-image' />
         <input
          className='nombre-Input'
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Nombre"
        />
        <input
          className='email-Input'
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email"
        />
        <input
          className='pass-Input'
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Contraseña"
        />
        <input
          className='pass-Input'
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirmar Contraseña"
        />
        <button 
          className='button-login'
          disabled={isInvalid} 
          type="submit"
        >
          Registrarme
        </button>

        { error && <p>{error.message}</p> }

      </form>
    );
  }
}

const SignUpLink = () =>
  <p className='sinCuenta'>
    No tienes una cuenta?
    {' '}
    <Link to={routes.SIGN_UP}>Registrate</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};
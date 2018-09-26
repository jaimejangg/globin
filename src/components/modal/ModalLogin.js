import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './CSS/modalLogin.css';
import PropTypes from 'prop-types';
import Login from './Login';

 class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <div>
                <li onClick={() => this.openModal()} >
                    Entrar
                </li>
                <Modal 
                    visible={this.state.visible}
                    width="592"
                    height="376"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <a className='cerrar' href="javascript:void(0);" onClick={() => this.closeModal()}>Cerrar</a>
                    </div>
                    <Login title='ENTRAR AHORA' />
                </Modal>
            </div>
        );
    }
}

Examples.propTypes = {
    title: PropTypes.string
}

export default Examples;
import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './CSS/modalRegistro.css';
import PropTypes from 'prop-types';
import Registro from './Registro';

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
                <button onClick={() => this.openModal()} className='buttonRegistro'>
                    Registrate
                </button>
                <Modal 
                    visible={this.state.visible}
                    width="592"
                    height="500"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <a className='cerrar' href="javascript:void(0);" onClick={() => this.closeModal()}>Cerrar</a>
                    </div>
                    <Registro title='REGISTRARSE' />
                </Modal>
            </div>
        );
    }
}

Examples.propTypes = {
    title: PropTypes.string
}

export default Examples;
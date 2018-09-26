import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './rideForm.css';

class RideForm extends Component {
    constructor() {
        super();
        this.state = {
            visible : false
        }
        this.addRide = this.addRide.bind(this);
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

    addRide() {
        this.props.addRide(this.textInput.value);
        this.textInput.value = '';
        this.textInput.focus();
    }

render() { 
    return(
        <div className='rideForm'>
            <input 
                placeholder='agrega un ride'
                ref={input => {this.textInput = input;}}
                type='text' />
            <button
                onClick={() => this.openModal()}
                >
                Agregar Ride
            </button>
        </div>
        )
    }
}

export default RideForm;
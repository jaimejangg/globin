import React, { Component } from 'react';
import './ride.css';

class Ride extends Component {
    constructor(props) {
        super(props);
        this.rideContent = props.rideContent;
        this.rideId = props.rideId;
    }

    handleRemove(id) {
        this.props.removeRide(id);
    }

    render() {
        return(
            <div className='ride'>
                <span
                    onClick={() => this.handleRemove(this.rideId)}
                    >&times;</span>
                <p>{this.rideContent}</p>
            </div>
        )
    }
 }

export default Ride;
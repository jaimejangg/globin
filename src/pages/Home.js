import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuthorization from '../components/withAuthorization';
import './CSS/home.css';
import ImgProfile from '../components/Menu Globin/ImgProfile';
import logoRedondo from '../images/globinRedondo.png';
import SignOutButton from '../components/Salir';
import Ride from '../components/Ride/Ride';
import RideForm from '../components/RideForm/RideForm';
import firebase from 'firebase';
import { db } from '../firebase/firebase';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            rides: [
                {rideId: 1, rideContent: 'ride 1'},
                {rideId: 2, rideContent: 'ride 2'},
            ]
        };
        this.addRide = this.addRide.bind(this);
        this.removeRide = this.removeRide.bind(this);
    }
    
    removeRide() {
        
    }

    addRide(ride) {
        let { rides } = this.state;
        rides.push({
            rideId: rides.length + 1,
            rideContent: ride
        });
        this.setState({ rides });
    }

    render(){
        return (
            <div className='container'>
                <section className='col-1'>
                    <div className='location-Image'>
                    </div>
                    <div className='opciones-Div-azul'>
                        <img src={logoRedondo} className='logotipo-redondo' alt='logotipo' />
                    </div>
                    <div className='opciones-div'>
                        <div className='container-option'>
                            <div className='canal-option'>
                                <h3 className='h3-canal-option'>Canal: Transporte</h3>
                                <div>
                                </div>
                            </div>
                        </div>
                        <SignOutButton />
                    </div>
                </section>
                <section className='col-2'>
                    <div className='ride-post'>
                        {this.state.rides.map(ride => {
                            return (
                                <Ride 
                                    rideContent={ride.rideContent}
                                    rideId={ride.rideId}
                                    key={ride.rideId}
                                    removeRide={this.removeRide}
                                />
                            )
                        })}
                    </div>
                    <div className='add-ride-post'>
                        <RideForm addRide={this.addRide}/>
                    </div>
                </section>
                <section className='col-3'>
                </section>
            </div>
        );
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Home);

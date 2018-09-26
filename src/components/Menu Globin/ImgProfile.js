import React, { Component } from 'react'
import './imgProfile.css'
import imgJaime from '../../images/jaime.jpg';

class ImgProfile extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <img src={imgJaime} className='profile-Image'>
            </img>
        )
    }
}

export default ImgProfile;
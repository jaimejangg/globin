import React, { Component } from 'react';
import './CSS/notificationPage.css';
import withAuthorization from '../components/withAuthorization';

class NotificationPage extends Component {
    render() {
        return (
            <div>
                hola pinches
            </div>
        )
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(NotificationPage);
import React, { Component } from 'react';
import './CSS/chat.css';
import withAuthorization from '../components/withAuthorization';

class ChatPage extends Component {
    render() {
        return (
            <div>
                hola
            </div>
        )
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(ChatPage);
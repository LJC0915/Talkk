import React from 'react';
import io from 'socket.io-client';

import Chatstatusbar from 'components/Chatstatusbar.jsx';
import Chatroom from 'components/Chatroom.jsx';
import Message from 'components/Message.jsx';

import './Mainframe.css';

export default class Mainframe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numUsers: 0,
            message: {}
        };
        this.socket = io();
        this.addUser = this.addUser.bind(this);
        this.login = this.login.bind(this);
        this.userJoin = this.userJoin.bind(this);
        this.userLeft = this.userLeft.bind(this);
        this.handleSendMessage = this.handleSendMessage.bind(this);

        this.socket.on("login", this.login);
        this.socket.on("user joined", this.userJoin);
        this.socket.on("user left", this.userLeft);
    }

    login(numUsers) {
        console.log('Welcome to TALKK Chat');
        console.log('there are ' + numUsers + ' participants');
        this.setState({numUsers: numUsers});
    }
    userJoin(msg) {
        console.log(msg.username + ' joined');
        console.log('there are ' + msg.numUsers + ' participants');
        this.setState({numUsers: msg.numUsers});
    }
    userLeft(msg) {
        console.log(msg.username + ' left');
        console.log('there are ' + msg.numUsers + ' participants');
        this.setState({numUsers: msg.numUsers});
    }
    addUser(username) {
        this.socket.emit('add user', username);
    }
    handleSendMessage(message){
        console.log(message);
        this.refs.chatroom.sendMessage(message);
        // this.setState({message: message});
    }
    render() {
        return (<div className="main_frame d-flex flex-column justify-content-between">
            <Chatstatusbar socket={this.socket} numUsers={this.state.numUsers}/>
            <Chatroom socket={this.socket} ref="chatroom"/>
            <Message socket={this.socket} sendMessage={this.handleSendMessage} />
        </div>)
    }
}

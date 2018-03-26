import React from 'react';
import io from 'socket.io-client';

import Chatcontent from 'components/Chatcontent.jsx';

import './Chatroom.css';

export default class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.catchMessage = this.catchMessage.bind(this)

        this.socket = io();
        this.socket.on("msg", this.catchMessage );

        this.state = {
            messages: []
        }
        console.log(typeof this.state.messages);
    }
    catchMessage(msg) {

        let messages = this.state.messages;
        console.log(msg);
        messages.push(msg);
        this.setState({
            messages: messages
        })
    }

    render() {
        let children = null ;
        if (this.state.messages.length) {
            children = this.state.messages.map(msg => (
                <Chatcontent {...msg}></Chatcontent>
            ));

        }

        return (<div className="p-2 chat d-flex flex-column justify-content-end">{children}</div>)
    }
}

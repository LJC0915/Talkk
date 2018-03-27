import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import Chatcontent from 'components/Chatcontent.jsx';

import './Chatroom.css';

export default class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.catchMessage = this.catchMessage.bind(this)
        this.props.socket.on("msg", this.catchMessage);
        this.state = {
            messages: []
        }
        window.onresize = () => {
            let a = document.querySelector('ul')
            a.scrollTop = a.scrollHeight;
        };

    }


    sendMessage(msg) {
        let messages = this.state.messages;
        msg.username = "MySelf"
        messages.push(msg);
        this.setState({messages: messages})
        let a = document.querySelector('ul')
        a.scrollTop = a.scrollHeight;
    }
    catchMessage(msg) {
        let messages = this.state.messages;
        messages.push(msg);
        this.setState({messages: messages})
        let a = document.querySelector('ul')
        a.scrollTop = a.scrollHeight;
    }

    render() {
        let children = [];
        if (this.state.messages.length) {
            children = this.state.messages.map(msg => (<Chatcontent {...msg}></Chatcontent>));

        }
        return (<div className="p-2 chat d-flex flex-column justify-content-end">
            <ul className="chatt">{children}</ul>
        </div>)

    }
}

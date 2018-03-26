import React from 'react';

import Chatstatusbar from 'components/Chatstatusbar.jsx';
import Chatroom from 'components/Chatroom.jsx';
import Message from 'components/Message.jsx';

import './Mainframe.css';

export default class Mainframe extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="main_frame d-flex flex-column justify-content-between">
            <Chatstatusbar />
            <Chatroom />
            <Message username={this.props.username}/>

        </div>
    )
    }
}

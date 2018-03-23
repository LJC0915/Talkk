import React from 'react';

import Chatstatusbar from 'components/Chatstatusbar.jsx';
import Chatcontent from 'components/Chatcontent.jsx';
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
            <Chatcontent />
            <Message />
            
        </div>
    )
    }
}

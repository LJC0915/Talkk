import React from 'react';
import moment from 'moment';
import './Chatcontent.css';

export default class Chatcontent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="p-2 d-flex flex-column">
                <div><img src="https://i.imgur.com/iQnCQGa.png" alt="" /><strong>{this.props.username} </strong><span className="time"> {moment(this.props.time).calendar()}</span></div>
                <div className="message"> {this.props.msg}</div>
            </div>
        )
    }
}

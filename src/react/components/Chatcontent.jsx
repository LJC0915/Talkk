import React from 'react';
import moment from 'moment';
import './Chatcontent.css';

export default class Chatcontent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
            <div className="p-2 d-flex flex-column chatcontent">
                <div><img src="https://i.imgur.com/iQnCQGa.png" alt="" /><strong>{this.props.username} </strong><span className="time"> {moment(this.props.time).calendar()}</span></div>
                <div className="message"> {this.props.msg}</div>
            </div>
        </li>
        )
    }
}

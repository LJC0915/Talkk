import React from 'react';

import './Message.css';

export default class Message extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="p-2">
            <div className="input-group">
                <input id="message" type="text" className="form-control" placeholder="Message # Lunch" aria-describedby="sizing-addon2"/>
            </div>
        </div>)
    }
}

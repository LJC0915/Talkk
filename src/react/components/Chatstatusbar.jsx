import React from 'react';

import './Chatstatusbar.css';

export default class Chatstatusbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="p-2 header d-flex flex-row justify-content-between">
            <div>
                <div className="chat_type"># Lunch {this.props.room}</div>
                <div className="dec">
                    <span>1 {this.props.onlineCount}</span>
                     person | description: lorem    {this.props.description}</div>
            </div>
            <div className="p-1">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" aria-describedby="sizing-addon2"/>
                </div>
            </div>
        </div>
    )
    }
}

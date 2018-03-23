import React from 'react';

import './Sidebar.css';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="p-2 sidebar d-flex flex-column">
                <div className="p-3">
                    <div className="team_name">TALKK</div>
                    <span className="team_user">{this.props.username}</span>
                </div>
                <div className="p-3">
                    <div className="chat_type">Channels</div>
                    <div className="team_user"> # Lunch</div>
                    <div className="team_user"> # Dev 03</div>
                </div>
                <div className="p-3">
                    <div className="chat_type">Direct Messages</div>
                    <span className="team_user"> # LJC0915</span>
                </div>
            </div>)
    }
}

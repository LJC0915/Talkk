import React from 'react';

import Loginmodal from 'components/Loginmodal.jsx';
import Mainframe from 'components/Mainframe.jsx';
import Sidebar from 'components/Sidebar.jsx';

import './Main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSetUsername = this.handleSetUsername.bind(this);
    }
    render() {
        return (<div>
            <Loginmodal setUsername={this.handleSetUsername}/>
            <div className="frame d-flex flex-row">
                <Sidebar  username={this.handleSetNumUsers} />
                <Mainframe ref="mainframe"/>
            </div>

        </div>)
    }
    handleSetUsername(username) {
        this.refs.mainframe.addUser(username);
    }
}

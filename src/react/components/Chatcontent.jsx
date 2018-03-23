import React from 'react';

import './Chatcontent.css';

export default class Chatcontent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="p-2 chat d-flex flex-column justify-content-end"></div>
    )
    }
}

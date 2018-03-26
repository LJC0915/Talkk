import React from 'react';
import uuid from 'uuid/v4';
import io from 'socket.io-client';
import './Message.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
export default class Message extends React.Component {
    constructor(props) {
        super(props);
        this.socket = io();
        this.sendMessage = this.sendMessage.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            inputValue: ''
        };
    }
    sendMessage(e) {
        e.preventDefault();
        let message = {'username': this.props.username, 'msg': this.state.inputValue, 'key': uuid()}
        this.socket.emit("send", message);
        this.setState({
            inputValue: ""}
        );
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value}
        );
    }
    render() {
        return (
          <Form className="p-2" onSubmit={this.sendMessage}>
            <FormGroup className="sendMessage">
              <Label for="message" hidden>Message</Label>
              <Input className="sendMessage" type="text" name="message" id="message" placeholder="Message # Lunch" value={this.state.inputValue} onChange={this.handleInputChange} />
            </FormGroup>
          </Form>
        );
    }
}

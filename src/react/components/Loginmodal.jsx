import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    InputGroup,
    Input
} from 'reactstrap';
// import { Button } from 'reactstrap';

export default class Loginmodal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            backdrop: 'static',
            inputValue: ''
        };

        this.toggle = this.toggle.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.setUsername = this.setUsername.bind(this);
    }

    toggle() {
        console.log(this);
        this.setState({
            modal: !this.state.modal
        });
    }
    componentDidMount() {
        this.toggle();
    }
    changeBackdrop(e) {
        console.log(e.target.value);
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value}
        );
    }
    setUsername() {
        if (this.state.inputValue) {
            this.props.setUsername(this.state.inputValue);
            this.toggle();
        }

    }
    render() {
        return (<div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
                <ModalHeader>Please Input User Name</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <Input placeholder="username" value={this.state.inputValue} onChange={this.handleInputChange} />
                    </InputGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.setUsername}>Go TALKK !!</Button>
                </ModalFooter>
            </Modal>
        </div>)
    }
}

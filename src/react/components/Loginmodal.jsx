import React from 'react';
import {
    Button,
    Form,
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
        this.setState({
            modal: !this.state.modal
        });
    }
    componentDidMount() {
        this.toggle();
    }
    handleInputChange(e) {
        this.setState({inputValue: e.target.value});
    }
    setUsername(e) {
        e.preventDefault();
        if (this.state.inputValue) {
            this.props.setUsername(this.state.inputValue);
            this.toggle();
        }

    }
    render() {
        return (<div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop} >
                <ModalHeader>Please Input Your Name</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.setUsername}>
                        <InputGroup>
                            <Input type="text" placeholder="Jessie ?!" value={this.state.inputValue} onChange={this.handleInputChange}/>
                        </InputGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>)
    }
}

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class UpdateForm extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.updataDtatOfChoco}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control name="chocotitle" type="text" placeholder="Update the Title" />
  </Form.Group>
  <Button  variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
        );
    }
}

export default UpdateForm;
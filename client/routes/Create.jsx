import React, { Component } from 'react';
import {
  Jumbotron,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import TopNav from '../components/Nav';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TopNav />
        <Jumbotron>
          <h1 className="display-3">Add a Site</h1>
          <p className="lead">Add a new bouldering site</p>
        </Jumbotron>
        <Container>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input type="text" name="name" id="exampleEmail" placeholder="Name" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Address</Label>
              <Input type="text" name="address" placeholder="Address" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">City</Label>
              <Input type="" name="city" placeholder="City" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">State</Label>
              <Input type="text" name="state" placeholder="State" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Zip Code</Label>
              <Input type="text" name="zipcode" placeholder="Zip Code" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Description</Label>
              <Input type="textarea" name="description" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Create;

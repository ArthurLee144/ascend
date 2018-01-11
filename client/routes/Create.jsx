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
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import TopNav from '../components/Nav';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      state: '',
      description: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  onSubmit(event) {
    const {
      name, location, state, description,
    } = this.state;
    this.props.mutate({
      variables: {
        name, location, state, description,
      },
    })
      .then(() => {
        this.setState({
          name: '',
          location: '',
          state: '',
          description: '',
        });
      });
    event.preventDefault();
  }

  render() {
    const {
      name, location, state, description,
    } = this.state;
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
              <Label for="name">Name</Label>
              <Input type="text" name="name" placeholder="Name" onChange={this.onChange} value={name} />
            </FormGroup>
            <FormGroup>
              <Label for="location">Location</Label>
              <Input type="text" name="location" placeholder="Location" onChange={this.onChange} value={location} />
            </FormGroup>
            <FormGroup>
              <Label for="state">State</Label>
              <Input type="text" name="state" placeholder="State" onChange={this.onChange} value={state} />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input type="textarea" name="description" onChange={this.onChange} value={description} />
            </FormGroup>
            <Button onClick={this.onSubmit}>Submit</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

const createMutation = gql`
  mutation ($name: String!, $location: String!, $state: String!, $description: String!) {
    createSite(name: $name, location: $location, state: $state, description: $description)
  }
`;

Create.propTypes = {
  mutate: PropTypes.func.isRequired,
};


export default graphql(createMutation)(Create);

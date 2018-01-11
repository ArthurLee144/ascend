import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
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

  onSubmit() {
    const { username, password, email } = this.state;
    this.props.mutate({
      variables: { username, password, email },
    })
      .then(() => {
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log('There was an error sending the query', error);
      });
  }

  render() {
    const {
      username, email, password,
    } = this.state;
    return (
      <div>
        <Container>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="text" name="email" placeholder="Email" onChange={this.onChange} value={email} />
            </FormGroup>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" placeholder="Username" onChange={this.onChange} value={username} />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" placeholder="Password" onChange={this.onChange} value={password} />
            </FormGroup>
            <Button onClick={this.onSubmit}>Sign Up</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

const registerMutation = gql`
  mutation ($username: String!, $password: String!, $email: String!) {
    registerUser(username: $username, password: $password, email: $email)
  }
`;

Register.propTypes = {
  mutate: PropTypes.func.isRequired,
};

export default graphql(registerMutation)(Register);

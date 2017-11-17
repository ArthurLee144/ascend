import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Input,
  Container,
  Header,
} from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
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
    console.log(this.state);
    const { username, password, email } = this.state;
    console.log('username: ', username);
    console.log('password: ', password);
    console.log('email: ', email);
    this.props.mutate({
      variables: { username, password, email },
    })
      .then(({ data }) => {
        console.log('Got data', data);
      })
      .catch((error) => {
        console.log('There was an error sending the query', error);
      });
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <Container text>
        <Header as="h2">Sign Up</Header>
        <Input
          name="username"
          onChange={this.onChange}
          value={username}
          placeholder="Username"
          fluid
        />
        <Input
          name="email"
          onChange={this.onChange}
          value={email}
          placeholder="Email"
          fluid
        />
        <Input
          name="password"
          onChange={this.onChange}
          value={password}
          type="password"
          placeholder="Password"
          fluid
        />
        <Button onClick={this.onSubmit}>Submit</Button>
      </Container>
    );
  }
}

const registerMutation = gql`
  mutation ($username: String!, $password: String!, $email: String!) {
    userRegister(username: $username, password: $password, email: $email) {
      id
    }
  }
`;

Register.propTypes = {
  mutate: PropTypes.func.isRequired,
};

export default graphql(registerMutation)(Register);

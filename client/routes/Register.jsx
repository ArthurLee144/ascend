import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      usernameError: '',
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
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
    this.setState({
      usernameError: '',
      emailError: '',
      passwordError: '',
    });
    const { username, password, email } = this.state;
    this.props.mutate({
      variables: { username, password, email },
    })
      .then(({ data }) => {
        console.log('Got data', data);
        const { ok, errors } = data.registerUser;
        if (ok) {
          this.context.history.push('/');
        } else {
          const err = {};
          errors.forEach(({ path, message }) => {
            err[`${path}Error`] = message;
          });
          this.setState(err);
        }
      })
      .catch((error) => {
        // Let user know username/email already exists or invalid
        console.log('There was an error sending the query', error);
      });
  }

  render() {
    const {
      username, email, password, usernameError, emailError, passwordError,
    } = this.state;
    const errorList = [];
    if (usernameError) {
      errorList.push(usernameError);
    }
    if (emailError) {
      errorList.push(emailError);
    }
    if (passwordError) {
      errorList.push(passwordError);
    }
    return (
      <Container text>
        <Header as="h2">Sign Up</Header>
        <Input
          error={!!usernameError}
          name="username"
          onChange={this.onChange}
          value={username}
          placeholder="Username"
          fluid
        />
        <Input
          error={!!emailError}
          name="email"
          onChange={this.onChange}
          value={email}
          placeholder="Email"
          fluid
        />
        <Input
          error={!!passwordError}
          name="password"
          onChange={this.onChange}
          value={password}
          type="password"
          placeholder="Password"
          fluid
        />
        <Button onClick={this.onSubmit}>Submit</Button>
        {usernameError || emailError || passwordError ? (
          <Message error header="There was some errors with your submission" list={errorList} />
        ) : null}
      </Container>
    );
  }
}

const registerMutation = gql`
  mutation ($username: String!, $password: String!, $email: String!) {
    registerUser(username: $username, password: $password, email: $email){
      ok
      errors {
        path
        message
      }
    }
  }
`;

Register.propTypes = {
  mutate: PropTypes.func.isRequired,
};

export default graphql(registerMutation)(Register);

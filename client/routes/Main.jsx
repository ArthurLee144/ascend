import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const usersQuery = gql`
  {
    users {
      id
      username
    }
  }
`;

const Main = ({ data: { users = [] } }) => users.map(user => <h1 key={user.id}>{user.username}</h1>);

export default graphql(usersQuery)(Main);

import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const allUsersQuery = gql`
  {
    getAllUsers {
      id
      email
    }
  }
`;

const Main = ({ data: { getAllUsers = [] } }) =>
  getAllUsers.map(user =>
    <h1 key={user.id}>{user.email}</h1>);

export default graphql(allUsersQuery)(Main);

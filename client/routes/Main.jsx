import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const allUsersQuery = gql`
  {
    users {
      email
    }
  }
`;

const Main = ({ data: { users = [] } }) =>
  users.map(user =>
    <h1 key={user.id}>{user.email}</h1>);

export default graphql(allUsersQuery)(Main);

// const Main = () => <h1>This is the Main page!</h1>;
//
// export default Main;

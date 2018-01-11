/*
GraphQL type schema RegisterResponse;
ok will either be T/F,
user will return the User,
and error will return an error type (schema)

Mutation - registeruser returns the result of RegisterResponse
If it is 'ok' we will get a user that is not null and the errors will be null
*/

export default `
  type User {
    id: Int!
    username: String!
    firstName: String!
    lastName: String!
    email: String!
    reviews: [Review!]!
    reviewCount: Int!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getUserById(id: Int!): User!
    getAllUsers: [User!]!
  }

  type Mutation {
    registerUser(username: String!, email: String!, password: String!): Boolean!
    updateUser(firstName: String!, lastName: String!, email: String!): User!
    removeUser(id: Int!): Boolean!
  }
`;

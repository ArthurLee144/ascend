export default `
  type User {
    id: Int!
    username: String!
    firstName: String!
    lastName: String!
    email: String!
    reviews: [Review!]!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getUserById(id: Int!): User!
    getAllUsers: [User!]!
  }

  type RegisterResponse {
    ok: Boolean!
    user: User
    errors: [Error!]
  }

  type Mutation {
    registerUser(username: String!, email: String!, password: String!): RegisterResponse!
    updateUser(firstName: String!, lastName: String!, email: String!): User!
    removeUser(id: Int!): Boolean!
  }
`;

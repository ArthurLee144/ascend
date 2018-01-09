// create error schema to handle form validation
// path is what's wrong - [username, email, password]
// the message comes from the sequelize User model

export default `
  type Error {
    path: String!
    message: String
  }
`;

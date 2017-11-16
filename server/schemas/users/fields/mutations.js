const {
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const UserType = require('../type');

const {
  createUser,
  updateUser,
  removeUser,
  registerUser,
} = require('../resolvers');

module.exports.userCreate = {
  type: UserType,
  args: {
    username: {
      name: 'username',
      type: GraphQLString,
    },
    password: {
      name: 'password',
      type: GraphQLString,
    },
    firstName: {
      name: 'first name',
      type: GraphQLString,
    },
    lastName: {
      name: 'last name',
      type: GraphQLString,
    },
    email: {
      name: 'email',
      type: GraphQLString,
    },
  },
  resolve: createUser,
};

module.exports.userUpdate = {
  type: UserType,
  args: {
    firstName: {
      name: 'first name',
      type: GraphQLString,
    },
    lastName: {
      name: 'last name',
      type: GraphQLString,
    },
    email: {
      name: 'email',
      type: GraphQLString,
    },
  },
  resolve: updateUser,
};

module.exports.userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt,
    },
  },
  resolve: removeUser,
};

module.exports.userRegister = {
  type: UserType,
  args: {
    username: {
      name: 'username',
      type: GraphQLString,
    },
    password: {
      name: 'password',
      type: GraphQLString,
    },
    firstName: {
      name: 'first name',
      type: GraphQLString,
    },
    lastName: {
      name: 'last name',
      type: GraphQLString,
    },
    email: {
      name: 'email',
      type: GraphQLString,
    },
  },
  resolve: registerUser,
};

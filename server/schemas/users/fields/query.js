const {
  GraphQLInt,
  GraphQLList,
} = require('graphql');

const UserType = require('../type');

const {
  getUserById,
  getAllUsers,
} = require('../resolvers');

module.exports.users = {
  type: new GraphQLList(UserType),
  resolve: getAllUsers,
};

module.exports.user = {
  type: UserType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: getUserById,
};

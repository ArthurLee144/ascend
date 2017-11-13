const { GraphQLObjectType } = require('graphql');

const user = require('./users/fields/mutations');

const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: '...',
  fields: {
    ...user,
  },
});

module.exports = mutation;

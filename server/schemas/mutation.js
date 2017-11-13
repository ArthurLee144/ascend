const { GraphQLObjectType } = require('graphql');

const user = require('./users/fields/mutations');
const site = require('./sites/fields/mutations');

const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: '...',
  fields: {
    ...user,
    ...site,
  },
});

module.exports = mutation;

const { GraphQLObjectType } = require('graphql');

const users = require('./users/fields/query');

const query = new GraphQLObjectType({
  name: 'query',
  description: '...',
  fields: () => ({
    ...users,
  }),
});

module.exports = query;

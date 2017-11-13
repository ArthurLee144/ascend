const { GraphQLObjectType } = require('graphql');

const users = require('./users/fields/query');
const sites = require('./sites/fields/query');

const query = new GraphQLObjectType({
  name: 'query',
  description: '...',
  fields: () => ({
    ...users,
    ...sites,
  }),
});

module.exports = query;

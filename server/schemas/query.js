const { GraphQLObjectType } = require('graphql');

const users = require('./users/fields/query');
const sites = require('./sites/fields/query');
const reviews = require('./reviews/fields/query');

const query = new GraphQLObjectType({
  name: 'query',
  description: 'Query type',
  fields: () => ({
    ...users,
    ...sites,
    ...reviews,
  }),
});

module.exports = query;

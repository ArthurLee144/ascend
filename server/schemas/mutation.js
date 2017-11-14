const { GraphQLObjectType } = require('graphql');

const user = require('./users/fields/mutations');
const site = require('./sites/fields/mutations');
const review = require('./reviews/fields/mutations');

const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: 'Mutation type',
  fields: {
    ...user,
    ...site,
    ...review,
  },
});

module.exports = mutation;

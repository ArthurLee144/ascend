const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const ReviewType = new GraphQLObjectType({
  name: 'review',
  description: '...',

  fields: () => ({
    id: { type: GraphQLInt },
    rating: { type: GraphQLInt },
    title: { type: GraphQLString },
    text: { type: GraphQLString },
    date: { type: GraphQLString },
  }),
});

module.exports = ReviewType;

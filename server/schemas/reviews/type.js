const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql');
// const UserType = require('../users/type');

const ReviewType = new GraphQLObjectType({
  name: 'review',
  description: 'Review type',

  fields: () => ({
    id: { type: GraphQLInt },
    rating: { type: GraphQLInt },
    title: { type: GraphQLString },
    text: { type: GraphQLString },
    // user: {
    //   type: UserType,
    //   resolve(review) {
    //     return review.getUser();
    //   },
    // },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

module.exports = ReviewType;

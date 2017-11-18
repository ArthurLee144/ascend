const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  // GraphQLList,
} = require('graphql');
// const ReviewType = require('../reviews/type');

const UserType = new GraphQLObjectType({
  name: 'user',
  description: 'User type',

  fields: () => ({
    id: { type: GraphQLInt },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    // reviews: {
    //   type: new GraphQLList(ReviewType),
    //   resolve(user) {
    //     return user.getReviews();
    //   },
    // },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

module.exports = UserType;

const {
  GraphQLInt,
  GraphQLList,
} = require('graphql');

const ReviewType = require('../type');

const {
  getAllReviews,
  getReviewByID,
} = '../resolvers';

module.exports.reviews = {
  type: new GraphQLList(ReviewType),
  resolve: getAllReviews,
};

module.exports.review = {
  type: ReviewType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: getReviewByID,
};

const {
  GraphQLInt,
  GraphQLList,
} = require('graphql');

const ReviewType = require('../type');

const {
  getAllReviews,
  getReviewByID,
} = '../resolvers';

module.exports.sites = {
  type: new GraphQLList(ReviewType),
  resolve: getAllReviews,
};

module.exports.site = {
  type: ReviewType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: getReviewByID,
};

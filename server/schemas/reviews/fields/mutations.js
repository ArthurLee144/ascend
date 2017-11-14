const {
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const ReviewType = require('../type');

const {
  createReview,
  updateReview,
  removeReview,
} = require('../resolvers');

module.exports.reviewCreate = {
  type: ReviewType,
  args: {
    rating: {
      name: 'rating',
      type: GraphQLInt,
    },
    title: {
      name: 'title',
      type: GraphQLString,
    },
    text: {
      name: 'title',
      type: GraphQLString,
    },
  },
  resolve: createReview,
};

module.exports.reviewUpdate = {
  type: ReviewType,
  args: {
    rating: {
      name: 'rating',
      type: GraphQLInt,
    },
    title: {
      name: 'title',
      type: GraphQLString,
    },
    text: {
      name: 'title',
      type: GraphQLString,
    },
  },
  resolve: updateReview,
};

module.exports.reviewRemove = {
  type: ReviewType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt,
    },
  },
  resolve: removeReview,
};

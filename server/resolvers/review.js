import models from '../db/models';

export default {
  Query: {
    getReviewById: (parent, { id }) => models.Review.findOne({ where: { id } }),
    getAllReviews: () => models.Review.findAll({}),
  },

  Mutation: {
    createReview: (parent, {
      rating, title, text,
    }) => models.Review.create({
      rating, title, text,
    }),
    updateReview: (parent, {
      rating, title, text,
    }) => models.Review.update({
      rating, title, text,
    }),
    removeReview: (parent, { id }) => models.Review.destroy({ where: { id } }),
  },
};

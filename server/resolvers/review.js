
export default {
  Query: {
    getReviewById: (parent, { id }, { models }) => models.Review.findOne({ where: { id } }),
    getAllReviews: (parent, args, { models }) => models.Review.findAll({}),
  },

  Mutation: {
    createReview: (parent, {
      rating, title, text,
    }, { user }, { models }) => models.Review.create({
      rating, title, text, userId: user.id,
    }),
    updateReview: (parent, {
      rating, title, text,
    }, { models }) => models.Review.update({
      rating, title, text,
    }),
    removeReview: (parent, { id }, { models }) => models.Review.destroy({ where: { id } }),
  },
};

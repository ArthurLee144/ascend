const models = require('../../db/models');

module.exports.getReviewByID = (parentValue, { id }) => models.Review.findOne({ where: { id } });

module.exports.getAllReviews = () => models.Review.findAll();

module.exports.createReview = (parentValue, {
  rating, title, text,
}) => models.Review.create({
  rating, title, text,
});

module.exports.updateReview = (parentValue, {
  rating, title, text,
}) => models.Review.create({
  rating, title, text,
});

module.exports.removeReview = (parentValue, { id }) => models.Review.destroy({ where: { id } });

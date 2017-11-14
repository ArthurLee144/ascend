const models = require('../../db/models');

module.exports = async function getReviewByID(parentValue, { id }) {
  await models.Review.findOne({ where: { id } });
};

module.exports = async function getAllReviews() {
  await models.Review.findAll();
};

module.exports = async function createReview(parentValue, {
  rating, title, text,
}) {
  await models.Review.create({
    rating,
    title,
    text,
  });
};

module.exports = async function updateReview(parentValue, {
  rating, title, text,
}) {
  await models.Review.create({
    rating,
    title,
    text,
  });
};

module.exports = async function removeReview(parentValue, { id }) {
  await models.Review.destroy({ where: { id } });
};

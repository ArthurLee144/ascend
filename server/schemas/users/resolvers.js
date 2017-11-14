const models = require('../../db/models');

module.exports = async function getUserByID(parentValue, { id }) {
  await models.User.findOne({ where: { id } });
};

module.exports = async function getAllUsers() {
  await models.User.findAll();
};

module.exports = async function createUser(parentValue, { username, password, email }) {
  await models.User.create({
    username,
    password,
    email,
  });
};

module.exports = async function updateUser(parentValue, {
  firstName, lastName, email,
}) {
  await models.User.update({
    firstName,
    lastName,
    email,
  });
};

module.exports = async function removeUser(parentValue, { id }) {
  await models.User.destroy({ where: { id } });
};

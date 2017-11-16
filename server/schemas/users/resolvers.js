const models = require('../../db/models');

module.exports.getUserById = (parentValue, { id }) => models.User.findOne({ where: { id } });

module.exports.getAllUsers = () => models.User.findAll({});

module.exports.createUser = (parentValue, {
  username, password, firstName, lastName, email,
}) => models.User.create({
  username, password, firstName, lastName, email,
});

module.exports.updateUser = (parentValue, {
  firstName, lastName, email,
}) => models.User.update({
  firstName, lastName, email,
});

module.exports.removeUser = (parentValue, { id }) => models.User.destroy({ where: { id } });

// module.exports = {
//   getUserById,
//   getAllUsers,
//   createUser,
//   updateUser,
//   removeUser,
// };

// module.exports = async function getUserByID(parentValue, { id }) {
//   return models.User.findOne({ where: { id } });
// };

// module.exports = async function getAllUsers() {
//   await models.User.findAll();
// };

// module.exports = async function createUser(parentValue, {
//   username, password, firstName, lastName, email,
// }) {
//   await models.User.create({
//     username,
//     password,
//     firstName,
//     lastName,
//     email,
//   });
// };

// module.exports = async function updateUser(parentValue, {
//   firstName, lastName, email,
// }) {
//   await models.User.update({
//     firstName,
//     lastName,
//     email,
//   });
// };

// module.exports = async function removeUser(parentValue, { id }) {
//   await models.User.destroy({ where: { id } });
// };

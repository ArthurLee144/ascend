const models = require('../../db/models');
const bcrypt = require('bcrypt');

// Get User by ID
module.exports.getUserById = (parentValue, { id }) => models.User.findOne({ where: { id } });

// Get all Users
module.exports.getAllUsers = () => models.User.findAll({});

// Create User
module.exports.registerUser = (parentValue, {
  username, email, password,
}) => bcrypt.hash(password, 12).then(hash => models.User.create({
  username, email, password: hash,
}));

// Create User (old version)
module.exports.createUser = (parentValue, {
  username, password, firstName, lastName, email,
}) => models.User.create({
  username, password, firstName, lastName, email,
});

// Update User
module.exports.updateUser = (parentValue, {
  firstName, lastName, email,
}) => models.User.update({
  firstName, lastName, email,
});

// Remove User
module.exports.removeUser = (parentValue, { id }) => models.User.destroy({ where: { id } });

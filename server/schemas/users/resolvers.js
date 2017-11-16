const models = require('../../db/models');
const bcrypt = require('bcrypt');

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

module.exports.registerUser = (parentValue, {
  username, email, password,
}) => {
  bcrypt.hash(password, 12).then(hash => models.User.create({
    username, email, password: hash,
  }));
};

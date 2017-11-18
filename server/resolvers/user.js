import models from '../db/models';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;

export default {
  Query: {
    getUserById: (parent, { id }) => models.User.findOne({ where: { id } }),
    getAllUsers: () => models.User.findAll({}),
  },

  Mutation: {
    registerUser: (parent, {
      username, email, password,
    }) => bcrypt.hash(password, SALT_ROUNDS).then(hash => models.User.create({
      username, email, password: hash,
    })),
    updateUser: (parent, {
      firstName, lastName, email,
    }) => models.User.update({
      firstName, lastName, email,
    }),
    removeUser: (parent, { id }) => models.User.destroy({ where: { id } }),
  },
};

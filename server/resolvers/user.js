import bcrypt from 'bcrypt';
import _ from 'lodash';

const SALT_ROUNDS = 12;

// const formatErrors = (err, models) => {
//   if (err instanceof models.sequelize.ValidationError) {
//     return err.errors.map(x => _.pick(x, ['path', 'message']));
//   }
//   return [{ path: 'name', message: 'something went wrong' }];
// };

export default {
  // query for user(s) by id from database
  Query: {
    getUserById: (parent, { id }, { models }) => models.User.findOne({ where: { id } }),
    getAllUsers: (parent, args, { models }) => models.User.findAll({}),
  },

  // post, update, or remove user from database
  Mutation: {
    registerUser: async (parent, {
      username, email, password,
    }, { models }) => {
      try {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        await models.User.create({ username, email, password: hashedPassword });
        return true;
      } catch (err) {
        return false;
      }
    },
    updateUser: (parent, {
      firstName, lastName, email,
    }, { models }) => models.User.update({
      firstName, lastName, email,
    }),
    removeUser: (parent, { id }, { models }) => models.User.destroy({ where: { id } }),
  },
};

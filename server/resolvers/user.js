import bcrypt from 'bcrypt';
import _ from 'lodash';

const SALT_ROUNDS = 12;

const formatErrors = (err, models) => {
  if (err instanceof models.sequelize.ValidationError) {
    return err.errors.map(x => _.pick(x, ['path', 'message']));
  }
  return [{ path: 'name', message: 'something went wrong' }];
};

export default {
  Query: {
    getUserById: (parent, { id }, { models }) => models.User.findOne({ where: { id } }),
    getAllUsers: (parent, args, { models }) => models.User.findAll({}),
  },

  Mutation: {
    registerUser: async (parent, {
      username, email, password,
    }, { models }) => {
      try {
        if (password.length < 8 || password.length > 25) {
          return {
            ok: false,
            errors: [
              {
                path: 'password',
                message: 'The password needs to be between 8 and 25 characters long',
              },
            ],
          };
        }
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        const user = await models.User.create({ username, email, password: hashedPassword });
        return {
          ok: true,
          user,
          errors: null,
        };
      } catch (err) {
        return {
          ok: false,
          errors: formatErrors(err, models),
        };
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

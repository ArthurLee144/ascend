export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'The username can only contain letters and numbers.',
        },
        len: {
          args: [6, 25],
          msg: 'The username needs to be between 6 and 25 characters long.',
        },
      },
    },
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email',
        },
      },
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  });
  User.associate = (models) => {
    User.hasMany(models.Review, {
      foreignKey: 'userId',
    });
  };
  return User;
};

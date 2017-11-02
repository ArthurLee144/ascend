const Sequelize = require('sequelize');
const _ = require('lodash');
const Faker = require('faker');

const connection = new Sequelize('ascend-db', 'root', 'root',
  {
    dialect: 'mysql'
  }
);

connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const User = connection.define('user', {
  facebook_id: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  city: {
    type: Sequelize.STRING,
    allowNull: true
  },
  state: {
    type: Sequelize.STRING,
    allowNull: true
  },
  avatar: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

// const Review = connection.define('review', {
//   title: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   content: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

//Relationships
// User.hasMany(Review);
// Review.belongsTo(User);

connection.sync({force: true}).then(() => {
  _.times(5, () => {
    return User.create({
      facebook_id: Faker.random.number({
          'min': 1000000000000000,
          'max': 9999999999999999
      }),
      username: Faker.internet.userName(),
      password: Faker.internet.password(),
      first_name: Faker.name.firstName(),
      last_name: Faker.name.lastName(),
      email: Faker.internet.email(),
      city: Faker.address.city(),
      state: Faker.address.streetAddress(),
      avatar: Faker.internet.avatar()
    });
  });
});

module.exports = connection;

const Sequelize = require('sequelize');
const _ = require('lodash');
const Faker = require('faker');

const db = new Sequelize('ascend-db', 'root', 'root',
  {
    dialect: 'mysql'
  }
);

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const User = db.define('user', {
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
    unique: true,
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

const Review = db.define('review', {
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

const Site = db.define('site', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  zip_code: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  review_count: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

//Relationships
User.hasMany(Review);
Review.belongsTo(User);
Site.hasMany(Review);
Review.belongsTo(Site);

// is this necessary?
// User.hasMany(Site);

db.sync({force: true}).then(() => {
  _.times(10, () => {
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
  }).then(user => {
      return Site.create({
        name: Faker.address.streetName(),
        address: Faker.address.streetAddress(),
        city: Faker.address.city(),
        state: Faker.address.stateAbbr(),
        zip_code: Faker.address.zipCode(),
        review_count: Faker.random.number({
          'min': 0,
          'max': 99999
        })
      }).then(site => {
        const userId = user.dataValues.id;
        const siteId = site.dataValues.id;
        _.times(3, () => {
          return user.createReview({
            rating: Faker.random.number({
              'min': 0,
              'max': 5,
            }),
            title: Faker.lorem.words(),
            text: Faker.lorem.paragraphs(),
            userId: userId,
            siteId: siteId
          });
        })
      });
    });
  });
});

module.exports = db;

// _.times(10, () => {
//   return Site.create({
//     name: Faker.address.streetName(),
//     address: Faker.address.streetAddress(),
//     city: Faker.address.city(),
//     state: Faker.address.stateAbbr(),
//     zip_code: Faker.address.zipCode(),
//     review_count: Faker.random.number({
//       'min': 0,
//       'max': 99999
//     })
//   });
// });

// _.times(15, () => {
//   return Review.create({
//     rating: Faker.random.number({
//       'min': 0,
//       'max': 5,
//     }),
//     title: Faker.lorem.words(),
//     text: Faker.lorem.paragraphs()
//   }, {
//     include: [User, Site]
//   });
// });

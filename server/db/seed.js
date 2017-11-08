const Sequelize = require('sequelize');
const _ = require('lodash');
const Faker = require('faker');

const db = new Sequelize(
  'ascend-db', 'root', 'root',
  {
    dialect: 'mysql',
  },
);

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Models
const User = require('./models/User').User(db, Sequelize);
const Review = require('./models/Review').Review(db, Sequelize);
const Site = require('./models/Site').Site(db, Sequelize);

// Relationships
User.hasMany(Review);
Review.belongsTo(User);
Site.hasMany(Review);
Review.belongsTo(Site);

db.sync({ force: true }).then(() => {
  _.times(10, () => User.create({
    facebook_id: Faker.random.number({
      min: 1000000000000000,
      max: 9999999999999999,
    }),
    username: Faker.internet.userName(),
    password: Faker.internet.password(),
    first_name: Faker.name.firstName(),
    last_name: Faker.name.lastName(),
    email: Faker.internet.email(),
    city: Faker.address.city(),
    state: Faker.address.streetAddress(),
    avatar: Faker.internet.avatar(),
  }).then(user => Site.create({
    name: Faker.address.streetName(),
    address: Faker.address.streetAddress(),
    city: Faker.address.city(),
    state: Faker.address.stateAbbr(),
    zip_code: Faker.address.zipCode(),
    review_count: Faker.random.number({
      min: 0,
      max: 99999,
    }),
  }).then((site) => {
    const userId = user.dataValues.id;
    const siteId = site.dataValues.id;
    _.times(3, () => user.createReview({
      rating: Faker.random.number({
        min: 0,
        max: 5,
      }),
      title: Faker.lorem.words(),
      text: Faker.lorem.paragraphs(),
      userId,
      siteId,
    }));
  })));
});

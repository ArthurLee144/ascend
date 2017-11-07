const Sequelize = require('sequelize');
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

//Models
const User = require('./models/User').User(db, Sequelize);
const Review = require('./models/Review').Review(db, Sequelize);
const Site = require('./models/Site').Site(db, Sequelize);

//Relationships
User.hasMany(Review);
Review.belongsTo(User);
Site.hasMany(Review);
Review.belongsTo(Site);

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

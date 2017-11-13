require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql',
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.log('INFO - Database connected.');
  })
  .catch((err) => {
    console.error('ERROR - Unable to connect to the database', err);
  });

sequelize.sync({ force: true }).then(() => {
});

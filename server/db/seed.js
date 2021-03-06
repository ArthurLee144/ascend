require('dotenv').config();
import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql',
  },
);

console.info('SETUP - Connecting database...');

sequelize
  .authenticate()
  .then(() => {
    console.log('INFO - Database connected.');
  })
  .catch((err) => {
    console.error('ERROR - Unable to connect to the database', err);
  });

sequelize.sync({ force: true });

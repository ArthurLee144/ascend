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

const db = {
  User: sequelize.import('./User'),
  Review: sequelize.import('./Review'),
  Site: sequelize.import('./Site'),
};

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

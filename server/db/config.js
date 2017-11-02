const Sequelize = require('sequelize');
const connection = new Sequelize('ascend-db', 'root', 'root', {
  dialect: 'mysql'
});

connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

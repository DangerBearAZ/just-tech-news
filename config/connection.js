//import the Sequelize consructor from the library 
const Sequelize = require('sequelize'); 

require('dotenv').config();

//create connection to our data base pass in personal MySQL information for username and password )
// const sequelize = new Sequelize('just_tech_news_db', 'root', 'Root', {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
// });
// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;


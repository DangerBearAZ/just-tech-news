
// this is blanked out beacuse I added herouku but still wanted to save how to do for future me
//import the Sequelize consructor from the library 
//const Sequelize = require('sequelize'); 
// how to hid useer and pass add the process.env befre what needs to hide dont  ' ' it
//require('dotenv').config();

const Sequelize = require('sequelize');

require('dotenv').config();

//create connection to our data base pass in personal MySQL information for username and password )
// const sequelize = new Sequelize(process.env.tech_news_db, process.env.root, process.env.Root) {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
// });



// new connection file below that works with heroku 
let sequelize;

if (process.env.JAWSDB_URL){
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
 sequelize = new Sequelize(process.env.tech_news_db, process.env.root, process.env.Root, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
 });
}

module.exports = sequelize; 
const Sequelize = require('sequelize');
const sequelize = new Sequelize("testMission", "postgres", "Marmel985", {
  dialect: "postgres",
  host:"localhost"
});

module.exports = sequelize;
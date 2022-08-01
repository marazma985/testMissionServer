const Sequelize = require('sequelize');
const sequelize = new Sequelize("d85bro562128pq", "dpcwwrizyisnii", "b8d980a351a7f51b0ff62f82e88c9d05cb8e48983d200dc84b97562f33ca29b8", {
  dialect: "postgres",
  host:"ec2-18-214-35-70.compute-1.amazonaws.com"
});


module.exports = sequelize;
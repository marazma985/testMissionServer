'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contacts extends Model {
    
    


    static associate(models) {
      
    }
  }
  Contacts.init({
    name: DataTypes.STRING,
    number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Contacts',
  });
  return Contacts;
};

const sequelize = require('../bd.js');
const Sequelize = require('sequelize');
const bd = require('../models');
const Contacts = bd.Contacts;
/*
const Contacts = sequelize.define("contacts", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  number: {
    type: Sequelize.STRING,
    allowNull: false
  }
},{});
*/

class Controller {

  async getTest(req, res) {
    try {
        res.json(123);
    }
    catch (e) {
      console.log(e)
    }
  }
  async getContacts(req, res) {
    try {
      Contacts.findAll({
        order:[['id','desc']]
      }).then(users => {
        res.json(users);
      }).catch(err => res.json(err));
    }
    catch (e) {
      console.log(e)
    }
  }
  async updateContacts(req, res) {
    try {
      const id = req.params.id;
      const name = req.body.name;
      const number = req.body.number;

      Contacts.update({ 
        number: number, 
        name:name
      },{
        where: {
          id: id
        }
      }).then((response) => {
        res.json(response);
      });
    } catch (e) {
      res.json(e)
    }
  }

  async addContacts(req, res) {
    try {
      const name = req.params.name;
      const number = req.params.number;
      Contacts.create({
        name: name,
        number: number
      }).then(res => {
        res.json(res);
      }).catch(err => console.log(err));
    } catch (e) {
      res.json(e)
    }
  }
  async deleteContact(req, res) {
    try {
      const id = req.params.id;
      Contacts.destroy({
        where: {
          id: id
        }
      }).then(response => res.json(response))
    } catch (e) {
      res.json(e)
    }
  }
  async sherchContacts(req, res) {
    try {
      Contacts.findAll({ where: { name: "Tom" }, raw: true })
        .then(contacts => {
          res.json(contacts);
        }).catch(err => res.error(err));
    } catch (e) {
      res.json(e)
    }
  }

}
module.exports = new Controller();

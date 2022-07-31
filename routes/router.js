const express = require('express');
const controller=require('../controller/controller.js');
const router = express.Router();

router.get('/contacts', controller.getContacts);
router.post('/contact/:name/:number', controller.addContacts);
router.put('/contact/:id', controller.updateContacts);
router.delete('/contact/:id', controller.deleteContact);


module.exports = router;
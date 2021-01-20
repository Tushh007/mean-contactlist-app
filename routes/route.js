const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

// create data
router.post('/contact', (req, res, next) => {
  let newContact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
  });

  newContact.save((err, data) => {
    if (err) res.json({ msg: 'Failed to add contact' });
    else res.json({ msg: 'Contact added Successfully' });
  });
});

// retrive data
router.get('/contacts', (req, res, next) =>
  Contact.find((err, data) => res.json(data))
);

// update data

// delete data
router.delete('/contact/:id', (req, res, next) => {
  Contact.remove({ _id: req.params.id }, (err, data) => {
    if (err) res.json(err);
    else res.json(data);
  });
});

module.exports = router;

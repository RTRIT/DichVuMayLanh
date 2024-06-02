const express = require('express');
const router = express.Router();
const home = require('../app/controller/home');
const path = require('path'); // Import the path module


//home page
router.get('/form', home.form);
router.get('/:serviceDetail', home.serviceDetail);
router.get('/', home.show);








module.exports = router;
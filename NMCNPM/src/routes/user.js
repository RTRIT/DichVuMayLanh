const express = require('express');
const router = express.Router();
const login = require('../app/controller/user/login')
const register = require('../app/controller/user/register')
const path = require('path'); // Import the path module


//Login page
router.get('/login', login.show);
router.post('/login', login.login);

//Register page
router.get('/register', register.show);

// router.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, '../', 'resource/views', 'login.html'));
//     // res.render('login'); // {layout: false}, second parameter 
// });

module.exports = router;
const express = require('express');
const router = express.Router();
const admin = require('../app/controller/admin/magUser')

router.get('/mag-user', admin.show);

module.exports = router
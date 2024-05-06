const express = require('express');
const route = express.Router();
const path = require('path');


/** @GET_METHODS__________________________ */
route.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../..', 'views', 'login_NBT.html'));
});

route.get('/serviceList', (req, res) => {
    res.sendFile(path.join(__dirname, '../..', 'views', 'serviceList.html'));
})





module.exports = route;
const express = require('express');
const route = express.Router();
const path = require('path');


/** @GET_METHODS__________________________ */
route.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../..', 'views', 'login.html'));
});
route.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../..', 'views', 'index.html'));
});
route.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../..', 'views', 'register.html'));
});
route.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../..', 'views', 'Admin.html'));
});
route.get('/Form', (req, res) => {
    res.sendFile(path.join(__dirname, '../..', 'views', 'Form.html'));
});

route.get('/serviceList', (req, res) => {
    res.sendFile(path.join(__dirname, '../..', 'views', 'serviceList.html'));
})
route.get('/Form', (req, res) => {
    res.sendFile(path.join(__dirname, '../..', 'views', 'Form.html'));
});

route.get('/Product', (req, res) => {
    res.sendFile(path.join(__dirname, '../..', 'views', 'Product.html'));
});
route.get('/serviceDetail', (req, res) => {
    res.sendFile(path.join(__dirname, '../..', 'views', 'serviceDetail.html'));
})

route.get('/HoaDon', (req, res) => {
    res.sendFile(path.join(__dirname, '../..', 'views', 'HoaDon.html'));
})



module.exports = route;
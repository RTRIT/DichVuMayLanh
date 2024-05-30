// const express = require('express');
// const router = express.Router();
const path = require('path'); // Import the path module, 
// Khi dùng res.sendFile thì phải pạth

class registerController{
    show(req,res,next){
        res.sendFile(path.join(__dirname, '../../../', 'resource/views', 'register.html'));
    }
}

module.exports = new registerController;
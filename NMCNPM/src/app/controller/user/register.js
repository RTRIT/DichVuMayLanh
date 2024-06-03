

// const express = require('express');
// const router = express.Router();
const path = require('path'); // Import the path module, 
// Khi dùng res.sendFile thì phải pạth

class registerController{
    async show(req,res,next){
        // res.sendFile(path.join(__dirname, '../../../', 'resource/views', 'register.html'));
        // const api = 'https://mymusicpupu.000webhostapp.com/server2/getListDV.php';
        try {
            // const response = await fetch('https://mymusicpupu.000webhostapp.com/server2/getListDV.php');
            // const data = await response.json();
            // res.json(data);
            res.render('users/register', {layout:false});
          } catch (error) {
            res.status(500).json({ error: 'Failed to fetch data' });
          }
         
    }
}

module.exports = new registerController;



// const express = require('express');
// const router = express.Router();
const path = require('path'); // Import the path module, 
// Khi dùng res.sendFile thì phải pạth

class registerController{
    async show(req,res,next){
        try {
            res.render('users/register', {layout:false});
          } catch (error) {
            res.status(500).json({ error: 'Failed to fetch data' });
          }
         
    }
    async register(req,res,next){
      try {

        res.json(req.body);
        fetch('https://mymusicpupu.000webhostapp.com/server2/KhanhHang/registerUser.php',{
          method: 'POST',
          body: JSON.stringify(req.body),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            if(!response.ok){
              throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
          }) //response trả về một promise
          .then(data => {
            res.redirect('/login');
          })
          
        } catch (error) {
          res.status(500).json({ error: 'Failed to register user' });
        }
    }
}

module.exports = new registerController;

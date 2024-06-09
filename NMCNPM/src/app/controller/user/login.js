

// const express = require('express');
// const router = express.Router();
const path = require('path'); // Import the path module, 
// Khi dùng res.sendFile thì phải pạth

class loginController{
    async show(req,res,next){
        // res.sendFile(path.join(__dirname, '../../../', 'resource/views', 'login.html'));
        // const api = 'https://mymusicpupu.000webhostapp.com/server2/getListDV.php';
        try {
            // const response = await fetch('https://mymusicpupu.000webhostapp.com/server2/getListDV.php');
            // const data = await response.json();
            // res.json(data);
            res.render('users/login', {layout:false});
          } catch (error) {
            res.status(500).json({ error: 'Failed to fetch data' });
          }
         
    }
    async login(req,res,next){
      try {
        // Destructing assignment
        // Get value from login Form
        const {username, password} = req.body;
        var errors = [];
        var flag = false;

   
  
        //Send login Api
        fetch('https://mymusicpupu.000webhostapp.com/server2/login.php',{
          method: 'POST',
          body:  JSON.stringify({username, password}),
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
          
          res.cookie('token', data.token);
          res.cookie('id_user', data.id_user);
          res.cookie('id_role', data.id_role);
          res.redirect('/');
        })
       
      } catch (error) {
        // Handle other errors that might occur during the fetch
        console.error('Error during fetch:', error);
        res.status(500).send('Internal Server Error');
      }
    }
}

module.exports = new loginController;




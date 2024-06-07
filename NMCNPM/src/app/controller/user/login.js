

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
        const {username, password} = req.body

        // console.log(usrnane)
        const response = await fetch('https://161b53d2-6d44-4835-b554-293a71fa43a8.mock.pstmn.io/getUserID',{
          method: 'POST',
          body: JSON.stringify({username, password}),
          headers: {
            'Content-Type': 'application/json'
          }
        });

           // Check if the fetch is successful (status code 200)
        if (response.ok) {
          const data = await response.json();
          // Assuming the response contains an object with user_id and user_name properties
          res.cookie('user_id', data.Id);
          res.cookie('user_name', data.Tenkh); 
          res.redirect('/')
        } else {
          // Handle the error if fetch is not successful
          // For example, if response status is not OK (200)
          console.error('Fetch was not successful:', response.status);
          res.status(response.status).send('Fetch was not successful');
        }
      } catch (error) {
        // Handle other errors that might occur during the fetch
        console.error('Error during fetch:', error);
        res.status(500).send('Internal Server Error');
      }
    }
}

module.exports = new loginController;




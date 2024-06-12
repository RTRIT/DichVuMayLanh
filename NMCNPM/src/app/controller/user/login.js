

// const express = require('express');
// const router = express.Router();
const path = require('path'); // Import the path module, 
// Khi dùng res.sendFile thì phải pạth

class loginController {
  async show(req, res, next) {
    // res.sendFile(path.join(__dirname, '../../../', 'resource/views', 'login.html'));
    // const api = 'https://mymusicpupu.000webhostapp.com/server2/getListDV.php';
    try {
      // const response = await fetch('https://mymusicpupu.000webhostapp.com/server2/getListDV.php');
      // const data = await response.json();
      // res.json(data);
      res.render('users/login', { layout: false });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }

  }
  async login(req, res, next) {
    try {
        // Get value from login Form
        const { username, password } = req.body;
        const body = {
            "username": username,
            "password": password
        };

        // Send login API
        const response = await fetch('https://mymusicpupu.000webhostapp.com/server2/login.php', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();

        if (data.message === "Login failed: Invalid password") {
            const errors = [data.message];
            const flag = true;
            res.render('users/login', {errors, flag, layout:false});
        } else {
            res.cookie('token', data.token);
            res.cookie('id_user', data.id_user);
            res.cookie('id_role', data.id_role);

            if (Number(data.id_role) === 2) {
                res.redirect('/');
            } else if (Number(data.id_role) === 1) {
                res.redirect('/admin');
            } else {
                // Handle other user roles
                res.redirect('/qly'); // Example: redirect to a default page
            }
        }
    } catch (error) {
        console.error('Error during fetch:', error);
        res.status(500).send('Internal Server Error');
    }
}


  async logout(req, res, next) {
    try {
      res.clearCookie('token');
      res.clearCookie('id_user');
      res.clearCookie('id_role');
      res.redirect('/user/login'); // Redirect to login page or another appropriate page
    } catch (error) {
      console.error('Error during logout:', error);
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = new loginController;




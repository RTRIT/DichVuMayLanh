

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
    async register(req, res, next) {
      try {
        let flag = false;
        let errors = [];
        
        const body1 = {
          "username": req.body.username,
          "password": req.body.password
        };
    
        const response1 = await fetch('https://mymusicpupu.000webhostapp.com/server2/KhanhHang/registerUser.php', {
          method: "POST",
          body: JSON.stringify(body1),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        if (!response1.ok) {
          throw new Error('Register was not ok: ' + response1.statusText);
        }
    
        const data = await response1.json();
    
        if (typeof data.message === 'string') {
          flag = true;
          errors.push(data.message);
          return res.render('users/register', { errors, flag, layout: false });
        }
    
        const response2 = await fetch('https://mymusicpupu.000webhostapp.com/server2/KhanhHang/addUser.php', {
          method: "POST",
          body: JSON.stringify({
            "Makh": data.message,
            "Tenkh": req.body.Tenkh,
            "Ngaysinh": req.body.Ngaysinh,
            "Gioitinh": req.body.Gioitinh,
            "Diachi": req.body.Diachi,
            "Sodienthoai": req.body.Sodienthoai,
            "CMND": req.body.CMND
          })
        });
    
        if (!response2.ok) {
          throw new Error('Register was not ok: ' + response2.statusText);
        }
    
        const data2 = await response2.json();
        console.log("success");
        res.json(data2);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to register user' });
      }
    }
    
}

module.exports = new registerController;



// const express = require('express');
// const router = express.Router();
const path = require('path'); // Import the path module, 
// Khi dùng res.sendFile thì phải pạth

class registerController{
    async show(req,res,next){
        try {
            res.render('Tuan11/registerNV', {layout:false});
          } catch (error) {
            res.status(500).json({ error: 'Failed to fetch data' });
          }
         
    }
    async register(req, res, next) {
      try {
        let flag = false;
        let errors = [];
        // res.json(req.body);

        
        const body1 = {
          "username": req.body.username,
          "password": req.body.password
        };
        const token = req.cookies.token;
    
        const response1 = await fetch('https://mymusicpupu.000webhostapp.com/server2/NhanVien/registerNV.php', {
          method: "POST",
          body: JSON.stringify(body1),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
    
        if (!response1.ok) {
          throw new Error('Register was not ok: ' + response1.statusText);
        }
    
        const data = await response1.json();
    
        if (typeof data.message === 'string') {
          flag = true;
          errors.push(data.message);
          return res.render('Tuan11/registerNV', { errors, flag, layout: false });
        }
    
        const response2 = await fetch('https://mymusicpupu.000webhostapp.com/server2/NhanVien/editInfoNv.php', {
          method: "POST",
          body: JSON.stringify({
            "Manv": data.message,
            "Hoten": req.body.first,
            "Ngaysinh": req.body.NgaySinh,
            "Gioitinh": req.body.gender,
            "DiaChi": req.body.address,
            "Sodienthoai": req.body.mobile,
            "Luong": req.body.cccd
          }),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
    
        if (!response2.ok) {
          throw new Error('Register was not ok: ' + response2.statusText);
        }
    
        const data2 = await response2.json();
        console.log("success");
        res.redirect('/qly/QlyNV')
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to register user' });
      }
    }
    
}

module.exports = new registerController;

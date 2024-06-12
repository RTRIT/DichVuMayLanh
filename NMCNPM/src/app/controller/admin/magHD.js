const { response } = require('express');
const path = require('path'); // Import the path module, 


class magHDController{
    async show(req, res, next) {
        try {
            
            // Render the view with the fetched data
            res.render('admin/magHD/show', { data, layout: 'admin/main' });
    
        } catch (error) {
            console.error('Error during fetch:', error);
            res.status(500).send('Internal Server Error');
        }
    }
    

    async formHDByMaPYC(req,res,next){
        try {
            const paramValue = Number(req.params.id);
            if (isNaN(paramValue)) {
                throw new Error('Invalid parameter');
            }
            const token = "YToyOntzOjc6InVzZXJfaWQiO3M6MToiMSI7czo5OiJ1c2VyX3JvbGUiO3M6OToiTmhhbiBWaWVuIjt9.MTc4ZmUwNWViN2Q4MWI2YzI4NjFhZGYxYjBiZWQyMGFhNDA4NTY3YmJiODY3YTViYzliMWNmZDliYzg4MjFkYg==.MzQzNjEyODEzMA==";
            const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/PhieuYC/getPYCByMaPYC.php?MaPYC=${paramValue}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error('Show Hoa Don not working ' + response.statusText);
            }
            const data = await response.json(); //data of PYC

            //Fetch2 user info by Makh
            const response2= await fetch(`https://mymusicpupu.000webhostapp.com/server2/KhanhHang/getInfoKH.php?Makh=${data.Makh}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response2.ok) {
                throw new Error('Nested fetch not working ' + nestedResponse.statusText);
            }
            const data2 = await response2.json(); // data of khach hang by Makh
            res.render('admin/magHD/create', {data, data2, layout:'admin/main'})
            
            

        } catch (error) {
            console.error('Error:', error.message);
            // Handle the error appropriately, e.g., res.status(500).send('Server Error');
        }
        
        

    }
    async createHD(req,res,next){
        try {
            // Destructure the necessary fields from req.body
            const { Makh, NgayLap, hiddenPaymentMethod, services } = req.body;
        
            // Log statements for debugging (can be removed or commented out in production)
            //console.log({ tenKhachHang }); // { tenKhachHang: 'nguyen van Tuan' }
            //console.log({ tenKhachHang, ngaySinh }); // { tenKhachHang: 'nguyen van Tuan', ngaySinh: '2009-01-16' }
            //console.log(tenKhachHang); // nguyen van Tuan
            //console.log({ Makh, tenKhachHang, ngaySinh, NgayLap, diaChi, soDienThoai, cccd, MaPP, hiddenPaymentMethod, services });
            //console.log( { Makh, NgayLap, hiddenPaymentMethod, services } );

            
            // Destructure the necessary fields from req.cookies
            // const { id_user, token} = req.cookies;
                    // Check if required cookies are present
            // if (!id_user || !token) {
            //     res.status(400).json({ error: 'User authentication required' });
            //     return;
            // }

            // Parse services JSON string
            let parsedServices;
            
            try {
                parsedServices = JSON.parse(services);
            } catch (parseError) {
                console.error('Error parsing services:', parseError);
                res.status(400).json({ error: 'Invalid services format' });
                return;
            }

            // Construct the body object for the POST request
            const body = {
                NgayLap,
                "MaPP":hiddenPaymentMethod,
                Makh,
                "Manv": req.cookies.id_user,
                "Details": parsedServices
            };
      
        
            // Log the body for debugging
            // console.log(req.cookies.token) 
            // console.log({body}) 
            // console.log(JSON.stringify({body}));
        
            // Make the POST request to the external API
            const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/HoaDon/createHD.php`, {
                method: 'POST',
                body: JSON.stringify(body), 
                headers: {
                    'Authorization': `Bearer ${req.cookies.token}`,
                }
            });
        
            // Check the response status and handle it accordingly
            if (!response.ok) {
                // Handle error response
                const errorData = await response.json();
                console.error('Error:', errorData);
                // You might want to send a response back to the client here
                res.status(response.status).json({ error: 'Failed to create invoice', details: errorData });
                return;
            }
        
            // Handle success response
            const responseData = await response.json();
            console.log('Success:', responseData);
            // res.json(responseData);
            res.redirect('/admin/QlyPYC');
        
        } catch (error) {
            // Handle any unexpected errors
            console.error('Unexpected Error:', error);
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
        
    }
    async showList(req,res,next){
        try {
            res.render('admin/magHD', {layout:'admin/main'})
        } catch (error) {
            
        }
        

    }
    async detailHD(req,res,next){
        try {
            res.render('admin/magHD/detail', {layout:'admin/main'})
        } catch (error) {
            
        }
        const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/PhieuYC/getPYCByMaPYC.php?MaPYC=${paramValue}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Show Hoa Don not working ' + response.statusText);
        }
        const data = await response.json(); //data of PYC

        

    }
}


module.exports = new magHDController;
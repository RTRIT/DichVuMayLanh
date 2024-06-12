const { response } = require('express');
const path = require('path'); // Import the path module, 


class magPYCController{

    //Show list PYC mặc định là mtt=2
    async show(req, res, next) {
        try {
            // Lấy giá trị MTT từ request body
            const MTT = Number(req.body.MTT);
            const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/PhieuYC/getListPYCbyMaTT.php?MaTT=${MTT}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${req.cookies.token}`
                }
            });
    
            // Kiểm tra nếu request thành công (status 200)
            if (!response.ok) {
                throw new Error('Không thể lấy dữ liệu từ API');
            }
            const data = await response.json();
            res.render('admin/magPYC/show', {data, layout:'admin/main'})
            //res.json(data); // Gửi JSON response về client
        } catch (error) {
            // Xử lý các lỗi
            console.error(error);
            res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
        }
    }

    async showByMaTT(req, res, next) {
        try {
            // Lấy giá trị MTT từ request body
            const MTT = Number(req.params.maTT);
            const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/PhieuYC/getListPYCbyMaTT.php?MaTT=${MTT}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${req.cookies.token}`
                }
            });
    
            // Kiểm tra nếu request thành công (status 200)
            if (!response.ok) {
                throw new Error('Không thể lấy dữ liệu từ API');
            }
            const data = await response.json();
            res.render('admin/magPYC/show', {data, layout:'admin/main'})
            //res.json(data); // Gửi JSON response về client
        } catch (error) {
            // Xử lý các lỗi
            console.error(error);
            res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
        }
    }

    //edit pop up show
    async editShow(req, res, next) {
        // res.json("cancel222")
        try {
            // res.json("success")
            const paramValue = Number(req.params.id);
            if (isNaN(paramValue)) {
                throw new Error('Invalid parameter');
            }
            //fetch lấy chi tiết phiếu yêu cầu
            const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/PhieuYC/getPYCByMaPYC.php?MaPYC=${paramValue}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${req.cookies.token}`
                }
            });
            if (!response.ok) {
                throw new Error('Show Hoa Don not working ' + response.statusText);
            }
            const data = await response.json(); //data of PYC

            // res.json(data)
            
            

            //Fetch2 getListDV
            const response2= await fetch(`https://mymusicpupu.000webhostapp.com/server2/DichVu/getListDV.php`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${req.cookies.token}`
                }
            });
            if (!response2.ok) {
                throw new Error('Nested fetch not working ' + nestedResponse.statusText);
            }
            const data2 = await response2.json(); // List DV
            res.render('admin/magPYC/detail', {data ,data2, layout:'admin/main'})
        } catch (error) {
            console.error('Error:', error.message);
            // Handle the error appropriately, e.g., res.status(500).send('Server Error');
        }
    }
    


    //editing
    async edit(req, res, next) {
        try {
            // console.log(req.body);
    
            // Format date
           
            const body = {
                "MaPYC":req.body.MaPYC,
                "Manv": req.cookies.id_user,
                "Diachi": req.body.Diachi,
                "NgayHen": req.body.NgayHen,
                "GhiChu": req.body.GhiChu,
                "CTPYC": JSON.parse(req.body.Details)
            };

            // console.log(JSON.stringify(body))

            const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/PhieuYC/editPYC.php`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Authorization': `Bearer ${req.cookies.token}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to edit PYC');
            }
            const data = await response.json();
            // res.json(data)
            res.render('admin/magPYC/show', { data, layout: 'admin/main' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    
    async accept(req, res, next) {
        try {
            // Accept from với MaPYC
            console.log(req.params.id)
            const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/PhieuYC/chapNhanPYC.php?MaPYC=${req.params.id}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${req.cookies.token}`
                }
            });
            if (!response.ok) {
                throw new Error('Không thể accept');
            }

            const data = await response.json();
            // console.log(data)
            if(data.message=="Request form update successfully"){
                res.render('admin/magPYC/show', {layout:'admin/main'})
            }
            // res.render('admin/magPYC/show', {data, layout:'admin/main'})
            //res.json(data); // Gửi JSON response về client
        } catch (error) {
            // Xử lý các lỗi
            console.error(error);
            res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
        }
    }
    
    
    async cancel(req, res, next) {
        try {
            const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/PhieuYC/huyPYC.php?MaPYC=${req.params.id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${req.cookies.token}`
                }
            });
    
            if (!response.ok) {
                throw new Error('Failed to cancel PYC');
            }
    
            const data = await response.json();
            res.render('admin/magPYC/show', { data, layout: 'admin/main' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    
    

    
}


module.exports = new magPYCController;
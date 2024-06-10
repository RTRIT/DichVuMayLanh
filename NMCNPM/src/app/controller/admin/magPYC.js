const { response } = require('express');
const path = require('path'); // Import the path module, 


class magPYCController{
    async show(req, res, next) {
        try {
            // Lấy giá trị MTT từ request body
            const MTT = Number(req.body.MTT);
            const token = "YToyOntzOjc6InVzZXJfaWQiO3M6MToiNSI7czo5OiJ1c2VyX3JvbGUiO3M6OToiTmhhbiBWaWVuIjt9.OTc3MTBiNGZjZjY2N2MxNmM0N2ZiNjAzNWU4NTRhYzUyNzAyMjk4NWZhZjIwNWJhMmE4MTZlMjdhYmE4NDIyMA==.MzQzNjAxOTg2MA==";
            
            const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/PhieuYC/getListPYCbyMaTT.php?MaTT=${MTT}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
            // Kiểm tra nếu request thành công (status 200)
            if (!response.ok) {
                throw new Error('Không thể lấy dữ liệu từ API');
            }
            const data = await response.json();
            res.render('admin/magPYC', {data, layout:'admin/main'})
            //res.json(data); // Gửi JSON response về client
        } catch (error) {
            // Xử lý các lỗi
            console.error(error);
            res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
        }
    }

    
}


module.exports = new magPYCController;
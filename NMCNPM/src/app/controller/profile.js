const path = require('path');
const cookieParser = require('cookie-parser');

class home {
    // Render Homepage
    async show(req, res, next) {
        try {
            // Lấy Makh và token từ cookie
            const Makh = Number(req.cookies.id_user);
            const token = req.cookies.token;

            // Kiểm tra nếu Makh hoặc token không tồn tại, có thể xử lý tiếp theo tại đây
            if (!Makh || !token) {
                throw new Error('Makh or token is missing in cookies');
            }

            // Gọi API để lấy danh sách dịch vụ với Makh và token
            const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/KhanhHang/getInfoKH.php?Makh=${Makh}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            // Sau khi nhận được dữ liệu, render trang index với dữ liệu đã nhận được
            res.render('profile', { data });
        } catch (error) {
            console.error(error);
            // Xử lý lỗi và điều hướng đến trang lỗi hoặc render lỗi
            res.render('error', { message: error.message || 'Failed to fetch data' });
        }
    }
}

module.exports = new home();
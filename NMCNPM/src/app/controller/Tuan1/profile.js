const { getUserInfo, updateUserInfo, getListUser } = require('./apiService');

class HomeController {
    async show(req, res, next) {
        try {
            const Makh = Number(req.cookies.id_user);
            const token = req.cookies.token;

            if (!Makh || !token) {
                throw new Error('Makh or token is missing in cookies');
            }

            const data = await getUserInfo(Makh, token);
            res.render('Tuan11/profile', { data });
        } catch (error) {
            console.error(error);
            res.render('error', { message: error.message || 'Failed to fetch data' });
        }
    }

    async updateInfo(req, res, next) {
        try {
            var Makh = req.body.Makh;
            const { Tenkh, Sodienthoai, Diachi, Ngaysinh, CMND } = req.body;
            const token = req.cookies.token;
            if (Makh == null) {
                Makh = Number(req.cookies.id_user);
            }
            const responseData = await updateUserInfo({ Makh, Tenkh, Sodienthoai, Diachi, Ngaysinh, CMND }, token);
            res.render('Tuan11/profile', { message: 'Update successful', data: responseData })
            // res.status(200).json();
        } catch (error) {
            console.error('Error:', error.message);
            res.status(500).json({ error: error.message || 'Failed to update data' });
        }
    }

    async showList(req, res, next) {
        try {
            const Manv = Number(req.cookies.id_user);
            const token = req.cookies.token;

            if (!Manv || !token) {
                throw new Error('Manv or token is missing in cookies');
            }

            const data = await getListUser(token);

            res.render('Tuan11/listKhachHang', { data, layout:'admin/main' });
        } catch (error) {
            console.error(error);
            res.render('error', { message: error.message || 'Failed to fetch data' });
        }
    }
}

module.exports = new HomeController();

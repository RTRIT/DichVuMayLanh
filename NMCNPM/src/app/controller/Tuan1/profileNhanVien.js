const { getNhanVienInfo, getListNhanVien, updateNhanVienInfo } = require('./apiService');

class HomeController {
    async show(req, res, next) {
        try {
            const Manv = Number(req.cookies.id_user);
            const token = req.cookies.token;

            if (!Manv || !token) {
                throw new Error('Manv or token is missing in cookies');
            }

            const data = await getNhanVienInfo(Manv, token);
            console.log(data.Hoten)
            res.render('Tuan11/profileNhanVien', { data, layout:'admin/main' });
        } catch (error) {
            console.error(error);
            res.render('error', { message: error.message || 'Failed to fetch data' });
        }
    }

    async showList(req, res, next) {
        try {
            const Manv = Number(req.cookies.id_user);
            const token = req.cookies.token;

            if (!Manv || !token) {
                throw new Error('Manv or token is missing in cookies');
            }

            const data = await getListNhanVien(token);
            res.render('Tuan11/listNhanVien', { data, layout:'QLY/main' });
        } catch (error) {
            console.error(error);
            res.render('error', { message: error.message || 'Failed to fetch data' });
        }
    }
    async updateNhanVien(req, res, next) {
        try {
            const { Manv, Hoten, Sodienthoai, DiaChi, Ngaysinh, Luong } = req.body;
            const token = req.cookies.token;
            console.log(Manv);
            const responseData = await updateNhanVienInfo({ Manv, Hoten, Sodienthoai, DiaChi, Ngaysinh, Luong }, token);
            res.status(200).json({ message: 'Update successful', data: responseData });
        } catch (error) {
            console.error('Error:', error.message);
            res.status(500).json({ error: error.message || 'Failed to update data' });
        }
    }



    async showListSP(req, res, next) {

        try {
            const response = await fetch(`https://mymusicpupu.000webhostapp.com/server2/getListSP.php`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                  }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            var data = await response.json();
        } catch (error) {
            throw new Error(error.message || 'Failed to fetch data');
        }
        res.render('đườn dẫ đến file hbs', { data });
    }

}

module.exports = new HomeController();

const { getListBHByManv, getChiTietBaoHanh, getListBHByQL, chiTietBaoHanhKH } = require('./apiService');

class HomeController {

    async showList(req, res, next) {
        try {
            const Manv = Number(req.cookies.id_user);
            const token = req.cookies.token;

            if (!Manv || !token) {
                throw new Error('Manv or token is missing in cookies');
            }

            const data = await getListBHByManv(Manv, token);
            res.render('Tuan11/listBaoHanh', { data,  layout:'admin/main' });
        } catch (error) {
            console.error(error);
            res.render('error', { message: error.message || 'Failed to fetch data' });
        }
    }
    async chiTietBaoHanh(req, res, next) {
        try {
            const { MaBH } = req.params;
            const maBH = Number(MaBH);
            const token = req.cookies.token;
            const data = await getChiTietBaoHanh(maBH, token);
            console.log(data)
            res.render('Tuan11/phieuBaoHanh', { data, layout: 'admin/main' });
        } catch (error) {
            console.error('Error:', error.message);
            res.status(500).json({ error: error.message || 'Failed to update data' });
        }
    }

    async showListByQL(req, res, next) {
        try {
            const Manv = Number(req.cookies.id_user);
            const token = req.cookies.token;

            if (!Manv || !token) {
                throw new Error('Manv or token is missing in cookies');
            }

            const data = await getListBHByQL(token);
            res.render('Tuan11/listBaoHanh', { data, layout:'admin/main' });
        } catch (error) {
            console.error(error);
            res.render('error', { message: error.message || 'Failed to fetch data' });
        }
    }

    async chiTietBaoHanhKH(req, res, next) {
        try {
            const Manv = Number(req.cookies.id_user);
            const token = req.cookies.token;
            const data = await chiTietBaoHanhKH(Manv, token);
            console.log(data)
            res.render('Tuan11/phieuBaoHanh', { data });
        } catch (error) {
            console.error('Error:', error.message);
            res.status(500).json({ error: error.message || 'Failed to update data' });
        }
    }


}

module.exports = new HomeController();

const cookieParser = require('cookie-parser');
const { showdv, editdv } = require('./apiedit');

class HomeController {
    async showdv(req, res) {
        try {
            const token = req.cookies.token;
            if (!token) {
                throw new Error('Token is missing in cookies');
            }
            const data = await showdv(token);
            res.render('Tuan_2/suadichvu', { data, layout: 'admin/main' });
        } catch (error) {
            console.error(error);
            res.render('error', { message: error.message || 'Failed to fetch data' });
        }
    }

    async editdv(req, res) {
        try {
            const token = req.cookies.token;
            const { MaDV, Tendv, Giadv, Mota } = req.body;

            if (!token) { throw new Error('Token is missing in cookies'); }
            const data = await editdv(token, MaDV, Tendv, Giadv, Mota);
            res.status(200).json({ message: 'Edit service successful', data });
        } catch (error) {
            console.error('Error:', error.message);
            res.status(400).json({ error: error.message || 'Failed to edit service' });
        }
    }
}

module.exports = new HomeController();

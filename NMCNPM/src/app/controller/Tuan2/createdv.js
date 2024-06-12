const cookieParser = require('cookie-parser');
const { showListSP, postaodichvu: createService } = require('./getsanpham');

class HomeController {
    async displayListSP(req, res, next) {
        try {
            const Masp = Number(req.cookies.id_user);
            const token = req.cookies.token;
            if (!Masp || !token) {
                throw new Error('Masp or token is missing in cookies');
            }
            const data = await showListSP(Masp, token);
            res.render('Tuan_2/taodichvu', { data, layout: 'admin/main' });
        } catch (error) {
            console.error(error);
            res.render('error', { message: error.message || 'Failed to fetch data' });
        }
    }

    async createService(req, res, next) {
        try {
            const { Tendv, Giadv, Mota, products } = req.body;
            const token = req.cookies.token;
    
            // Log the request data for debugging
            console.log('Request data:', { Tendv, Giadv, Mota, products });
            console.log('Token:', token);
    
            const data = await createService({ Tendv, Giadv, Mota, products }, token);
            res.status(200).json({ success: true, message: 'Create service successful', data });
        } catch (error) {
            console.error('Error in createService:', error.message);
            res.status(400).json({ success: false, error: error.message || 'Failed to create service' });
        }
    }
}

module.exports = new HomeController();

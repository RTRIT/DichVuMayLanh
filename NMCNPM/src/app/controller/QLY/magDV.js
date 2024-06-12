const cookieParser = require('cookie-parser');
const { showdv, editdv } = require('./apidv');

class magDVController {
    async showdv(req, res) {
        try {
            const token = req.cookies.token;
            if (!token) {
                throw new Error('Token is missing in cookies');
            }
            const data = await showdv(token);
            res.render('QLY/magService', { data, layout: false });
        } catch (error) {
            console.error(error);
            res.render('error', { message: error.message || 'Failed to fetch data' });
        }
    }

    async editdv(req, res) {
        try {
            const token = req.cookies.token;
            const { Tendv, Giadv, Mota, imageChoice, imageUrl } = req.body;
            const products = JSON.parse(req.body.products);
            const imageFile = req.file; // Assuming you're using middleware to handle file uploads

            const data = await editdv(token, Tendv, Giadv, Mota, products, imageChoice, imageUrl, imageFile);
            res.status(200).json({ message: 'Edit service successful', data });
        } catch (error) {
            console.error('Error:', error.message);
            res.status(400).json({ error: error.message || 'Failed to edit service' });
        }
    }
    
}

module.exports = new magDVController();
const path = require('path'); // Import the path module, 


class adminController{
    async show(req,res,next){
        res.sendFile(path.join(__dirname, '../../../', 'resource/views', 'Admin.html'));

    }
}


module.exports = new adminController;
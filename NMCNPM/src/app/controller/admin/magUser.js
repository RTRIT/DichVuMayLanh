const path = require('path'); // Import the path module, 


class adminController{
    async show(req,res,next){
        try {
            res.render('admin/Admin', {layout:'admin/main'})
        } catch (error) {
            
        }
        

    }
}


module.exports = new adminController;
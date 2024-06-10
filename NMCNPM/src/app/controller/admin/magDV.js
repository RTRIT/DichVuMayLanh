const path = require('path'); // Import the path module, 


class magDVController{
    async show(req,res,next){
        try {
            res.render('admin/magService', {layout:'admin/main'})
        } catch (error) {
            
        }
        

    }
}


module.exports = new magDVController;
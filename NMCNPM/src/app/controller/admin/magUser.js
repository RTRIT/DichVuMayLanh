const path = require('path'); // Import the path module, 


class magUserController{
    async show(req,res,next){
        try {
            res.render('admin/magUser', {layout:'admin/main'})
        } catch (error) {
            
        }
        

    }
}


module.exports = new magUserController;
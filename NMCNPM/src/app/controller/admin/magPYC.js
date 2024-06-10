const path = require('path'); // Import the path module, 


class magPYCController{
    async show(req,res,next){
        try {
            res.render('admin/magPYC', {layout:'admin/main'})
        } catch (error) {
            
        }
        

    }å
}


module.exports = new magPYCController;
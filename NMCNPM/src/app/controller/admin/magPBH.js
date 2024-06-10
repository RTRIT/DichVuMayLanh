const path = require('path'); // Import the path module, 


class magPBHController{
    async show(req,res,next){
        try {
            res.render('admin/magPBH', {layout:'admin/main'})
        } catch (error) {
            
        }
        

    }å
}


module.exports = new magPBHController;
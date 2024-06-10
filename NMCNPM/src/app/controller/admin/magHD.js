const path = require('path'); // Import the path module, 


class magHDController{
    async show(req,res,next){
        try {
            res.render('admin/magHD', {layout:'admin/main'})
        } catch (error) {
            
        }
        

    }
    async createHD(req,res,next){
        try {
            res.render('admin/magHD', {layout:'admin/main'})
        } catch (error) {
            
        }
        

    }
    async showList(req,res,next){
        try {
            res.render('admin/magHD', {layout:'admin/main'})
        } catch (error) {
            
        }
        

    }
}


module.exports = new magHDController;
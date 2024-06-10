const path = require('path'); // Import the path module, 


class magHDController{
    async show(req,res,next){
        try {
            res.render('admin/magHD/show', {layout:'admin/main'})
        } catch (error) {
            
        }
        

    }

    async showFormHD(req,res,next){
        try {
            res.render('admin/magHD/create', {layout:'admin/main'})
        } catch (error) {
            
        }
        

    }
    async createHD(req,res,next){
        try {
            res.render('admin/magHD/createHD', {layout:'admin/main'})
        } catch (error) {
            
        }
        

    }
    async showList(req,res,next){
        try {
            res.render('admin/magHD', {layout:'admin/main'})
        } catch (error) {
            
        }
        

    }
    async detailHD(req,res,next){
        try {
            res.render('admin/magHD/detail', {layout:'admin/main'})
        } catch (error) {
            
        }
        

    }
}


module.exports = new magHDController;
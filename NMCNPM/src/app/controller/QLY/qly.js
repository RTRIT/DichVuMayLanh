const path = require('path'); // Import the path module, 


class qlyController{
    async show(req,res,next){
        try {
            res.render('QLY/qly', {layout:'QLY/main'});
        } catch (error) {
            
        }
        

    }
    async profile(req,res,next){
        try {
            res.render('admin/profile', {layout:'admin/main'});
        } catch (error) {
            
        }
    }
}


module.exports = new qlyController;
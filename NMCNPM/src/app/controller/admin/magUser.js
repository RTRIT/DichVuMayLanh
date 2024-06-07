const path = require('path'); // Import the path module, 


class adminController{
    async show(req,res,next){
        try {
            res.render('Admin', {layout:false})
        } catch (error) {
            
        }
        

    }
}


module.exports = new adminController;
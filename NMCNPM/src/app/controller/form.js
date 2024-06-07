const path = require('path');


class form{
    async show(req,res,next){
        try {
            // const body = req.body;
            res.render('Form')
        } catch (error) {
            
        }
    }
    async submitForm(req,res,next){
        res.json(req.body)
    }

}

module.exports = new form;
const path = require('path');


class home{
    async show(req,res,next){
        
        try {
            const response = await fetch('https://161b53d2-6d44-4835-b554-293a71fa43a8.mock.pstmn.io/test')
            const data = await response.json()
            // res.json(data)
            res.render('index', {data});
        } catch (error) {
            
        }
    }
    async serviceDetail(req, res, next){
        try{
            res.render('serviceDetail');
        } catch(error){

        }
    }

    async form(req,res,next){
        try {
            res.render('Form')
        } catch (error) {
            
        }
    }

    async billList(req,res,next){
        try {
            res.render('cart')
        } catch (error) {
            
        }
    }
}

module.exports = new home;
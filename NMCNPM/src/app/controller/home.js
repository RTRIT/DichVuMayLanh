const path = require('path');


class home{
    //Render Homepage
    async show(req,res,next){
        try {
            const response = await fetch('https://161b53d2-6d44-4835-b554-293a71fa43a8.mock.pstmn.io/test')
            // const response = await fetch('https://mymusicpupu.000webhostapp.com/server2/DichVu/getListDV.php')
            const data = await response.json()
            // res.json(data)
            res.render('index', {data});
        } catch (error) {
            
        }
    }
    //Render detailService
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
            res.render('HoaDon')
        } catch (error) {
            
        }
    }
    async billList(req,res,next){
        try {
            res.render('HoaDon')
        } catch (error) {
            
        }
    }
}

module.exports = new home;
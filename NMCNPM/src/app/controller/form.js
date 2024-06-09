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

        try{
            var listServices = req.body.CTPYC;
            // [ 'Máy lạnh bị đông đá:1' ]
            // [
            //     'Di dời, tháo lắp máy lạnh:2',
            //     'Sửa máy lạnh bị xì gas:2',
            //     'Máy lạnh bị chảy nước:2'
            //   ]

            var listServices2 = [];
            listServices.forEach(function(currentValue, index, array){
            var value = currentValue.split(":")
            var MaDV = value[0];
            var SoLuong = value[1];
            var service = {
                "MaDV":value[0],
                "SoLuong":value[1]
            };
            listServices2.push(service)
            
            })
            const body = {
                "Diachi":req.body.Diachi, 
                "NgayHen": req.body.NgayHen,
                "GhiChu": req.body.GhiChu, 
                "Makh": 123, 
                "CTPYC": listServices2
            }
            // console.log(body)

            // fetch()
            
            res.status(200);
        }catch(error){

        }


        
    }
}

module.exports = new form;
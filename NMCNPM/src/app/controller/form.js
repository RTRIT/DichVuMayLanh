const path = require('path');


class form{
    async show(req,res,next){
        try {
            // const body = req.body;
            //Get list dich vu
            fetch('https://mymusicpupu.000webhostapp.com/server2/DichVu/getListDV.php')
                .then(response => {
                    if(!response.ok){
                        throw new Error('Invalid parameter');
                    }
                    return response.json()
                })
                .then(data => {
                    res.render('Form', {data})
                })
            // res.render('Form')
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
                "Makh": req.cookies.id_user, 
                "CTPYC": listServices2
            }

            // console.log((JSON.stringify(body)))
            // console.log(JSON.stringify(body))

            fetch('https://mymusicpupu.000webhostapp.com/server2/PhieuYC/addPYC.php',{
                method:'POST',
                body:JSON.stringify(body),
                headers: {
                    'Authorization': `Bearer ${req.cookies.token}`,
                     'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    if(!response.ok){
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    // console.log(data)
                    res.redirect('/Form')
                })
            
        }catch(error){
            
        }


        
    }
}

module.exports = new form;
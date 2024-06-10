const path = require('path');
const tokeDecode = require('../validate/token'); 


class home{
    //Render Homepage
    async show(req,res,next){
        try {
            res.render('profile')
            // const response = await fetch('https://mymusicpupu.000webhostapp.com/server2/DichVu/getListDV.php')
            // fetch('https://161b53d2-6d44-4835-b554-293a71fa43a8.mock.pstmn.io/test')
            //     .then(response => {
            //         return response.json();
            //     })
            //     .then(data => {
            //         res.render('index' , {data})
            //     })
        } catch (error) {
            
        }
    }
    
   
}

module.exports = new home;
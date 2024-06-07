const path = require('path');


class cart{
    //Render ra trang home với danh sách dịch vụ được trả về
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
   
}

module.exports = new home;
const path = require('path');
const tokeDecode = require('../validate/token');
const { error } = require('console');


class home {
    //Render Homepage
    async show(req, res, next) {
        try {
            // const response = await fetch('https://mymusicpupu.000webhostapp.com/server2/DichVu/getListDV.php')
            fetch('https://mymusicpupu.000webhostapp.com/server2/DichVu/getListDV.php')
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    res.render('index', { data })
                })
        } catch (error) {

        }
    }
    //Render detailService
    async serviceDetail(req, res, next) {
        try {
            // console.log(localStorage.getItem('Id'))
            // res.json(localStorage.getItem("Id"));
            
            const token = req.cookies.token;

            fetch(`https://mymusicpupu.000webhostapp.com/server2/DichVu/getListDV.php`,{
                method:"GET",
                headers:{
                     'Authorization': `Bearer ${req.cookies.token}`
                }
            })
            .then(response => {
                if(!response.ok){
                    throw new Error("Get service detail wrong")
                }
                return response.json();
            })
            .then(data => {
                fetch(`https://mymusicpupu.000webhostapp.com/server2/DichVu/getCTSPByMaDV.php?MaDV=${req.params.serviceDetail}`)
                    .then(response2 => {
                        if(!response2.ok){
                            throw new Error("Get service detail wrong")
                        }
                        return response2.json();
                    })
                    .then(data2 => {
                        // res.json(data2);
                        res.render('serviceDetail', { data, data2 })
                    })
            })

        } catch (error) {

        }
    }



    async billList(req, res, next) {
        try {
            res.render('HoaDon')
        } catch (error) {

        }
    }

    async showPhieuDichVu(req, res, next) {
        try {
            res.render('PhieuDichVu');
        } catch (error) {

        }
    }

    async Warranty(req, res, next) {
        try {
            res.render('test');
        } catch (error) {

        }
    }

}

module.exports = new home;
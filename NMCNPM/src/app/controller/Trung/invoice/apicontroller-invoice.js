const { getInvoiceList,  getInvoiceDetail } = require('./apiservice-invoice-NBT');


class apiControllerInvoice {
    async showInvoiceList(req, res, next) {
        try {
            const userId = Number(req.cookies.id_user);
            const role = Number(req.cookies.id_role);
            const token = req.cookies.token;

            if (!userId || !token)
                throw new Error('Makh or token is missing in cookies');

            let dataResult = null;
            let url = null;

            if (role == 3)  url = `https://mymusicpupu.000webhostapp.com/server2/HoaDon/showListHD.php`;
            else if (role == 2)  url = `https://mymusicpupu.000webhostapp.com/server2/HoaDon/showListHDbyMakh.php?Makh=${userId}`;
            else if (role == 1)  url = `https://mymusicpupu.000webhostapp.com/server2/HoaDon/showListHDbyManv.php?Manv=${userId}`;

            if (url == null)
                throw new Error('Role_id is missing in cookies');

            dataResult = await getInvoiceList(url, token);
            console.log("*******dataResult*****")
            console.log(dataResult)
            res.render('HoaDon', { dataResult });
        } catch (error) {
            console.error("Error at 'showInvoiceList': " + error);
            res.render('error', { message: error.message || 'Failed to fetch data' });
        }
    }

    async showInvoiceDetail(req, res) {
        try {
            const MaHD = Number(req.body.maHD);
            const token = req.cookies.token;
            console.log(MaHD);

            if (!(MaHD && token))   throw new Error('something is missing');

            const detailResult = await getInvoiceDetail(MaHD, token);
            res.send(detailResult);
        } catch (error) {
            console.error("Error at 'showInvoiceDetail': " + error);
            res.render('error', { message: error.message || 'Failed to fetch data' });
        }
    }
}

module.exports = new apiControllerInvoice();
const express = require('express');
const router = express.Router();
const home = require('../app/controller/home');
const form = require('../app/controller/form');
// const profile  = require('../app/controller/profile');
const profile = require('../app/controller/Tuan1/profile');
const baoHanh = require('../app/controller/Tuan1/baoHanh');
const invoicepage = require('../app/controller/Trung/invoice/apicontroller-invoice');
const userMagPYC = require('../app/controller/user_magPYC');
const path = require('path'); // Import the path module


//home page
router.get('/form', form.show);
router.post('/form', form.submitForm);

//Trung
router.post('/invoicedetail', invoicepage.showInvoiceDetail);
router.get('/invoice', invoicepage.showInvoiceList);

router.get('/profile', profile.show);
router.post('/updateInfo', profile.updateInfo);

router.get('/baoHanh', baoHanh.chiTietBaoHanhKH)

//Phiếu yêu cầu
router.get('/phieuYC/cancel/:id',userMagPYC.cancel)
router.get('/phieuYC/edit/:id',userMagPYC.editShow)
router.post('/phieuYC/edit/:id',userMagPYC.edit)
router.get('/phieuYC',userMagPYC.show)


router.get('/HoaDon', home.billList);
// router.get('/PhieuDichVu', home.showPhieuDichVu);
router.get('/:serviceDetail', home.serviceDetail);
router.get('/', home.show);


module.exports = router;
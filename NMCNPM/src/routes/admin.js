const express = require('express');
const router = express.Router();
const admin = require('../app/controller/admin/admin');
//Tri
// const QlyUser = require('../app/controller/admin/magUser');
const QlyHD = require('../app/controller/admin/magHD');
const QlyPYC = require('../app/controller/admin/magPYC');
const QlyDV = require('../app/controller/admin/magDV');
// const QlyPBH = require('../app/controller/admin/magPBH');

//A Tuan
const profile = require('../app/controller/Tuan1/profileNhanVien');
const profileKH = require('../app/controller/Tuan1/profile');
const baoHanh = require('../app/controller/Tuan1/baoHanh');



//A Tuan
router.get('/QlyUser', profileKH.showList);

router.get('/QlyDV', QlyDV.show);

router.get('/Profile', profile.show)

router.get('/QlyNV', profile.showList)

router.post('/updateNhanVien', profile.updateNhanVien);

router.get('/QlyPBH', baoHanh.showList)

router.get('/chiTietPBH/:MaBH', baoHanh.chiTietBaoHanh)

router.get('/QlyPBHQL', baoHanh.showListByQL)

// router.get('/QlyUser', profileKH.showList)



//Tri

router.get('/QlyPYC/MaTT/:maTT', QlyPYC.showByMaTT); 

// Define the correct route for accepting PYC
router.get('/QlyPYC/accept/:id', QlyPYC.accept); 

// Define the correct route for cancelling PYC
router.get('/QlyPYC/cancel/:id', QlyPYC.cancel);

// Route for showing and editing PYC
router.get('/QlyPYC/edit/:id', QlyPYC.editShow);
router.post('/QlyPYC/edit/:id', QlyPYC.edit);

// Route for showing PYC list
router.get('/QlyPYC', QlyPYC.show);
router.post('/QlyPYC', QlyPYC.show);

// Route for handling HD (Hoá Đơn) based on PYC
router.get('/QlyHD/taoHD/:id', QlyHD.formHDByMaPYC);
router.post('/QlyHD/taoHD', QlyHD.createHD);

// Route for showing HD list
router.get('/QlyHD', QlyHD.show);

// Route for showing PBH (Phần Bảo Hành)
// router.get('/QlyPBH', QlyPBH.show);

// Route for profile
// router.get('/Profile', admin.profile);

// Default route for admin
router.get('/', admin.show);

module.exports = router;

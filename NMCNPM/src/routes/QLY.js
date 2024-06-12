const express = require('express');
const router = express.Router();
const qly = require('../app/controller/QLY/qly');
const createdv = require('../app/controller/Tuan2/createdv');
const editdv = require('../app/controller/Tuan2/editdv');
const QlyDV = require('../app/controller/QLY/magDV')


//A Tuan
const profile = require('../app/controller/Tuan1/profileNhanVien');
const profileKH = require('../app/controller/Tuan1/profile');
const baoHanh = require('../app/controller/Tuan1/baoHanh');

router.get('/QlyPBH', baoHanh.showList)
router.get('/chiTietPBH/:MaBH', baoHanh.chiTietBaoHanh)
router.get('/QlyPBHQL', baoHanh.showListByQL)

router.get('/Profile', profile.show)
router.get('/QlyNV', profile.showList)
router.post('/updateNhanVien', profile.updateNhanVien);


//Tuan

router.get('/QlyDV', QlyDV.showdv)
router.post('/QlyDV/edit', QlyDV.editdv)

router.get('/createdv', createdv.displayListSP);
router.post('/createdv', createdv.createService);

router.get('/editdv', editdv.showdv);
router.post('/editdv', editdv.editdv);

router.get('/', qly.show)

module.exports = router;
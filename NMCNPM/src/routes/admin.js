const express = require('express');
const router = express.Router();
const admin = require('../app/controller/admin/admin')
const QlyUser = require('../app/controller/admin/magUser')
const QlyHD = require('../app/controller/admin/magHD')
const QlyPYC = require('../app/controller/admin/magPYC')
const QlyDV = require('../app/controller/admin/magDV')
const QlyPBH = require('../app/controller/admin/magPBH')



router.get('/QlyUser',QlyUser.show )

router.get('/QlyDV',QlyDV.show )

router.get('/QlyPYC',QlyPYC.show )

router.get('/QlyHD',QlyHD.show )
router.get('/QlyHD/taoHD',QlyHD.showFormHD )
router.post('/QlyHD/taoHD',QlyHD.createHD )
router.get('/QlyHD/detail',QlyHD.detailHD )


router.get('/QlyPBH',QlyPBH.show )

router.get('/Profile',admin.profile )

router.get('/', admin.show);

module.exports = router
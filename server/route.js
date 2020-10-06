const express = require('express');
const router = express.Router();
const controller = require ('./controller');
//경로설정
router.post('/add/timesetting',controller.add.timesetting);
router.post('/send/pw',controller.api.sendPw);
router.post('/add/homepageusers',controller.add.homepageusers);
router.post('/add/board',controller.add.board);
router.post('/add/recommendboard',controller.add.recommendboard);
router.post('/add/purchases',controller.add.purchases);
router.post('/get/board', controller.get.medicrecords);
router.post('/get/recommendboard', controller.get.recommendboard);
router.post('/get/users', controller.get.users);
router.post('/get/medicrecords', controller.get.medicrecords);
router.post('/get/users_cnt',controller.get.users_cnt);
router.post('/get/board_cnt', controller.get.board_cnt);
router.post('/get/recommendboard_cnt', controller.get.recommendboard_cnt);
router.post('/get/medicrecords_cnt', controller.get.medicrecords_cnt);
router.post('/get/reviewboard_cnt', controller.get.reviewboard_cnt);
router.post('/get/reviewboard', controller.get.reviewboard);
router.post('/get/board_data', controller.get.board_data);
router.post('/get/recommendboard_data', controller.get.recommendboard_data);

module.exports = router;

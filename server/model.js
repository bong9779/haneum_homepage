const sequelize = require('./models').sequelize;
var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

const now_date = moment().format('YYYY-MM-DD HH:mm:ss');
const {
    Alltimelist,
    Timesetting,
    Homepageusers,
    Boards,
    Users,
    ReviewBoards,
    MedicRecords,
    Sequelize: { Op }
} = require('./models');
sequelize.query('SET NAMES utf8');

module.exports = {
    api : {
        //홈페이지 users 아이디와 비밀번호에 맞는 튜플 있는지
        searchInfo : (body, hash, callback) => {
            Homepageusers.findAll({
                where : { [Op.and]: [{ id : body.id, password : hash }] }
            })
            .then(data => {
                callback(data)
            })
            .catch(err =>{
                throw err;
            })
        },
        //약 복용 데이터 찾기
        searchOverlap : (body, callback) =>{
            Timesetting.findAll({
                where : { [Op.and]: [{patient_id: body.patient_id, patientname: body.patientname, medName: body.medName }]}
            })
            .then(data => {
                callback(data)
            })
            .catch(err =>{
                throw err;
            })
        }

    },
    get : {
        board_data : (body, callback) => {
            ReviewBoards.findAll({
                where : { board_id : body.id }
            })
            .then(data => {
                callback(data);
                console.log("board_data"+ data[0].writer);
            })
            .catch(err => {
                throw err;
            })
        },
        //약 복용 데이터 튜플 수 count
        medicrecords_cnt : (body, callback) => {
            let search = "%%";

            if(body.search) {
                search = '%' + body.search + '%';
            }
    
            MedicRecords.count({
                where : {
                    PatientName : {
                        [Op.like] : search
                    }
                }
            })
            .then(result => {
              callback(result);
            })
          },
        //사용자 데이터 튜플 수 count
        users_cnt : (body, callback) => {
            let search = "%%";

            if(body.search) {
                search = '%' + body.search + '%';
            }
    
            Users.count({
                where : { 
                    UserName : {
                        [Op.like] : search
                    },    
                    
                }
            })
            .then(result => {
              callback(result);
              console.log("users 카운트"+ result);
            })
          },
          //약 복용 데이터 전부 가져오기
          medicrecords : (body, callback) => {
            let search = "%%";

            if(body.search) {//만약 search값있으면 search값만 찾기
                search = '%' + body.search + '%';
            }
            
            MedicRecords.findAll({
                where : {
                    PatientName : {
                        [Op.like] : search
                    },
                },
                    limit : (body.page * body.limit),
                    offset : (body.page - 1) * body.limit,
                    order: sequelize.literal('patient_id ASC')
                })
            .then(data => {
                callback(data)
            })
            .catch(err => {
                throw err;
            })
        },
        // 사용자 데이터 전부 가져오기 
          users : (body, callback) => {
            let search = "%%";

            if(body.search) {//만약 search값있으면 search값만 찾기
                search = '%' + body.search + '%';
            }
            
            Users.findAll({
                where : {
                    UserName : {
                        [Op.like] : search
                    },
                },
                    limit : (body.page * body.limit),
                    offset : (body.page - 1) * body.limit,
                    order: sequelize.literal('patient_id ASC')
                })
            .then(data => {
                callback(data)
            })
            .catch(err => {
                throw err;
            })
        },
        reviewboard_cnt : (body, callback) => {
            let search = "%%";

            if(body.search) {
                search = '%' + body.search + '%';
            }
    
            ReviewBoards.count({
                where : {
                    title : {
                        [Op.like] : search
                    }
                }
            })
            .then(result => {
              callback(result);
            })
          },
        //게시판 튜플 수 count
        board_cnt : (body, callback) => {
            let search = "%%";

            if(body.search) {
                search = '%' + body.search + '%';
            }
    
            Boards.count({
                where : {
                    patientname : {
                        [Op.like] : search
                    }
                }
            })
            .then(result => {
              callback(result);
            })
          },
          reviewboard : (body, callback) => {
            let search = "%%";

            if(body.search) {//만약 search값있으면 search값만 찾기
                search = '%' + body.search + '%'; 
            }
            
            ReviewBoards.findAll({
                where : {
                    title : {
                        [Op.like] : search
                    }
                },
                    limit : (body.page * body.limit),
                    offset : (body.page - 1) * body.limit,
                    order: sequelize.literal('board_id DESC')
                })
            .then(data => {
                callback(data)
            })
            .catch(err => {
                throw err;
            })
        },
          //게시판 전부 가져오기 
        board : (body, callback) => {
            let search = "%%";

            if(body.search) {//만약 search값있으면 search값만 찾기
                search = '%' + body.search + '%'; 
            }
            
            Boards.findAll({
                where : {
                    patientname : {
                        [Op.like] : search
                    }
                },
                    limit : (body.page * body.limit),
                    offset : (body.page - 1) * body.limit,
                    order: sequelize.literal('board_id DESC')
                })
            .then(data => {
                callback(data)
            })
            .catch(err => {
                throw err;
            })
        }
    },

    delete : { //timesetting 입력 값과 같은 값있으면 삭제
        delOverlap : (body, callback) =>{
            Timesetting.destroy({
                where :{ [Op.and]: [{patient_id: body.patient_id, patientname: body.patientname, medName: body.medName }]}
            })
            .then(data => {
                callback(data)
            })
            .catch(err =>{
                throw err;
            })
        }
    },
    add : {
        
        //게시판 추가
        board : (body, callback) =>{
            ReviewBoards.create({
                title: body.title_board,
                writer: body.name_board,
                contents: body.contents_txt,
                writetime: now_date
            })
            .then(data =>{
                callback(true)
            })
            .catch(err => {
                throw err;
            })
        },
        // 사용자 추가
        homepageusers : (body, hash_pw, now, callback) => {
            Homepageusers.count({
                where : { id : body.id }
            })
            .then(cnt => {
                if(cnt > 0) {
                    callback(false);
                }else {
                    Homepageusers.create({
                             admin : 'N',
                             id : body.id,
                             password : hash_pw,
                             name : body.name,
                             birthday : body.birthday,
                             sex : body.sex,
                             email : body.email,
                             signup_date : now
                    })
                    .then( () => callback(true) );
                }
            })
        },
        //약 주기 입력 값 추가
        timesetting : (body, callback) => {

            Timesetting.create({
                patient_id : body.patient_id,
                patientname : body.patientname,
                medName: body.medName,
                medTime : body.medTime,
                date : now_date
            })
            .then(data => {
                callback(true)
            })
            .catch(err => {
                throw err;
            })

            Alltimelist.create({
                patient_id : body.patient_id,
                patientname : body.patientname,
                medName: body.medName,
                medTime : body.medTime,
                date : now_date
            })
            .then(data => {
                callback(true)
            })
            .catch(err => {
                throw err;
            })
        }
    }

}

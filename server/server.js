const express = require('express'); //express사용
const app = express();
const router = require('./route');

const sequelize = require('./models').sequelize;
const bodyParser = require('body-parser')

sequelize.sync(); //Sequelize 연동
// sequelize.sync({ force: true });

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/', router);

const PORT = process.env.PORT || 4000; //4000번 포드번호 서버에 할당
app.listen(PORT, () => {
    console.log(`Server On : http://127.0.0.1:${PORT}/`);
})
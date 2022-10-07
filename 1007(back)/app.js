const express = require('express');
const cors = require('cors');
const dot = require('dotenv').config();

const app = express();

const { sequelize } = require('./public/index');
const User = require('./public/user');

const options = {
    origin: "http://localhost:3000" // 이 주소를 허용해줬고 나중에 배포한 이후에 이곳에 그 도메인 넣으면 됌
    // origin: true // 들어오는 요청 도메인/포트가 자동으로 origin에 추가 됌
    // origin: '도메인' // 실제로 서비스 되는 도메인을 입력해줘서 해당 도메인만 접근할 수 있게 허용한다.
    // credential : true,false // 사용자 인증이 필요한 리소스 접근을 허용해줄지 안할지 ex) 쿠키
}
// cors 에러 해결 방법

// cors란 브라우저 보안정책
// cors는 브라우저가 서로 다른 도메인 / 포트의 서버로 요청했을 때 발생
// 접근 허용해줘야 함
// npm i cors
sequelize.sync({ force: false }).then(() => {
    console.log("연결 완료")
}).catch((error) => {
    console.log(error)
})

app.use(express.json());

app.use(cors(options));

app.listen(80, () => {
    console.log('80 server start => http://localhost:80')
})

app.post("/hi", (req, res) => {
    res.send("hihi")
})

app.get("/", (req, res) => {
    res.send({
        id: "aaa"
    })
})

app.post("/", (req, res) => {
    let { id, pw } = req.body
    res.send({
        user_id: id,
        pw: pw
    })
})

app.post("/signup", async (req, res) => {
    let { id, pw } = req.body;
    const user = await User.findOne({
        where: { user_id: id }
    })
    if (!user) {
        User.create({
            user_id: id, user_pw: pw
        }).then(() => { res.send("Sign_up_success") })
    } else res.send("Already_used_id")
})

app.post("/login", async (req, res) => {
    let { id, pw } = req.body;
    console.log(id, pw)
    const user = await User.findOne({
        where: { user_id: id, user_pw: pw }
    });
    console.log(user)
    if (user) {
        res.send(true)
    } else res.send(false)
})
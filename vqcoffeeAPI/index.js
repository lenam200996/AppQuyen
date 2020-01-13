//express
var express = require('express');
var app = express();
var cors = require('cors')
//body-parser
var bodyParser = require('body-parser');
var urlcodedParser = bodyParser.urlencoded({ extended: false });
//localhost:2019
app.listen(2019);
app.use(cors())
// ejs
// app.set("view engine","ejs");
// app.set("views","./views");

//firebase
var admin = require('firebase-admin');
var serviceAccount = require("./firebase-key.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://vqcoffee-47c3e.firebaseio.com"
});
//cryto - password
var crypto = require('crypto');
//jsonwebtoken 
var jwt = require('jsonwebtoken');
// validator
var validator = require('validator');

// app.post('/auth/register',urlcodedParser,(req,res) => {
//     var db = admin.database();
//     var ref = db.ref("auth");
//     var usersRef = ref.child("users");
//     usersRef.on("value",(snapshot)=>{
//         res.send(snapshot)
//     })
// usersRef.push({
//     username : req.body.username,
//     password : crypto.createHash('md5').update(req.body.password).digest('hex'),
//     admin : true,
//     fullname : req.body.fullname
// }).then((snap) =>{
//     res.send(JSON.stringify({token: jwt.sign({ email:'aa', fullName: 'aa', _id: 'aa'}, 'RESTFULAPIs')}));
// })
// res.send(keyUser)
// })
app.post('/auth/register', cors(), urlcodedParser, (req, res) => {
    var db = admin.firestore();
    let docRef = db.collection('users').doc(req.body.username);
    docRef.get().then((docSnap) => {
        if (docSnap.exists) {
            res.status(200).json("username exists");
        } else {
            docRef.set({
                fullname: req.body.fullname,
                username: req.body.username,
                password: crypto.createHash('md5').update(req.body.password).digest('hex'),
                admin: true
            })
            res.status(200).json("register success!");
        }
    })
})

//day du lieu len firebase
app.post('/auth/login', cors(), urlcodedParser, (req, res) => {
    var db = admin.firestore();
    let docRef = db.collection('users').doc(req.body.username);
    docRef.get().then((docSnap) => {
        if (docSnap.exists) {
            // res.status(200).json(docSnap.data())
            const data = docSnap.data()
            // res.status(200).json(crypto.createHash('md5').update(req.body.password).digest('hex')+'***'+data.password)
            if (crypto.createHash('md5').update(req.body.password).digest('hex') == data.password) {
                res.status(200).json({
                    data: {
                        success: true,
                        token: jwt.sign({ username: data.username, fullname: data.fullname, admin: data.admin, diem: data.diem }, 'RESTFULAPIs')
                    }
                })
            } else {
                res.status(200).json('failt!');
            }
        } else {
            res.status(200).json('username not exits');
        }
    })
})
// lay du lieu ve
app.get('/products/list', cors(), urlcodedParser, (req, res) => {
    var db = admin.firestore();
    let docRef = db.collection('sanpham');
    const list = []
    docRef.get().then(snap => {
        snap.forEach((datass) => {
            list.push({
                id: datass.data().id,
                ten: datass.data().ten,
                gia: datass.data().gia,
                mota: datass.data().mota,
                trangthai: datass.data().trangthai,
                sale: datass.data().sale,
                anh: datass.data().anh
            })
        })
        res.status(200).json(JSON.stringify({ data: list }))
    })
})

app.post('/products/cart', cors(), urlcodedParser, (req, res) => {
    var db = admin.firestore();
    const now = Date.now()
    let docRef = db.collection('giohang').doc(req.body.userid + now);
    docRef.set({
        id: req.body.userid + now,
        userid: req.body.userid,
        procID: req.body.procID,
        soluong: req.body.soluong,
        status: 0,
        thanhtien: req.body.thanhtien,
        time: now,
        tensp: req.body.tensp
    })
    res.status(200).json(JSON.stringify({ status: "added" }))
})

app.get('/news/list', cors(), urlcodedParser, (req, res) => {
    var db = admin.firestore();
    let docRef = db.collection('tintuc');
    const list = []
    docRef.get().then(snap => {
        snap.forEach((datass) => {
            list.push({
                id: datass.data().id,
                tieude: datass.data().tieude,
                noidung: datass.data().noidung,
                anh: datass.data().anh
            })
        })
        res.status(200).json(JSON.stringify({ data: list }))
    })
})

app.get('/products/get/cart', cors(), urlcodedParser, (req, res) => {
    var db = admin.firestore();
    let docRef = db.collection('giohang');
    const list = []
    docRef.get().then(snap => {
        snap.forEach((datass) => {
            list.push({
                id: datass.data().id,
                procID: datass.data().procID,
                soluong: datass.data().soluong,
                thanhtien: datass.data().thanhtien,
                userid: datass.data().userid,
                status: datass.data().status,
                tensp: datass.data().tensp,
            })
        })
        res.status(200).json(JSON.stringify({ data: list }))
    })
})

app.post('/products/cart/accept', cors(), urlcodedParser, (req, res) => {
    var db = admin.firestore();
    const now = Date.now()
    // console.log(req.body)
    let docRef = db.collection('donhang').doc(now.toString())
    docRef.set({
        id: now.toString(),
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        list: req.body.list,
        thanhtien: req.body.thanhtien,
        user: req.body.user
    })
    let userRef = db.collection('users').doc(req.body.user)
    let currentDiem = 0
    userRef.get().then(data => {
        console.log(data.data().diem)
        currentDiem = data.data().diem - parseInt(req.body.sale)
        userRef.update({ diem: currentDiem + parseInt(parseInt(req.body.thanhtien) / 1000) })
    })

    var giohang = db.collection('giohang').where('userid', '==', req.body.user);
    giohang.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            doc.ref.delete();
        });
    });
    // console.log('diem',currentDiem)

    // userRef.update({diem : currentDiem + parseInt(parseInt(req.body.thanhtien)/1000)})
    res.status(200).json(JSON.stringify({ status: "added" }))
})

app.post('/hello', urlcodedParser, (req, res) => {
    res.send("welcome " + req.body.name)
})

app.get('/test/:id', (req, res) => {
    var id = req.params.id;
    res.send("id = " + id)
})


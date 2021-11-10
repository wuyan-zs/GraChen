const express = require('express')
const bodyParser = require('body-parser')
const login=express.Router()
const mysql=require('mysql')

login.use(bodyParser.json());
login.use(bodyParser.urlencoded({extended: false}));

const db=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'xyj.....',
    database:'leaf'
})

login.post('/login',(req,res)=>{
    // console.log(req.body)
    db.query(`select * from users where email='${req.body.email}' and password='${req.body.password}'`,(err,result)=>{
        if(result.length===1){
            res.send({
                status:200
            })
        }else{
            res.send({
                status:303
            })
        }
    })
})
module.exports=login

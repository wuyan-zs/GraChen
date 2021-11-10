const express=require('express')
const mysql=require('mysql')

const db=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'xyj.....',
    database:'test'
})

const imgDetail=express.Router()

imgDetail.get('/image',(req,res)=>{
    db.query('select id,path from girls',(err,data)=>{
        if(err){
            return res.send('发生了错误'+err.message)
        }
        res.send(data)
    })
})

module.exports = imgDetail
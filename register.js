const express=require('express')
const sendMail=require('./sendMail')
const md5=require('md5')
const random=require('random')
const register=express.Router()
const mysql=require('mysql')

const db=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'xyj.....',
    database:'leaf'
})

register.get('/register',(req,res)=>{
    // console.log(res.query)
    const vcode=random.int(1000,9999)
    sendMail.sendMail(req.query.email,vcode,(error,info)=>{
        if(info){
            console.log('发送成功')
            const data={
                vcode:md5(vcode)
            }
            res.send(JSON.stringify(data))
        }else{
            return false
        }
    })
})

register.get('/registed',(req,res)=>{
    db.query(`select * from users where email='${req.query.email}'`,(err,result)=>{
        if(result.length===0){
            db.query(`insert into users(email,password) value('${req.query.email}','${req.query.password}')`,(err,result)=>{
                if(err) return res.send({status:301})
                if(result.affectedRows===1){
                    res.send({status:200})
                }
            }) 
        }else{
            res.send({status:302})
        }
    })

})

module.exports=register
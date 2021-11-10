const express=require('express')
const cors =require('cors')

const register=require('./register')
const login=require('./login')
const imgDetail=require('./imgDetail')

const app=express()
app.use(express.static('img',{
    setHeaders(res){
        res.attachment()
    }
}))
app.use(cors())
app.use(register)
app.use(login)
app.use(imgDetail)


app.listen(8090,()=>{
    console.log('server has running at http://127.0.0.1:8090')
})

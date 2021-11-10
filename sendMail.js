
const nodemailer = require('nodemailer')

// 创建传输对象
const transporter = nodemailer.createTransport({
    // host: 'smtp.ethereal.email',
    service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
    port: 465, // SMTP 端口
    secureConnection: true, // 使用了 SSL
    auth: {
      user: '2522563565@qq.com',
      // 这里密码不是qq密码，是你设置的smtp授权码，去qq邮箱后台开通、查看
      pass: 'uhcqdxbkoucfdjcj',
    }
});
function sendMail(emali,context,callback){
    transporter.sendMail({
        from:'2522563565@qq.com',
        to:emali,
        subject:'草枕图片社区注册验证码',
        // text:''
        html:`<h1>您的验证码为：${context} 请保管好自己的验证码</h1>`
    },callback)
}

module.exports={
    sendMail
}
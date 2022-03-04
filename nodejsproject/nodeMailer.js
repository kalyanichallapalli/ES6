const nodemailer = require('nodemailer')
const transportor = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'kalyanireddy9@gmail.com',
        password:SNidhi143$
    }
});

const mailOptions = {
    from:'kalyanireddy9@gmail.com',
    to: 'kchallapalli@gmail.com',
    subject: 'sending for kalyanireddy9 to challapalli',
    text: 'hallow nodejs'
}

transportor.sendMail(mailOptions,(err,data) =>{
    if(err){
        console.log('error')
    }else{
        console.log('email sent')
    }
})
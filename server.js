const { info } = require('console');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const nodemailer = require('nodemailer')

app.use(express.static('app'))
app.use(express.json())
app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/app/love.html")
})

app.post('/',(req,res)=>{
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: "madhannisanth018@gmail.com",
            pass: "Becoolbuddy018"
        }
    })

    const mailOption ={
        // from: req.body.email,
        to:"madhannisanth018@gmail.com",
        subject: `Message from ${req.body.name}`,
        text: `${req.body.name}: ${req.body.lname}`
    }
    transporter.sendMail(mailOption,(error,info)=>{
        if(error){
            console.log(error);
            res.send('error')
        }else{
            console.log('Email sent: ' + info.response);
            res.send('success')
        }
    })
})



server.listen(3030);
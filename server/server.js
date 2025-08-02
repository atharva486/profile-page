const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
let PORT =process.env.PORT || 5100;

app.post('/api/sendemail', async (req, res) => {
  const { Name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS 
      },
      
    });
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `New message from ${Name}`,
      text: message,
      replyTo:email
    });
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});


const start = async ()=>{
    try{
        app.listen(PORT,()=>{console.log('hey its working %s',PORT)}); 
    }
    catch(err){
      console.log(err);
        res.status(500);
    }
}
start();

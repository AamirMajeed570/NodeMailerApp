const express = require("express");
const sendEmail = require("./utils/send-email");
const app = express();
const port = process.env.PORT || 3000

// Set Engine
app.set("view engine","ejs");
// Serve Static Files
app.use(express.static("public"));
// Pass the Data
app.use(express.urlencoded({extends:false}))

// Router to render
app.get('/',(req,res)=>{
    res.render('email-form')
})

app.post('/send-email',async(req,res)=>{
    const {email,desc} = req.body;
    try {
        await sendEmail(email,desc)
        res.render('email-form',{
            status:'Success',
            message:'Email Sent Successfully'
        })
    } catch (error) {
        console.log(error)
        res.render('email-form',{
            status:'error',
            message:'Error in Sending Email'
        })
    }
})

app.listen(port,console.log(`Server Listening At http://localhost:${port}`))
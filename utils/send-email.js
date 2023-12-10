const nodemailer = require("nodemailer")
const sendEmail = async(to,messageContent)=>{
    try {
        const transpoter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            auth:{
                user:'yourgmailaccountname',
                pass:'tntm kgwi izky bbrx'
            }
            
        })
        const message = {
            to,
            subject:"New Message from Nodemailer App",
            html:`
            <h3>You have received a new message from nodemailer App</h3>
            ${messageContent}
            `
        }
        // Send the Email
        const info = await transpoter.sendMail(message)
        console.log('Message Sent',info.messageId)
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendEmail;

const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SG_API_KEY)

const myEmail = 'mohamad.horan51@gmailcom'
const sendWelcomeEmail = (email, name) => {
    sgMail.send ({
        to: email,
        from: myEmail,
        subject: 'Welcome to the app',
        text: 'Thanks for joining in, ' + name + '. Feel free to suggest any updates'
    })
}

const sendDeleteEmail = (email, name) => {
    sgMail.send ({
        to: email,
        from: myEmail,
        subject: 'we are sad to see leave ' + name,
        text: 'can you tell us what you did not like about the app, so we can work on improving it'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}
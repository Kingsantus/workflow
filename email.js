let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'projectbase67@gmail.com',
        pass: 'Kingsley042'
    }
});

let mailOptions = {
    from: 'projectbase67@gmail.com',
    to: 'akingsantus@gmail.com',
    subject: 'sending email using node.js',
    html: '<h1>welcome</h1><p>that was easy</p>'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    } else {
        console.log('Email sent: ' + inf0.response);
    }
});
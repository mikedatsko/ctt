'use strict';
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, // generated ethereal user
    pass: process.env.EMAIL_PASS // generated ethereal password
  }
});

module.exports = (receivers, message, callback) => {
  const mailOptions = {
    from: '"Compare Translations Tool" <send@gain.com.ua>',
    to: receivers.join(','),
    subject: 'CTT account details', // Subject line
    html: `
          <div><b>Hello</b>,</div>
          
          ${message}
          
          <hr>
          <h3><i>Compare Translations Tool</i></h3>`
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return callback(error);
    }
    // console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    callback(null, info);

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
}

const nodemailer = require("nodemailer");

const sendEmailRegis = {
  sendEmail: (email, uniqueString) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.email",
      port: 465,
      service: "gmail",
      secure: true,
      auth: {
        user: "tweetwar2022@gmail.com",
        pass: process.env.NODEMAILER_KEY,
      },
      tls: {
        rejectUnauthorized: false,
      },
      debug: true,
      logger: true,
    });

    const option = {
      from: "tweetwar2022@gmail.com",
      to: email,
      subject: "Email Confirmation",
      html: `Press <a href = http://localhost:3000/users/verify/${uniqueString}> here </a> to verify`,
    };

    // return new Promise((resolve, reject) => {
    transporter.sendMail(option, (err, info) => {
      console.log(info.envelope);
      console.log(info.messageId);
      // if (err) {
      //   console.log(err);
      //   reject(err);
      // }
      // resolve("success");
      // console.log("sent: " + info);
    });
    // });
  },
};

module.exports = sendEmailRegis;

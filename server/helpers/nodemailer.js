const nodemailer = require("nodemailer");

function sendEmail(email, uniqueString) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.email",
    port: 465,
    service: "gmail",
    secure: true,
    auth: {
      user: "tweetwar2022@gmail.com",
      pass: process.env.NODEMAILER_KEY,
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

  return new Promise((resolve, reject) => {
    transporter.sendMail(option, (err, info) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve("success");
      console.log("sent: " + info);
    });
  });
}

function sendEmailSubs(email) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.email",
    port: 465,
    service: "gmail",
    secure: true,
    auth: {
      user: "tweetwar2022@gmail.com",
      pass: process.env.NODEMAILER_KEY,
    },
    debug: true,
    logger: true,
  });

  const option2 = {
    from: "tweetwar2022@gmail.com",
    to: email,
    subject: "Success Subscribe",
    html: `
    <center>
    <img src="https://ik.imagekit.io/ftti7xeyu/Final/NodeMailerIMG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675755629074" width=500">
    </center>
    <div style="color: black; margin-top: 50px;">
    <h3>Dear valued member of Nihon No Life,</h3>
    <p>
        Sebagai anggota baru kami, kami ingin mengucapkan selamat datang dan terima kasih atas kepercayaan Anda pada
        Nihon No
        Life. Kami sangat senang bahwa Anda memilih untuk bergabung dengan komunitas kami dan berpartisipasi dalam dunia
        VTuber bersama kami.
        Dengan menjadi anggota, Anda akan memiliki akses ke berbagai manfaat eksklusif seperti konten terbaru dari
        VTuber
        kami, diskon dan promosi spesial, serta kesempatan untuk berinteraksi dan berpartisipasi dalam acara-acara
        khusus.
        Kami berharap bahwa Anda akan menikmati waktu bersama kami dan terus berkontribusi dalam komunitas Nihon No
        Life.
        Kami sangat menghargai dan menantikan kemitraan yang baik dengan Anda.
    </p>
    <h4>Salam hangat,</h4>
    <p>Tim Nihon No Life</p>
</div>
   
    `,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(option2, (err, info) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve("success");
      console.log("sent: " + info);
    });
  });
}

module.exports = { sendEmail, sendEmailSubs };

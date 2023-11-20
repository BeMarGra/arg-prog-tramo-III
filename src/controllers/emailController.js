const nodemailer = require("nodemailer");

const emailController = {}

const transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: false,
    auth: {
      user: 'postmaster@sandboxedb7555bd3d34a2da321bbf1ccf42a86.mailgun.org',
      pass: '34ffe95d4cbc65c094264f7c59f9e4c7-1c7e8847-ebea275f',
    },
  });

emailController.enviarEmail = async (req, res) => {
  
  const info = await transporter.sendMail({
    from: '"Equipo de argentina Programa 👻" <argentina@programa.com.ar>', // sender address
    to: "eybfotocopias@hotmail.com", // list of receivers
    subject: "Bienvenido", // Subject line
    text: "Bienvenido usuario", // plain text body
    html: "<b>Bienvenido a Argentina Programa 4.0</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  return res.json({ mensaje: 'Ingresó correctamente' });

};

module.exports = emailController;
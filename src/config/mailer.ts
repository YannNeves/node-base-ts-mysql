import nodemailer from 'nodemailer';

type Message = {
  from: string
  to: string,
  subject: string,
  html: string,
  text: string
};

export const sendMail = async (message: Message ) => {

  let transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "fd9426fc1fb1fa",
        pass: "4dea78de7b0621"
      }
  });

  await transport.sendMail(message);
}

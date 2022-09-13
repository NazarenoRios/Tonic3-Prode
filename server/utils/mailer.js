const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { User } = require("../models");
const OAuth2 = google.auth.OAuth2;
require("dotenv").config();

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);
oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

async function sendMail(id) {
  try {
    const userLogged = await User.findOne({ where: { id: id } });
    const accessToken = await oauth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.MAIL_ADDRESS,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    const currentURL = "http://localhost:3001/";
    const mailOptions = {
      from: process.env.MAIL_ADDRESS,
      to: `${userLogged.dataValues.email}`,
      subject: "Confirm your Email Address",
      html: `<h1>Thank you for registering!<h1>
            <h3>Please click the image below to confirm your email address.<h3>
            <a href= ${
              currentURL +
              "api/user/verifyEmail" +
              "/" +
              userLogged.dataValues.emailToken
            }> <img src="https://info.tonic3.com/hubfs/tonic3-logotype-color.png"></a>`,
    };
    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

module.exports = { sendMail };

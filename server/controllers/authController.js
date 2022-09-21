const { User } = require("../models");
const { generateToken } = require("../config/tokens");
const tokens = require("../config/tokens");
const { createHmac } = require("node:crypto");
const mailer = require("../utils/mailer");


const { OAuth2Client } = require("google-auth-library");
const router = require("../routes");
const { inc_registed_acc } = require("../metrics/utils/registers_summary");
const { permanence_counter } = require("../metrics/utils/user_summary");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.googlelogin = (req, res) => {
  const { credential } = req.body;
  client
    .verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    })
    .then((userInfo) => {
      const { email, given_name, family_name } = userInfo.payload;
      const password = credential;
      User.findOne({
        where: { email: email },
      }).then((user) => {
        if (!user) {
          res.cookie("name", given_name);
          res.cookie("lastname", family_name);
          res.cookie("email", email);
          res.cookie("password", password);
          res.sendStatus(200);
          // sessionStorage.setItem("email", email)
          // sessionStorage.setItem("name", name)
          // sessionStorage.setItem("password", password)
        } else {
          user.validatePassword(password).then((isValid) => {
            if (!isValid) return res.send(401);
            const payload = {
              id: user.id,
              email: user.email,
              name: user.name,
              lastname: user.lastname,
              admin: user.admin,
              isVerified: user.isVerified,
              phone: user.phone,
              state: user.state,
              city: user.city,
              address: user.address,
              zip: user.zip,
            };
            permanence_counter({id:user.id,name:user.name},'login_date')
            const token = tokens.generateToken(payload);
            // sessionStorage.setItem("token", token)
            res.cookie("token", token);
            res.send(payload);
          });
        }
      });
    });
};

exports.register = (req, res) => {
  const {email,name,lastname,phone,country,state,city,address,zip,password,} = req.body;
  User.findOne({ where: { email: req.body.email } }).then((user) => {
    if (!user) {
      User.create({
        email: email,
        password: password,
        name: name,
        lastname: lastname,
        emailToken: createHmac("sha256", process.env.SECRET)
          .update(`${email}`)
          .digest("hex"),
        isVerified: false,
        admin: false,
        phone: phone,
        country: country,
        state: state,
        city: city,
        address: address,
        zip: zip,
      })
        .then((user) =>
          mailer
            .sendMail(user.dataValues.id)
            .then((result) => console.log("Sending Email", result))
        )
        .then(() => res.sendStatus(201));
    } else {
      res.send({ message: "Usuario ya registrado" });
    }
  });
};

exports.verifyEmail = async (req, res) => {
  try {
    const { emailToken } = req.params;
    const user = await User.findOne({ where: { emailToken: emailToken } });
    if (user) {
      User.update(
        { isVerified: true, emailToken: null },
        { where: { emailToken: emailToken } }
      );
      inc_registed_acc()
      res.redirect("http://localhost:3000/");
      res.sendStatus(204);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.validation = (req, res) => {
  res.send(req.user);
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

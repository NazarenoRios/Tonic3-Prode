const { User } = require("../models");
const { generateToken } = require("../config/tokens");
const tokens = require("../config/tokens");
require("dotenv").config();

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.googlelogin = (req, res) => {
  const { credential } = req.body;

  client
    .verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    })
    .then((userInfo) => {
      //console.log(userInfo);
      const { email, given_name, family_name } = userInfo.payload;
      const password = email + email;
      User.findOne({
        where: { email: email },
      }).then((user) => {
        if (!user) {
          return User.create({
            email: email,
            password: password,
            fullname: given_name + family_name,
            admin: false
          }).then((user) => {
            user.validatePassword(password).then((isValid) => {
              if (!isValid) return res.send(401);

              const payload = {
                id: user.id,
                email: user.email,
                fullname: user.fullname,
                admin: user.admin,
              };
              const token = tokens.generateToken(payload);
              res.cookie("token", token);
              res.sendStatus(201);
            });
          });
        }
        user.validatePassword(password).then((isValid) => {
          if (!isValid) return res.send(401);

          const payload = {
            id: user.id,
            email: user.email,
            fullname: user.fullname,
            admin: user.admin
          };
          const token = tokens.generateToken(payload);
          res.cookie("token", token);
          res.sendStatus(201);
        });
      });
    });
};

exports.validation = (req, res) => {
    res.send(req.user);
};

exports.logout = (req, res) => {
    res.clearCookie("token");
    res.sendStatus(204);
};


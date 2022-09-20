const Sequelize = require("sequelize");

const db = new Sequelize("prode", "postgres", null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;

//postgres
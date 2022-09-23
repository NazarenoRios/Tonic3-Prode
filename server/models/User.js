const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const bcrypt = require("bcrypt");

class User extends Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }

  validatePassword(password) {
    return this.hash(password, this.salt).then(
      (newHash) => newHash === this.password
    );
  }
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true, 
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailToken: {
      type: DataTypes.STRING,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
    },
    salt: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.BIGINT,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.TEXT,
    },
    zip: {
      type: DataTypes.INTEGER,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    registrationToken: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, modelName: "user" }
);

//generar el salt y aplicarlo a la instancia de usuario
User.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync();
  user.salt = salt;
  //generar el hash con el password-salt para asignarselo al usuario
  return user.hash(user.password, salt).then((hash) => {
    user.password = hash;
  });
});

/* User.beforeCreate( async (user) => {
  try {
    const data = await axios.get("https://geolocation-db.com/json/")
    return console.log("AAAAAA",data.data)
  } catch(error){
    console.log(error)
  }
  

}) */

module.exports = User;

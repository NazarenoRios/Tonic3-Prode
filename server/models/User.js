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
      validate:{
        len: [3,20]
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [3,20]
      }
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
      defaultValue: false,
    },
    salt: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.BIGINT,
      validate: {
        isInt: true,
        len: [8, 13],
      },
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      validate: {
        len: [4, 25],
      },
    },
    city: {
      type: DataTypes.STRING,
      validate: {
        len: [4, 25],
      },
    },
    address: {
      type: DataTypes.TEXT,
      validate:{
        len: [3,25]
      }
    },
    zip: {
      type: DataTypes.INTEGER,
      validate:{
        isInt:true,
        len: [1,15]
      }
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    registrationToken: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    awards: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
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

User.addHook("afterCreate", (user) => {
  if (user.id === 1) {
    return User.update({ admin: true }, { where: { id: 1 } });
  }
});

module.exports = User;

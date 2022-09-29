const S = require("sequelize")
const db = require("../config/db")

class Notification extends S.Model{}

Notification.init({
    tittle: {
        type: S.STRING,
        defaultValue: ""
    },
    body: {
        type: S.STRING,
        defaultValue: ""
    },
    img: {
        type: S.STRING
    },
    date : {
        type: S.DATE
    },
    userId : {
        type:S.INTEGER
    }
},{
    sequelize:db , modelName: "notification"
})

module.exports = Notification
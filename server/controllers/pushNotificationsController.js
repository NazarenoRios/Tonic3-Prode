const { User } = require("../models");

exports.pushNotifications = async (req, res) => {

    const userId = req.user.id;
    const user = await User.findByPk(userId)
    const tokensUser =  Object.assign([], user.dataValues.registrationToken); 
    await tokensUser.push(req.body.registrationToken)

    User.update({registrationToken:tokensUser}, {
        where: { id: userId },
        returning: true,
        individualHooks: true,
      }).then(() => res.sendStatus(204));
}
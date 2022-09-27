const { User } = require("../models");

exports.pushNotifications = (req, res) => {
    const userId = req.user.id;
    User.update(req.body, {
        where: { id: userId },
        returning: true,
        individualHooks: true,
      }).then(() => res.sendStatus(204));
}
const User = require("../models/User");

module.exports = {
  validate_admin: async (req, res, next) => {
    const user = await User.findByPk(req.user.id);
    if (!user) return res.sendStatus(404);
    const { admin } = user;
    if (!admin)return res.sendStatus(401);
    next();
  },
  validate_user: async (req, res, next) => {
    const { admin } = await User.findByPk(req.user.id);
    console.log(admin, req.user.id, req.params.id);
    if (admin) return next();
    if (req.user.id !== req.params.id) return res.sendStatus(401);
    next();
  },
};

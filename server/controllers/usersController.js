const { User } = require("../models");

//traer todos los usuarios
exports.users = (req, res) => {
    User.findAll()
    .then((users)=> res.send(users))
};
//traer un usuario por id
exports.user = (req, res) => {
    const {id} = req.params;
    User.findOne({
        where: { id : id },
    }).then((user) => res.send(user));
}
//editar un perfil de usuario (ver si no se puede hacer todo en uno con el password)
exports.editProfile = (req, res) => {
    const userId = req.user.id;
    User.update(req.body, {
        where: {id : userId},
        returning: true,
    })
    .then(() => res.sendStatus(204));
};
//editar password de usuario
exports.changePassword = (req, res) => {
    const userId = req.user.id;
    User.update(req.body, {
        where: {id : userId},
        returning: true,
        individualHooks: true,
    })
    .then(() => res.sendStatus(204))
}
const { User, Points, Bet } = require("../models");
const BetServices = require("../services/bet.services");

//traer todos los usuarios
exports.users = (req, res) => {
  User.findAll().then((users) => res.send(users));
};
//traer un usuario por id
exports.user = (req, res) => {
  const { id } = req.params;
  User.findOne({
    where: { id: id },
  }).then((user) => res.send(user));
};
//editar un perfil de usuario (ver si no se puede hacer todo en uno con el password)
exports.editProfile = (req, res) => {
  const userId = req.user.id;
  User.update(req.body, {
    where: { id: userId },
    returning: true,
  }).then(() => res.sendStatus(204));
};
//editar password de usuario
exports.changePassword = (req, res) => {
  const userId = req.user.id;
  User.update(req.body, {
    where: { id: userId },
    returning: true,
    individualHooks: true,
  }).then(() => res.sendStatus(204));
};

//Borrar a un usuario, Cualquiera puede borrarlo, faltan las condiciones para que sea solo el admin
exports.deleteUser = async (req,res)=>{
  const { id } = req.params
  const user_points= await Points.findAll({where:{userId:id}})
  const user_bets= await Bet.findAll({where:{userId:id}})
  if(user_points.length)user_points.map((point_table)=>point_table.destroy())
  if(user_bets.length)user_bets.map(user_bet=>user_bet.destroy())
    User.destroy({where:{
      id: id
    }})
    .then(()=> res.sendStatus(204))
    .catch((error)=> console.log(error))
  }


//togglear un usuario a admin true/false
exports.toggleAdmin = (req, res) => {
  const { id } = req.params;
  if (req.user.admin && req.user.id !== id) {
    User.findByPk(id).then((user) => {
      if (user.admin) {
        user
          .update({ admin: false })
          .then(() => {
            res.sendStatus(201);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        user
          .update({ admin: true })
          .then(() => {
            res.sendStatus(201);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }
};

//Buscar usuario por nombre
exports.findByName = (req,res)=>{
  const { name } = req.params
  User.findOne({where:{
    name: name
  }})
  .then((user)=> res.status(200).send(user))
  .catch((error)=> console.log(error))
}
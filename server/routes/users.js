const express = require("express");
const router = express.Router();
const {validateAuth} = require("../middleware/auth")


const {googlelogin, logout, validation, verifyEmail, register } = require("../controllers/authController")
const {users, user, editProfile, changePassword, toggleAdmin, deleteUser, findByName} = require("../controllers/usersController")
const {userIp} = require("../controllers/userIpController");
const { User } = require("../models");
const {pushNotifications} = require("../controllers/pushNotificationsController");


router.post("/register", register);
router.get("/verifyEmail/:emailToken", verifyEmail);
router.put("/googlelogin", googlelogin);
router.post("/logout", validateAuth, logout);
router.get("/me", validateAuth, validation);
router.get("/", users);
router.get("/:id", validateAuth, user);
router.put("/profile", validateAuth, editProfile);
router.put("/changePassword", validateAuth, changePassword);
router.put("/toggleAdmin/:id", toggleAdmin);
router.post("/userIp", userIp);
router.post("/pushNotifications", validateAuth , pushNotifications);
router.delete("/deleteUser/:id", validateAuth, deleteUser)
router.get("/userName/:name", validateAuth ,findByName )
router.get("/user/:id", (req,res)=>{
    const { id } = req.params
    User.findByPk(id)
    .then((user)=> res.send(user))
    .catch((error)=>console.log(error))
})


module.exports = router;

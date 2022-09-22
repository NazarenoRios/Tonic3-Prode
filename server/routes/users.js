const express = require("express");
const router = express.Router();
const {validateAuth} = require("../middleware/auth")


const {googlelogin, logout, validation, verifyEmail, register, showIP } = require("../controllers/authController")
const {users, user, editProfile, changePassword, toggleAdmin, deleteUser} = require("../controllers/usersController")
const {userIp} = require("../controllers/userIpController")


router.post("/register", register);
router.get("/verifyEmail/:emailToken", verifyEmail);
router.put("/googlelogin", googlelogin);
router.post("/logout", validateAuth, logout);
router.get("/me", validateAuth, validation);
router.get("/", validateAuth, users);
router.get("/:id", validateAuth, user);
router.put("/profile", validateAuth, editProfile);
router.put("/changePassword", validateAuth, changePassword);
router.put("/toggleAdmin/:id", validateAuth, toggleAdmin);
router.post("/userIp", userIp);
router.delete("/deleteUser/:id", validateAuth, deleteUser)

module.exports = router;

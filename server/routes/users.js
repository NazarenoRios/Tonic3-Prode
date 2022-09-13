const express = require("express");
const router = express.Router();
const {validateAuth} = require("../middleware/auth")


const {googlelogin, logout, validation, verifyEmail, register, showIP } = require("../controllers/authController")
const {users, user, editProfile, changePassword} = require("../controllers/usersController")


router.post("/register", register)
router.get("/verifyEmail/:emailToken", verifyEmail)
router.put("/googlelogin", googlelogin);
router.post("/logout", validateAuth, logout);
router.get("/me", validateAuth, validation);
router.get("/", users);
router.get("/:id", user);
router.put("/profile", editProfile)
router.put("/changePassword", changePassword)
router.post("/showIP", showIP)





module.exports = router;

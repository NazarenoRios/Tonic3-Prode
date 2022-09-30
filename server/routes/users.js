const express = require("express");
const router = express.Router();
const {validateAuth} = require("../middleware/auth")


const {googlelogin, logout, validation, verifyEmail, register } = require("../controllers/authController")
const {users, user, editProfile, changePassword, toggleAdmin, deleteUser, findByName} = require("../controllers/usersController")
const {userIp} = require("../controllers/userIpController");
const { User } = require("../models");
const {pushNotifications} = require("../controllers/pushNotificationsController");
const { validate_admin, validate_user } = require("../middleware/validate_admin");

/**
*  @swagger
*  components:
*  schemas:
*   User:
*     type : object
*     properties:
*       name:
*         type: string
*         description : name of the user
*       lastname : 
*         type : string
*         description: lastname of the user
*       email:
*         type : string
*         description: email of the user
*       password:
*         type : string
*         description: password of the user
*       emailToken:
*         type : string
*         description: emailToken of the user
*       isVerified:
*         type : boolean
*         description: check if the email of the user if verified
*       salt:
*         type : string
*         description: salt to hash the users password
*       phone:
*         type : bigint
*         description: phone of the user
*       country:
*         type : string
*         description: country of the user
*       state:
*         type : string
*         description: state of the user
*       city:
*         type : string
*         description: city of the user
*       address:
*         type : text
*         description: address of the user
*       zip:
*         type : integer
*         description: zip code of the user
*       admin:
*         type : boolean
*         description: check if the user account is admin
*       registrationToken:
*         type : array
*         description: token used to send push  notification to user`s device
*       awards:
*         type : array
*         description: awards that the user as won
*     required:
*       -name: 
*       -lastname: 
*       -email: 
*       -password: 
*       -emailToken:  
*       -phone: 
*       -country: 
*       -state: 
*       -city: 
*       -address:
*       -zip: 
*     example:
*       name: Elon
*       lastname: Musk
*       email : elon@gmail.com
*       password: teslaftw
*       phone: 235515593
*       country: Argentina
*       state: Entre Rios
*       city: Crespo
*       address: calle siempre viva 123
*       zip: 4636
*/



router.post("/register", register);
/**
*   @swagger
*  /api/user/register:
*   post:
*     sumary: create a new user
*     tags: [User]
*     requestBody:
*       required: true
*       content:
*         aplication/json:
*           schema:
*             type: string
*             $ref: '#components/schemas/User'
*     responses:
*       201:
*         description: new user created!
*/



router.get("/verifyEmail/:emailToken", verifyEmail);
/**
*  @swagger
*  /api/verifyEmail/{emailToken}:
*   get:
*     sumary: verify the user email
*     tags: [User]
*     parameters:
*       - in: path
*         name: emailToken
*         schema:
*          type: string
*         required: true
*         description: the award id
*     responses:
*       200:
*         description: email registration complete!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/User'
*/


router.put("/googlelogin", googlelogin);
router.post("/logout", validateAuth, logout);
/**
*   @swagger
*  /api/user/logout:
*   post:
*     sumary: logout current user
*     tags: [User]
*     requestBody:
*       required: false
*       content:
*         aplication/json:
*           schema:
*             type: string
*             $ref: '#components/schemas/User'
*     responses:
*       201:
*         description: user logout!
*/
router.get("/me", validateAuth, validation);
/**
*   @swagger
*  /api/user/me:
*   get:
*     sumary: send user payload to frontend
*     tags: [User]
*     requestBody:
*       required: false
*       content:
*         aplication/json:
*           schema:
*             type: string
*             $ref: '#components/schemas/User'
*     responses:
*       200:
*         description: payload sent!
*/
router.get("/", users);
/**
*   @swagger
*  /api/user:
*   get:
*     sumary: get all users
*     tags: [User]
*     requestBody:
*       required: false
*       content:
*         aplication/json:
*           schema:
*             type: string
*             $ref: '#components/schemas/User'
*     responses:
*       200:
*         description: Users founded!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/User'
*       404: 
*         description: Users not founded
*/
router.get("/:id", validateAuth, user);
/**
*  @swagger
*  /api/user/{id}:
*   get:
*     sumary: get an user by id
*     tags: [User]
*     parameters:
*       - in: path
*         name: id
*         schema:
*          type: string
*         required: true
*         description: the user id
*     responses:
*       200:
*         description: user found!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/User'
*       404: 
*         description: user not found
*/
router.put("/profile", validateAuth, editProfile);
/**
*   @swagger
*  /api/user/profile:
*   put:
*     sumary: edit a user by id
*     tags: [User]
*     requestBody:
*       required: true
*       content:
*         aplication/json:
*           schema:
*             type: string
*             $ref: '#components/schemas/User'
*     responses:
*       200:
*         description: user edited!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/User'
*/
router.put("/changePassword", validateAuth, changePassword);
/**
*   @swagger
*  /api/user/changePassword:
*   put:
*     sumary: change user password
*     tags: [User]
*     requestBody:
*       required: true
*       content:
*         aplication/json:
*           schema:
*             type: string
*             $ref: '#components/schemas/User'
*     responses:
*       200:
*         description: password edited!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/User'
*/
router.put("/toggleAdmin/:id", validateAuth,validate_admin, toggleAdmin);
/**
*  @swagger
*  /api/user/toggleAdmin/{id}:
*   put:
*     sumary: toggle a user to admin
*     tags: [User]
*     parameters:
*       - in: path
*         name: id
*         schema:
*          type: string
*         required: true
*         description: the user id
*     responses:
*       200:
*         description: user toggled!
*       404: 
*         description: cannot toggle user
*/
router.post("/userIp", userIp);
/**
*   @swagger
*  /api/user/userIp:
*   post:
*     sumary: get userIp to set Country
*     tags: [User]
*     requestBody:
*       required: false
*       content:
*         aplication/json:
*           schema:
*             type: string
*             $ref: '#components/schemas/User'
*     responses:
*       201:
*         description: User Country set!
*/
router.post("/pushNotifications", validateAuth , pushNotifications);
/**
*   @swagger
*  /api/user/pushNotifications:
*   post:
*     sumary: set Registration token on user Model
*     tags: [User]
*     requestBody:
*       required: false
*       content:
*         aplication/json:
*           schema:
*             type: string
*             $ref: '#components/schemas/User'
*     responses:
*       201:
*         description: registration token saved!
*/
router.delete("/deleteUser/:id", validateAuth,validate_user, deleteUser)
/**
*  @swagger
*  /api/user/deleteUser/{id}:
*   delete:
*     sumary: delete a user by id
*     tags: [User]
*     parameters:
*       - in: path
*         name: id
*         schema:
*          type: string
*         required: true
*         description: the user id
*     responses:
*       200:
*         description: user deleted!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/User'
*       404: 
*         description: user not found
*/
router.get("/userName/:name", validateAuth ,findByName )
/**
*  @swagger
*  /api/user/userName/{name}:
*   get:
*     sumary: get an user by name
*     tags: [User]
*     parameters:
*       - in: path
*         name: name
*         schema:
*          type: string
*         required: true
*         description: the user name
*     responses:
*       200:
*         description: user found!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/User'
*       404: 
*         description: user not found
*/
router.get("/user/:id", (req,res)=>{
    const { id } = req.params
    User.findByPk(id)
    .then((user)=> res.send(user))
    .catch((error)=>console.log(error))
})


module.exports = router;
const express = require("express")
const AwardController = require("../controllers/award.controller")
const { validate_admin } = require("../middleware/validate_admin")
const router = express.Router()


/**
*  @swagger
*  components:
*  schemas:
*   Award:
*     type : object
*     properties:
*       place:
*         type: integer
*         description : place of the winner
*       name : 
*         type : string
*         description: name of the award
*       img:
*         type : string
*         description: image of the award
*     required:
*       - place
*       - name
*       - img
*     example:
*       place: 1
*       name: House
*       img : https://img.freepik.com/foto-gratis/casa-aislada-campo_1303-23773.jpg?w=2000
*/





//ruta para crear un premio
router.post("/create",validate_admin,AwardController.createAward)
/**
*   @swagger
*  /api/award/create:
*   post:
*     sumary: create a new award
*     tags: [Award]
*     requestBody:
*       required: true
*       content:
*         aplication/json:
*           schema:
*             type: string
*             $ref: '#components/schemas/Award'
*     responses:
*       201:
*         description: new award created!
*/

//ruta para traer todos los premios
router.get("/all",AwardController.getAllAward)
/**
*   @swagger
*  /api/award/all:
*   get:
*     sumary: get all awards
*     tags: [Award]
*     requestBody:
*       required: false
*       content:
*         aplication/json:
*           schema:
*             type: string
*             $ref: '#components/schemas/Award'
*     responses:
*       200:
*         description: all awards founded!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Award'
*       404: 
*         description: awards not found
*/



//ruta para encontrar un premio por id
router.get("/:id",AwardController.findByid)
/**
*  @swagger
*  /api/award/{id}:
*   get:
*     sumary: get an award by id
*     tags: [Award]
*     parameters:
*       - in: path
*         name: id
*         schema:
*          type: string
*         required: true
*         description: the award id
*     responses:
*       200:
*         description: award found!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Award'
*       404: 
*         description: award not found
*/



//ruta para modificar un premio
router.put("/modify/:id",validate_admin,AwardController.modifyAward)
/**
*  @swagger
*  /api/award/{id}:
*   put:
*     sumary: modify a award by id
*     tags: [Award]
*     parameters:
*       - in: path
*         name: id
*         schema:
*          type: string
*         required: true
*         description: the award id
*     responses:
*       200:
*         description: award modified!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Award'
*       404: 
*         description: award not found
*/


//ruta para eliminar un premio
router.delete("/:id",validate_admin,AwardController.deleteAward)
/**
*  @swagger
*  /api/award/{id}:
*   delete:
*     sumary: delete a award by id
*     tags: [Award]
*     parameters:
*       - in: path
*         name: id
*         schema:
*          type: string
*         required: true
*         description: the award id
*     responses:
*       200:
*         description: award deleted!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Award'
*       404: 
*         description: award not found
*/

module.exports = router
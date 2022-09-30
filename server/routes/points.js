const express = require("express")
const PointsControllers = require("../controllers/points.controller")
const router = express.Router()


/** 
*  @swagger
*  components:
*  schemas:
*   Point:
*     type : object
*     properties:
*       points:
*         type: integer
*         description: the points of the users 
*     required:
*       - points
*     example:
*       points: 67
*/



//ruta para traer todos los puntos de un torneo
/**
*  @swagger
*  /api/tournament/{id}:
*   get:
*     sumary: return points in a tournament
*     tags: [Point]
*     parameters:
*       - in: path
*         name: id
*         schema:
*          type: string
*         required: true
*         description: the tournament id
*     responses:
*       200:
*         description: points found!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Point'
*       404: 
*         description: tournament not found
*/
router.get("/tournaments/:id",PointsControllers.getAllPointsInTournament)


//ruta para traer tabla de puntos por fase
/**
*  @swagger
*  /api/point/fasepoint/{id}/{tournamentId}:
*   get:
*     sumary: return a tournament
*     tags: [Point]
*     parameters:
*       - in: path
*         name: id
*         schema:
*          type: integer
*         required: true
*         description: the user id
*       - in: path
*         name: id
*         schema:
*          type: integer
*         required: true
*         description: the tournament id
*     responses:
*       200:
*         description: tournament found!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Point'
*       404: 
*         description: tournament not found
*/
router.get("/fasepoint/:id/:tournamentId", PointsControllers.getFasePoints)


//ruta para borrar tabla individual de points
/**
*  @swagger
*  /api/point/{userId}:
*   delete:
*     sumary: delete points of user
*     tags: [Point]
*     parameters:
*       - in: path
*         name: userId
*         schema:
*           type: string
*         required: true
*         description: the user id
*     responses:
*       200:
*         description: team deleted!
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/schemas/Point'
*       404: 
*         description: team not found
*/  
router.delete("/:userId", PointsControllers.deleteTablePoints)

module.exports = router
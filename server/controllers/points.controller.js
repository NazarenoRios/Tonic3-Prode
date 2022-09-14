const PointsServices = require("../services/points.services");

class PointsControllers {

    static async getTournamentPoints (req,res){
        try{
            const points = await PointsServices.getTournamentPoints(req.params.id,req.body.id)
            return await res.send(points)
        }catch (error){
            console.log(error);
        }
    }

}

module.exports = PointsControllers
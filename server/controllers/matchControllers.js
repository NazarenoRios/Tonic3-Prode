const Match_services = require("../services/match_services")
const PointsServices = require("../services/points.services")

class MatchControllers {
    static async setAllMatches(req,res,next){
        if(!req.body)return res.sendStatus(400)
        try{
            const match = await Match_services.setMatchesData(req.body)
            if(!match)return res.sendStatus(404)
            return res.sendStatus(204)
        }
        catch(e){
            console.log(e)
            res.sendStatus(404)
        }
    }
    static async getMatches(req,res){
        const {tournamentId}=req.params
        if(!tournamentId)return res.sendStatus(400)
        try{
            const matches= await Match_services.getAllMatches(tournamentId)
            if(!matches.length)return res.sendStatus(404)
            return res.status(200).send(matches)
        }
        catch(e){
            console.log(e)
            return res.sendStatus(404)
        }
    }

    static async getMatches2(req,res){
        const {tournamentId, fase}=req.params
        if(!tournamentId)return res.sendStatus(400)
        try{
            const matches= await Match_services.getAllMatches2(tournamentId,fase)
            if(!matches.length)return res.sendStatus(404)
            return res.status(200).send(matches)
        }
        catch(e){
            console.log(e)
            return res.sendStatus(404)
        }
    }

    static async end_matches(req,res){
        try{
            const match_ended= await Match_services.end_matches(req.body)
            if(match_ended){
                const match = await Match_services.getMatch(req.body[0].id)
                const done = await PointsServices.addPoint(match)
               return res.status(204).send(done)
            }
            res.status(401).send("no content")
        }catch(e){
            console.log(e)
        }
    }
}

module.exports=MatchControllers
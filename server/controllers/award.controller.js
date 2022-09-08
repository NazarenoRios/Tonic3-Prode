const AwardServices = require("../services/award.services")

class AwardController{
    static async createAward (req,res){
        try{
            const award = await AwardServices.createAward(req.body)
            return res.status(201).send(award)
        } catch(error){
            console.log(error)
        }
    }

    static async getAllAward (req,res){
        try{
            const award = await AwardServices.getAllAward()
            return res.status(200).send(award)
        } catch(error){
            console.log(error)
        }
    }

      static async findByid(req,res){
        try{
            const award = await AwardServices.findByid(req.params.id)
            return res.status(200).send(award)
        } catch(error){
            console.log(error)
        }
    }

    static async modifyAward(req,res){
        try{
            const award = await AwardServices.findByid(req.params.id)
            const updatedAward = await AwardServices.modifyAward(award,req.body)
            return res.status(200).send(updatedAward)
        } catch(error){
            console.log(error)
        }
    }

    static async deleteAward(req,res){
        try{
            await AwardServices.deleteAward(req.params.id)
            return res.sendStatus(204)
        } catch(error){
            return res.sendStatus(500).json({message:error.message})
        }
    }
}

module.exports = AwardController
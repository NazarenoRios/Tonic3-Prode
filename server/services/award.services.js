const { User } = require("../models")
const Award = require("../models/Award")
const PointsServices = require("./points.services")

class AwardSevices {
    static async createAward (body){
        try{
           return await Award.create(body)
        } catch(error){
            console.log(error)
        }
    }

    static async getAllAward (){
        try{
           return await Award.findAll()
        } catch(error){
            console.log(error)
        }
    }    

    static async findByid(id){
        try{
           return await Award.findByPk(id)
            
        } catch(error){
            console.log(error)
        }
    }

    static async findByName(name){
        try{
           return await Award.findAll({
            where:{name: {
                [Op.iLike]: `%${name}%`
            }}
           })
            
        } catch(error){
            console.log(error)
        }
    }

    static async findAward (property,value){
        try{
          return await Award.findAll({
            where:{[property]: {
                [Op.iLike]: `%${value}%`
            }}
           })  
        }catch(error){
            console.log(error);
        }
    }

    static async sendAward(tournamentId){
        try{
            const usersPoints = await PointsServices.getAllPointsInTournament(tournamentId)
            const points = []
            usersPoints.forEach(point=>points.push(point.points))
            console.log("esto son los puntos",points);
            const maxPoint = Math.max(...points)
            const winner = usersPoints.filter(point=>point.points === maxPoint)
            console.log("este es el winner",winner[0].dataValues.userId);
            const userWinner = await User.findByPk(winner[0].dataValues.userId)
            console.log("este es el userWinner",userWinner.dataValues.awards);
            const countryAward = await Award.findOne({where:{country:userWinner.country}})
            console.log("este es el premio que le corresponde", countryAward);
            const arrAward = userWinner.dataValues.awards
            console.log("este es arrAward",arrAward);
            arrAward.push(countryAward.id)
            User.bulkBuild
            console.log("esto es arrAward despues de pushear", arrAward);
            userWinner.dataValues.awards = arrAward
            userWinner.save()
            console.log("EL GANADOR ES !!!!!!!", userWinner );
        }catch(error){
            console.log(error);
        }
    }
    static async modifyAward(award,{name,img,info}){
        try{
            award.name = name
            award.img = img
            award.info = info
        return await Award.save()
        } catch(error){
            console.log(error)
        }
    }

    static async deleteAward(id){
        try{
          return await Award.destroy({ where:{id} })       
        } catch(error){
           return res.sendStatus(500).json({message:error.message})
        }
    }
}

module.exports = AwardSevices
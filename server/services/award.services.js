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
            usersPoints.sort((a,b)=>{
                return b.dataValues.points - a.dataValues.points
            })
            
            const winners = []
            for (let i = 0; i < 5; i++) {
                let user = await User.findByPk(usersPoints[i].dataValues.userId)
                winners.push(user.dataValues)
            }

            for (let i = 0; i < winners.length; i++) {
               let award = await Award.findOne({
                where:
                {country : winners[i].country,
                 place : [i+1]
                }})
                const user = await User.findByPk(winners[i].id)
               const winnerAwards =    Object.assign([], user.dataValues.awards); 
               await winnerAwards.push(award.id)
               await user.update({awards : winnerAwards})
            }
        }catch(error){
            console.log(error);
        }
    }
    static async modifyAward(award,{name,img,info,country,place}){
        try{
            award.name = name
            award.img = img
            award.info = info
            award.country = country
            award.place = place
        return await award.save()
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
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
            //traigo los puntos de todos los usuarios,pusheo dentro de un arrerglo vacio para encontrar el mayor, 
            // traigo el usuario ganador con mayor cantidad de puntos en el torneo guardo los valores que tenia en el campo awards
            //y pusheo dentro de el el nuevo premio, updateo la nueva data y retorno

            const usersPoints = await PointsServices.points(tournamentId)
            const points = []
            usersPoints.forEach(point=>points.push(point.points))
            const maxPoint = Math.max(...points)
            const winner = usersPoints.filter(point=>point.points === maxPoint)
            const userWinner = await User.findByPk(winner[0].dataValues.userId)
            const countryAward = await Award.findOne({where:{country:userWinner.country}})            
            const winnerAward =    Object.assign([], userWinner.dataValues.awards); 
            await winnerAward.push(countryAward.id)
            const winnerUpdated = await userWinner.update({awards : winnerAward})

            return winnerUpdated
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
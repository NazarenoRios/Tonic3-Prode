const Award = require("../models/Award")

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
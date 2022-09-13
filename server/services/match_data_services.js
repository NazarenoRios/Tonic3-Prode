const { Op } = require("sequelize");
const { Data_match } = require("../models");

class Match_data_services {
    static set_matches_data(matches_data){
        if(!Array.isArray(matches_data))return false
        try{
            return bulkCreate(matches_data, { updateOnDuplicate: ["teamId"] }).then(()=>true)
        }catch{
            return false
        }

    }
}

module.exports = Match_data_services;
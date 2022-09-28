const { inc_user_permanency } = require("../custom_metrics/registers_users");
const { inc_user_log, reset_user_log } = require("../custom_metrics/week_logs_summary");
const { parse_date, calculate_log_time } = require("./init_date");
const before_user_update='before_user_update'
const last_user_update='last_user_update'
const total = 'total'
const set_dates_props=(permanence_logs,date_now,country)=>{
    const {year,month,day,str_day}=date_now
            if(!permanence_logs[year]){
                inc_user_permanency(country)
                reset_user_log()
                inc_user_log(str_day)
                permanence_logs[year]={[month]:{[day]:{}}}}
            else if(!permanence_logs[year][month]){
                reset_user_log()
                inc_user_log(str_day)
                inc_user_permanency(country)
                permanence_logs[year][month]={[day]:{}}}
                else if(!permanence_logs[year][month][day]){
                    inc_user_log(str_day)
                inc_user_permanency(country)
                permanence_logs[year][month][day]={}}
            
                return permanence_logs
}


const set_log_data=(prop_day,date_now)=>{
    const {hours,mins,seconds}=date_now
    if(!prop_day.before_user_update){
        prop_day[before_user_update]={hours,mins,seconds}
        prop_day[total]={time_in_sec:0}
        return prop_day
    }
        prop_day[last_user_update]={hours,mins,seconds}
    const {time_in_sec,ausence}=calculate_log_time(prop_day.last_user_update,prop_day.before_user_update)
    if(ausence)return prop_day[before_user_update]=prop_day[last_user_update]
    prop_day[total].time_in_sec+=time_in_sec
    prop_day[before_user_update]=prop_day[last_user_update]
    return prop_day
}


module.exports={
     user_json_nav:(permanence_logs,country)=>{
        const {year,month,day,hours,mins,seconds,str_day}=parse_date(new Date)
        const date_now={year,month,day,hours,mins,seconds,str_day}
         permanence_logs= set_dates_props(permanence_logs,date_now,country)
        permanence_logs[year][month][day]= set_log_data(permanence_logs[year][month][day],date_now)
            return permanence_logs
    }
}
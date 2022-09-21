const { parse_date, calculate_log_time } = require("./init_date");


const set_dates_props=(permanence_logs,date_now)=>{
    const {year,month,day,hours,mins}=date_now
    console.log(permanence_logs)
            if(!permanence_logs[year])permanence_logs[year]={}
            if(!permanence_logs[year][month])permanence_logs[year][month]={}
            if(!permanence_logs[year][month][day])permanence_logs[year][month][day]={}
            console.log(permanence_logs)
            return permanence_logs
}


const set_log_data=(prop_day,log_type,date_now)=>{
    const {year,month,day,hours,mins}=date_now
    prop_day[log_type]={hours,mins}
    console.log(prop_day)
    if(log_type==='login_date')return prop_day
    if(!prop_day['total'])prop_day['total']={mins:0,hours:0}
    const {total_hours,total_mins}=calculate_log_time(prop_day[log_type],prop_day.login_date)
    prop_day['total'].hours+=total_hours
    prop_day['total'].mins+=total_mins
    return prop_day
}


module.exports={
     user_json_nav:(permanence_logs,log_type)=>{
        const {year,month,day,hours,mins}=parse_date(new Date)
        const date_now={year,month,day,hours,mins}
        console.log(date_now)
         permanence_logs= set_dates_props(permanence_logs,date_now)
         console.log(permanence_logs)
        permanence_logs[year][month][day]= set_log_data(permanence_logs[year][month][day],log_type,date_now)
            return permanence_logs
    }
}
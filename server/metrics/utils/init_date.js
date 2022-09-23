
module.exports={
    parse_date:(date)=>{
        const day=date.getDate()
        const year=date.getFullYear()
        const month=date.getMonth()
        const hours=date.getHours()
        const mins = date.getMinutes()
        return {day,year,month,date,hours,mins}
    },
    calculate_log_time:(logout_date,login_date)=>{
        const total_hours= logout_date.hours-login_date.hours
        const total_mins= Math.floor(logout_date.mins-login_date.mins)
        if(total_hours || total_mins>10)return {ausence:true}
        return {total_hours,total_mins}
    }
}
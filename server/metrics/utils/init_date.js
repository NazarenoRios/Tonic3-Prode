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
        console.log(total_hours)
        const total_mins= Math.floor(logout_date.mins-login_date.mins)
        console.log({hours:total_hours,mins:total_mins})
        return {total_hours,total_mins}
    }
}
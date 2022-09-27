const numMonth_to_letter = (month) => {
  switch (month) {
    case 1:
      return "January";

    case 2:
      return "February";

    case 3:
      return "March";

    case 4:
      return "April";

    case 5:
      return "may";

    case 6:
      return "June";

    case 7:
      return "July";

    case 8:
      return "August";

    case 9:
      return "September";

    case 10:
      return "October";

    case 11:
      return "November";

    case 12:
      return "December";
    default:
      break;
  }
};
module.exports = {
  parse_date: (date) => {
    const day = date.getDate();
    const year = date.getFullYear();
    let month = date.getMonth();
    const hours = date.getHours();
    const mins = date.getMinutes();
    const str_month = numMonth_to_letter(month)
    const seconds= date.getSeconds()
    return { day, year, str_month,month, date, hours, mins, seconds };
  },
  calculate_log_time: (logout_date, login_date) => {
    const total_hours = (logout_date.hours - login_date.hours)*120;
    const total_mins = Math.floor((logout_date.mins - login_date.mins) *60) 
    const time_in_sec=Math.floor(logout_date.seconds - login_date.seconds)+total_hours + total_mins
    
    if (time_in_sec > 600) return { ausence: true };
    return { time_in_sec };
  },
};

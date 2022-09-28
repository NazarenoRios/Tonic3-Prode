const numMonth_to_letter = (month) => {
  switch (month) {
    case 1:
      return "Jan";

    case 2:
      return "Feb";

    case 3:
      return "Mar";

    case 4:
      return "Apr";

    case 5:
      return "May";

    case 6:
      return "Jun";

    case 7:
      return "July";

    case 8:
      return "Aug";

    case 9:
      return "Sept";

    case 10:
      return "Oct";

    case 11:
      return "Nov";

    case 12:
      return "Dec";
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

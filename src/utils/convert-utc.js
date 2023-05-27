const convertUTC = (utc) => {
  let a = new Date(utc);
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let time = `${month} ${date}, ${year}`; 
  
  return time;
};

export default convertUTC;

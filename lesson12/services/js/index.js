document.getElementById("mod").innerHTML = document.lastModified;

document.getElementById("year").innerHTML = new Date().getFullYear();

function currentDay() {
  const d = new Date();
  let day = d.getDay();
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let fullDate = days[day] + ", " + date + " " + months[month] + " " + year;
  document.getElementById("currentDate").innerHTML = "Today is " + fullDate;

}

currentDay();
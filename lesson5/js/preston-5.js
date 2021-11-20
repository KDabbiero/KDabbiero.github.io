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

function navBar() {
    var x = document.getElementById("menu");
    if (x.className === "header_container") {
      x.className += " responsive";
    } else {
      x.className = "header_container";
    }

    console.log(x.className)
}

navBar();

function dayOfWeekBanner() {
    const d = new Date();
    var day = d.getDay();
    if (day == 5) {
        document.getElementById("banner").style.display = "block";
        document.getElementById("banner-message").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion";
    }
    console.log(day);
    return day;
}

dayOfWeekBanner();
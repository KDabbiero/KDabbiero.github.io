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

const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e509f029ffaeab7cad3181c2a7e3f38f";
fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current').textContent = jsObject.list[0].weather[0].description;

    let highKelvin = parseFloat(jsObject.list[0].main.temp_max);

    console.log(highKelvin);

    document.getElementById("high").textContent = Math.round(((highKelvin-273.15)*1.8)+32);

    document.getElementById('humidity').textContent = jsObject.list[0].main.humidity;

    document.getElementById('wind_speed').textContent = Math.round(jsObject.list[0].wind.speed);

    // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';  // note the concatenation
    // const desc = jsObject.list[0].weather[0].description;  // note how we reference the weather array
    // document.getElementById('weather_iconM').textContent = imagesrc;  // informational specification only

    let icons = [];

    let desc = [];

    let temps = []

    for (i = 0; i < 40; i++) {
      if (jsObject.list[i].dt_txt.includes('18:00:00')) {
        let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
        let description = jsObject.list[i].weather[0].description;

        let temp = jsObject.list[i].main.temp;

        console.log(temp);

        temps.push(temp);
        
        icons.push(imagesrc);

        desc.push(description);
        i += 1;
      } else {
        i += 1;
      }
    }

    let temps1 = [];
    let temps2 = [];
    for (i = 0; i <= 4; i++) {
      temps1.push(parseFloat(temps[i]));
      temps2.push(Math.round(((temps1[i]-273.15)*1.8)+32));
      console.log(temps2);
    }

    document.getElementById('mon').setAttribute('src', icons[0]);

    document.getElementById('mon').setAttribute('alt', desc[0]);

    document.getElementById('tempM').textContent = temps2[0];

    document.getElementById('tue').setAttribute('src', icons[1]);

    document.getElementById('tue').setAttribute('alt', desc[1]);

    document.getElementById('tempT').textContent = temps2[1];

    document.getElementById('wed').setAttribute('src', icons[2]);

    document.getElementById('wed').setAttribute('alt', desc[2]);

    document.getElementById('tempW').textContent = temps2[2];

    document.getElementById('thu').setAttribute('src', icons[3]);

    document.getElementById('thu').setAttribute('alt', desc[3]);

    document.getElementById('tempR').textContent = temps2[3];

    document.getElementById('fri').setAttribute('src', icons[4]);

    document.getElementById('fri').setAttribute('alt', desc[4]);

    document.getElementById('tempF').textContent = temps2[4];

  });

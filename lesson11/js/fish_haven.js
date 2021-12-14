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

//JSON data fetching
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    //name
    const towns = jsonObject['towns'];
    const images = ['images/snow-1.jpg', 'images/sunny-1.jpg', 'images/sunrise-1.jpg', 'images/sunrise-2.jpg', 'images/thunder-1.jpg', 'images/snow-1.jpg', 'images/sunrise-3.jpg'];
    for (let i = 0; i < towns.length; i++ ) {
    if (towns[i].name === "Fish Haven") {
        let card = document.createElement('section');

        //trying to create a div for the text and the image
        let div1 = document.createElement('div');
        div1.className = 'test';
        let div2 = document.createElement('div');
        div2.className = 'test';
        let div3 = document.createElement('div');
        div3.className = 'test';
        let div4 = document.createElement('div');
        div4.className = 'test';
        let div5 = document.createElement('div');
        div5.className = 'test';

        //Creating the HTML elements.
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let h5_1 = document.createElement('p');
        let h5_2 = document.createElement('p');
        let h5_3 = document.createElement('p');
        
        let image = document.createElement('img');

        
        

        //Creating the div for the image
        let div10 = document.createElement('div');
        div10.className = 'test1';

        //Assign values to the elements from the JSON.
        h2.textContent = towns[i].name;
        h3.textContent = towns[i].motto;
        h5_1.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
        h5_2.textContent = 'Population:' + ' ' + towns[i].currentPopulation;
        h5_3.textContent = 'Average Rainfall:' + ' ' + towns[i].averageRainfall;

        let text1 = h2;
        let text2 = h3;
        let text3 = h5_1;
        let text4 = h5_2;
        let text5 = h5_3;
        image.setAttribute('src', images[i]);

        div1.appendChild(text1);
        div2.appendChild(text2);
        div3.appendChild(text3);
        div4.appendChild(text4);
        div5.appendChild(text5);
        div10.appendChild(image);

        card.appendChild(div1);
        card.appendChild(div2);
        card.appendChild(div3);
        card.appendChild(div4);
        card.appendChild(div5);
        card.appendChild(div10);

        document.querySelector('div.towns').appendChild(card);

        //Creating a separate section for the Events
        let events= document.createElement('section');

        let div6 = document.createElement('div');
        div6.className = 'test2';
        let div7 = document.createElement('div');
        div7.className = 'test2';
        let div8 = document.createElement('div');
        div8.className = 'test2';
        let div9 = document.createElement('div');
        div9.className = 'test2';

        //Create the individual HTML elements.
        let h5_4 = document.createElement('h2');
        let h5_5 = document.createElement('h4');
        let h5_6 = document.createElement('h4');
        let h5_7 = document.createElement('h4');

        h5_4.textContent = 'Events:';
        h5_5.textContent = towns[i].events[0];
        h5_6.textContent = towns[i].events[1];
        h5_7.textContent = towns[i].events[2];


        let text6 = h5_4;
        let text7 = h5_5;
        let text8 = h5_6;
        let text9 = h5_7;

        div6.appendChild(text6);
        div7.appendChild(text7);
        div8.appendChild(text8);
        div9.appendChild(text9);

        events.appendChild(div6);
        events.appendChild(div7);
        events.appendChild(div8);
        events.appendChild(div9);
        
        document.querySelector('div.events').appendChild(events);  
    }}
  });

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

const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=e509f029ffaeab7cad3181c2a7e3f38f";


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
      if (jsObject.list[i].dt_txt.includes('18:00:00') || jsObject.list[i].dt_txt.includes('5:00:00') ) {
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


  fetch(apiUrl)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      // document.getElementById('current').textContent = jsObject.list[0].weather[0].description;
  
      let highKelvin = parseFloat(jsObject.list[0].main.temp_max);
  
      console.log(highKelvin);
  
      document.getElementById("high").textContent = Math.round(((highKelvin-273.15)*1.8)+32);
  
      document.getElementById('wind_speed').textContent = Math.round(jsObject.list[0].wind.speed);
  
      let wind_chill = Math.trunc(35.74 + (0.6215 * high) - (35.75 * (wind_speed**0.16)) + (0.4275 * high * (wind_speed**0.16)));
  
      function windchill() {
          if (high <= 50 && wind_speed >= 3) {
              document.getElementById("wind_chill").innerHTML = wind_chill;
          }
      }
  
      windchill();
  
    });
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
    if (towns[i].name === "Preston" || towns[i].name === "Soda Springs" || towns[i].name === "Fish Haven") {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h5');
        let h5_1 = document.createElement('p');
        let h5_2 = document.createElement('p');
        let h5_3 = document.createElement('p');
        //let h5_4 = document.createElement('h5');
        let image = document.createElement('img');

        h2.textContent = towns[i].name;
        h3.textContent = towns[i].motto;
        h5_1.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
        h5_2.textContent = 'Population:' + ' ' + towns[i].currentPopulation;
        h5_3.textContent = 'Average Rainfall:' + ' ' + towns[i].averageRainfall;
        //h5_4.textContent = 'Events:' + ' ' + towns[i].events;

        //image.setAttribute('src', towns[i].photo, 'alt', towns[i].name + ' ' + 'photo.');
        image.setAttribute('src', images[i]); 

        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(h5_1);
        card.appendChild(h5_2);
        card.appendChild(h5_3);
        //card.appendChild(h5_4);
        //image
        card.appendChild(image);
        document.querySelector('div.towns').appendChild(card);
        
    }}
  });
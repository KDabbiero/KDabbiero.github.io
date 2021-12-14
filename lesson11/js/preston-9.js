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
    if (towns[i].name === "Preston") {
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
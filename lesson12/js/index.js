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

const apiUrl = "https://nathansbradshaw.github.io/temples2.json";
fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject); 
    let rexburg = jsObject[1];

    console.log(rexburg.Summary.facts.length);

    let div1 = document.createElement('div');
    div1.classList.add("test3");
    for (i = 0; i < 16; i++) {
      let p = document.createElement('p');
      p.textContent = rexburg.Summary.facts[i];
      div1.appendChild(p);
      document.getElementById('rexburg').appendChild(div1);
    };

    let div2 = document.createElement('div');
    let image = document.createElement('img');
    image.setAttribute('src', rexburg.Summary.src);
    image.setAttribute('alt', 'Picture of Rexburg temple.')
    div2.appendChild(image);
    document.getElementById('rexburg').appendChild(div2);


  });
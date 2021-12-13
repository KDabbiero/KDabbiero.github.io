const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e509f029ffaeab7cad3181c2a7e3f38f";
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

  });

let high = Number(document.getElementById("high").innerText);
let wind_speed = Number(document.getElementById("wind_speed").innerText);
let wind_chill = Math.trunc(35.74 + (0.6215 * high) - (35.75 * (wind_speed**0.16)) + (0.4275 * high * (wind_speed**0.16)));

function windchill() {
    if (high <= 50 && wind_speed >= 3) {
        document.getElementById("wind_chill").innerHTML = wind_chill;
    }
}

windchill();
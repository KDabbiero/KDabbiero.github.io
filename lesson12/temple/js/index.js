const apiUrl = "https://nathansbradshaw.github.io/temples2.json";
fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let idahoFalls = jsObject[0];
    document.getElementById('cardIF').src = idahoFalls.imageurl;
    
    let rexburg = jsObject[1];
    document.getElementById('cardR').src = rexburg.imageurl;

    let kansasCity = jsObject[2];
    document.getElementById('cardKC').src = kansasCity.imageurl;

    let oklahomaCity = jsObject[3];
    document.getElementById('cardOK').src = oklahomaCity.imageurl;
  });
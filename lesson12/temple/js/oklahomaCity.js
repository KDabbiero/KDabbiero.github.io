//address, telephone, email, services, history, temple closure schedule
const apiUrl = "https://nathansbradshaw.github.io/temples2.json";
fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    // document.getElementById('temples').textContent = jsObject;

    //let oklahomaCity = jsObject[0];
    let oklahomaCity = jsObject[3];
    //let kansasCity = jsObject[2];
    //let oklahoma = jsObject[3];

    document.getElementById('cardIF').src = oklahomaCity.imageurl;

    document.getElementById('nameIF').textContent = oklahomaCity.name;

    document.getElementById('addressIF').textContent = "Address: " + oklahomaCity.address1;

    document.getElementById('telephoneIF').textContent = "Phone: " + oklahomaCity.phone;

    document.getElementById('servicesIF').textContent = "Services: ";

    let div1 = document.createElement('div');
    div1.classList.add("test1");
    for (i = 0; i < oklahomaCity.services.length; i++) {
      
      let p = document.createElement('p');
      p.textContent = oklahomaCity.services[i];
      div1.appendChild(p);
      document.getElementById('servicesIF').appendChild(div1);
      
    };

    document.getElementById('historyIF').textContent = "History: ";

    let div2 = document.createElement('div');
    div2.classList.add("test2");
    for (i = 0; i < oklahomaCity.milestones.length; i++) {
      
      let p = document.createElement('p');
      p.textContent = oklahomaCity.milestones[i];
      div2.appendChild(p);
      document.getElementById('historyIF').appendChild(div2);
      
    };

    console.log(oklahomaCity.closures[2021][0].startdate);

    document.getElementById('closuresIF').textContent = "Closures: ";

    let div3 = document.createElement('div');
    div3.classList.add("test3");
    for (i = 0; i < oklahomaCity.closures[2021].length; i++) {
      let p = document.createElement('p');
      p.textContent = oklahomaCity.closures[2021][i].startdate + " - " + oklahomaCity.closures[2021][i].enddate;
      div3.appendChild(p);
      document.getElementById('closuresIF').appendChild(div3);
    };
    for (i = 0; i < oklahomaCity.closures[2022].length; i++) {
      let p = document.createElement('p');
      p.textContent = oklahomaCity.closures[2022][i].startdate + " - " + oklahomaCity.closures[2022][i].enddate;
      div3.appendChild(p);
      document.getElementById('closuresIF').appendChild(div3);
    };
  });
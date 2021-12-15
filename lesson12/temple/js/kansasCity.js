//address, telephone, email, services, history, temple closure schedule
const apiUrl = "https://nathansbradshaw.github.io/temples2.json";
fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    // document.getElementById('temples').textContent = jsObject;

    //let kansasCity = jsObject[0];
    let kansasCity = jsObject[2];
    //let kansasCity = jsObject[2];
    //let oklahoma = jsObject[3];

    document.getElementById('cardIF').src = kansasCity.imageurl;

    document.getElementById('nameIF').textContent = kansasCity.name;

    document.getElementById('addressIF').textContent = "Address: " + kansasCity.address1;

    document.getElementById('telephoneIF').textContent = "Phone: " + kansasCity.phone;

    document.getElementById('servicesIF').textContent = "Services: ";

    let div1 = document.createElement('div');
    div1.classList.add("test1");
    for (i = 0; i < kansasCity.services.length; i++) {
      
      let p = document.createElement('p');
      p.textContent = kansasCity.services[i];
      div1.appendChild(p);
      document.getElementById('servicesIF').appendChild(div1);
      
    };

    document.getElementById('historyIF').textContent = "History: ";

    let div2 = document.createElement('div');
    div2.classList.add("test2");
    for (i = 0; i < kansasCity.milestones.length; i++) {
      
      let p = document.createElement('p');
      p.textContent = kansasCity.milestones[i];
      div2.appendChild(p);
      document.getElementById('historyIF').appendChild(div2);
      
    };

    console.log(kansasCity.closures[2021][0].startdate);

    document.getElementById('closuresIF').textContent = "Closures: ";

    let div3 = document.createElement('div');
    div3.classList.add("test3");
    for (i = 0; i < kansasCity.closures[2021].length; i++) {
      let p = document.createElement('p');
      p.textContent = kansasCity.closures[2021][i].startdate + " - " + kansasCity.closures[2021][i].enddate;
      div3.appendChild(p);
      document.getElementById('closuresIF').appendChild(div3);
    };
    for (i = 0; i < kansasCity.closures[2022].length; i++) {
      let p = document.createElement('p');
      p.textContent = kansasCity.closures[2022][i].startdate + " - " + kansasCity.closures[2022][i].enddate;
      div3.appendChild(p);
      document.getElementById('closuresIF').appendChild(div3);
    };
  });
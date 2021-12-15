//address, telephone, email, services, history, temple closure schedule
const apiUrl = "https://nathansbradshaw.github.io/temples2.json";
fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    // document.getElementById('temples').textContent = jsObject;

    let idahoFalls = jsObject[0];
    let rexburg = jsObject[1];
    let kansasCity = jsObject[2];
    let oklahoma = jsObject[3];

    document.getElementById('cardIF').src = idahoFalls.imageurl;

    document.getElementById('nameIF').textContent = idahoFalls.name;

    document.getElementById('addressIF').textContent = "Address: " + idahoFalls.address1;

    document.getElementById('telephoneIF').textContent = "Phone: " + idahoFalls.phone;

    document.getElementById('servicesIF').textContent = "Services: ";

    let div1 = document.createElement('div');
    div1.classList.add("test1");
    for (i = 0; i < idahoFalls.services.length; i++) {
      
      let p = document.createElement('p');
      p.textContent = idahoFalls.services[i];
      div1.appendChild(p);
      document.getElementById('servicesIF').appendChild(div1);
      
    };

    document.getElementById('historyIF').textContent = "History: ";

    let div2 = document.createElement('div');
    div2.classList.add("test2");
    for (i = 0; i < idahoFalls.milestones.length; i++) {
      
      let p = document.createElement('p');
      p.textContent = idahoFalls.milestones[i];
      div2.appendChild(p);
      document.getElementById('historyIF').appendChild(div2);
      
    };

    document.getElementById('closuresIF').textContent = "Closures: ";

    let div3 = document.createElement('div');
    div3.classList.add("test3");
    for (i = 0; i < idahoFalls.closures[2021].length; i++) {
      let p = document.createElement('p');
      p.textContent = idahoFalls.closures[2021][i].startdate + " - " + idahoFalls.closures[2021][i].enddate;
      div3.appendChild(p);
      document.getElementById('closuresIF').appendChild(div3);
    };
    for (i = 0; i < idahoFalls.closures[2022].length; i++) {
      let p = document.createElement('p');
      p.textContent = idahoFalls.closures[2022][i].startdate + " - " + idahoFalls.closures[2022][i].enddate;
      div3.appendChild(p);
      document.getElementById('closuresIF').appendChild(div3);
    };
  });

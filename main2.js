let active = document.getElementById("active");
let deaths = document.getElementById("deaths");
let recovered = document.getElementById("recovered");
let confirmed = document.getElementById("confirmed");
let url = "https://data.covid19india.org/data.json";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let states = [];
    let activecases = [];
    let death = [];
    let confirme = [];
    data.statewise.forEach((element) => {
      states.push(element.state);
      activecases.push(element.active);
      death.push(element.deaths);
      confirme.push(element.confirmed);
    });
    states.shift();
    activecases.shift();
    death.shift();
    confirme.shift();
    console.log(states);
    console.log(death);
    active.append(data.statewise[0].active);

    recovered.append(data.statewise[0].recovered);
    confirmed.append(data.statewise[0].confirmed);
    deaths.append(data.statewise[0].deaths);

    let mychart = document.getElementById("mychart").getContext("2d");

    let chart = new Chart(mychart, {
      type: "bar",
      data: {
        labels: states,
        datasets: [
          {
            label: "Confirmed Cases",
            data: confirme,
            backgroundColor: "#0d6efd",
            minBarLength: 100,
          },
          {
            label: "Deaths",
            data: death,
            backgroundColor: "#dc3545",
            minBarLength: 100,
          },
          {
            label: "Active",
            data: activecases,
            backgroundColor: "#ffc107",
            minBarLength: 100,
          },
        ],
      },
    });
  });

let btn = document.getElementById("btn");

let form = document.getElementById("form");
let active = document.getElementById("active");
let death = document.getElementById("death");

form.addEventListener("submit", function search(e) {
  e.preventDefault(); //prevent auto submission of the form
  let countryname = document.getElementById("countryname").value;
  let url = "https://api.covid19api.com/dayone/country/" + countryname;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let length = data.length;
      let index = length - 1;
      active.innerHTML = "";
      death.innerHTML = "";

      active.append("Total Active Cases: " + data[index].Active);
      active.classList.add("color");
      death.append("Total Deaths Till Now: " + data[index].Deaths);
      death.classList.add("color");
    });
});

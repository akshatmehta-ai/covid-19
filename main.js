// fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thrones", {
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "imdb8.p.rapidapi.com",
//     "x-rapidapi-key": "b6de29b671msh656afd628389116p121a33jsn8db112d6b133",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.error(err);
//   });
// fetch(
//   "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=India",
//   {
//     method: "GET",
//     headers: {
//       "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
//       "x-rapidapi-key": "b6de29b671msh656afd628389116p121a33jsn8db112d6b133",
//     },
//   }
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.error(err);
//   });

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

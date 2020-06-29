// window.addEventListener("load", () => {
//   let long;
//   let lat;
//   let temperatureDescrtiption = document.querySelector(
//     ".temperature-description"
//   );
//   let temperatureDegree = document.querySelector(".temperature-degree");
//   let locationTimezone = document.querySelector(".location-timezone");

//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {
//       //console.log(position);
//       long = position.coords.longitude;
//       lat = position.coords.latitude;

//       const proxy = "https://cors-anywhere.herokuapp.com/";

//       const api = `${proxy}https://api.darksky.net/forecast/7c546e6f35b69ff327cb384c8f7a721c/${lat},${long}`;

//       fetch(api)
//         .then((response) => {
//           //console.log(response);
//           return response.json();
//         })
//         .then((data) => {
//           //console.log(data);
//           const { temperature, summary, icon } = data.currently;

//           temperatureDegree.textContent = temperature;
//           temperatureDescrtiption.textContent = summary;
//           locationTimezone.textContent = data.timezone;

//           setIcons(icon, document.querySelector(".icon"));
//         });
//     });

//     //do this later

//     const proxy = "https://cors-anywhere.herokuapp.com/";

//     const api1 = `${proxy}http://ipinfo.io`;

//     fetch(api1)
//       .then((response1) => {
//         //console.log(response1);
//         return response1.json();
//       })
//       .then((data1) => {
//         // console.log(JSON.stringify(data1));
//         return JSON.stringify(data1);
//       })
//       .catch((response) => {
//         console.log(response);
//       });
//   }

//   function setIcons(icon, iconId) {
//     const skycons = new Skycons({ color: "white" });
//     const currentIcon = icon.replace(/-/g, "_").toUpperCase();
//     skycons.play();
//     return skycons.set(iconId, Skycons[currentIcon]);
//   }
// });

let temperatureDescrtiption = document.querySelector(".info");
let temperatureDegree = document.querySelector(".temperature");
let locations = document.querySelector(".location");
let time = document.querySelector(".time");
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");
let weather = document.querySelector(".weather");
let search = document.querySelector(".search-form");
let searchInput = document.querySelector(".search");
let error = document.querySelector(".show-error");
const proxy = "https://cors-anywhere.herokuapp.com/";
window.addEventListener("load", () => {
  fetchDefaultTemp();
  search.addEventListener("submit", (e) => {
    e.preventDefault();

    fetchTemp(searchInput.value);
    console.log(searchInput.value);
  });
});

function fetchTemp(val) {
  const key = "c27f547d1a6936c2e4f12912db69dbb1";
  let url = `https://api.openweathermap.org/data/2.5/weather?`;

  fetch(`${url}q=${val}&units=metric&appid=${key}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      locations.textContent = data.name + ", " + data.sys.country;
      getIcon(data.weather[0].icon);
      temperatureDegree.textContent = Math.round(data.main.temp);
      weather.textContent = data.weather[0].main;
      humidity.textContent = "Humidity: " + data.main.humidity;
      wind.textContent = "Wind: " + data.wind.speed + " mph";
      getTime();
    })
    .catch((err) => {
      error.textContent = "something went wrong!";
      console.log(err);
    });
}

function fetchDefaultTemp() {
  const key = "c27f547d1a6936c2e4f12912db69dbb1";
  let url = "https://api.openweathermap.org/data/2.5/weather?";

  fetch(`${url}q=Delhi&units=metric&appid=${key}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      locations.textContent = data.name + ", " + data.sys.country;
      getIcon(data.weather[0].icon);
      temperatureDegree.textContent = Math.round(data.main.temp);
      weather.textContent = data.weather[0].main;
      humidity.textContent = "Humidity: " + data.main.humidity;
      wind.textContent = "Wind: " + data.wind.speed + " mph";
      getTime();
    })
    .catch((err) => console.log(err));
}

function getIcon(data) {
  let time = document.getElementById("temp-icon");

  switch (data) {
    // day
    case "01d":
      time.className = "wi wi-day-sunny";
      break;
    case "02d":
      time.className = "wi wi-day-cloudy";

      break;
    case "03d":
      time.className = "wi wi-cloud";

      break;
    case "04d":
      time.className = "wi wi-cloudy";

      break;
    case "09d":
      time.className = "wi wi-day-rain";

      break;
    case "10d":
      time.className = "wi wi-day-sunny";
      time.addClass("wi wi-day-rain-mix");
      break;
    case "11d":
      time.className = "wi wi-day-lightning";

      break;
    case "13d":
      time.className = "wi wi-day-snow-wind";

      break;
    case "50d":
      time.className = "wi wi-day-sunny";

      break;
    // night
    case "01n":
      time.className = "wi wi-night-clear";

      break;
    case "02n":
      time.className = "wi wi-night-alt-cloudy";

      break;
    case "03n":
      time.className = "wi wi-cloud";

      break;
    case "04n":
      time.className = "wi wi-cloudy";

      break;
    case "09n":
      time.className = "wi wi-showers";

      break;
    case "10n":
      time.className = "wi wi-night-alt-showers";

      break;
    case "11n":
      time.className = "wi wi-storm-showers";

      break;
    case "13n":
      time.className = "wi wi-wi-night-alt-snow";

      break;
    case "50n":
      time.className = "wi wi-fog";

      break;
  }
}

function getTime() {
  let d = new Date(); // for now
  let hours = d.getHours(); // => 9
  let mins = d.getMinutes(); // =>  30
  let secs = d.getSeconds(); // => 51

  if (hours > 12) {
    hours = hours - 12;
    time.textContent = `${hours}:${mins} PM`;
  } else {
    time.textContent = `${hours}:${mins} AM`;
  }
  console.log(hours, mins, secs);
}

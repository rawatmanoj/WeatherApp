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

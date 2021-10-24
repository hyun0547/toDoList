const APIKEY = "9164e1791f3b8a3d1388cabb859d462d";
const weatherBox = document.querySelector(".dust-info");
function onGeoOk(e) {
  const lat = e.coords.latitude;
  const lon = e.coords.longitude;
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&lang=kr`
  )
    .then((Response) => Response.json())
    .then((data) => {
      const name = data.name;
      const localInfo = document.createElement("span");
      const weather = data.weather[0].main;
      const temp = Math.round(data.main.temp - 273.15);
      localInfo.innerText = `지역: ${name} 날씨: ${weather} 기온 : ${temp}°C`;
      weatherBox.appendChild(localInfo);
    });
  fetch(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${APIKEY}`
  )
    .then((Response) => Response.json())
    .then((data) => {
      const dustInfo = document.createElement("span");
      const ultraDust = data.list[0].components.pm2_5;
      const dust = data.list[0].components.pm10;
      dustInfo.innerText = `초미세먼지:${ultraDust} 미세먼지:${dust}`;
      weatherBox.appendChild(dustInfo);
    });
}
function onGeoError(e) {
  const dustInfo = "위치 정보를 받을 수 없습니다.";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

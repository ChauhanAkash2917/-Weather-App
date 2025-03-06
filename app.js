const btn = document.querySelector("button");
// console.log(cityName.value);
const apiKey = "7141314ebb4c864d31f4afa1ceaec833";

let city = "pune";

async function getWeather() {
  const cityName = document.querySelector("#city").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  if (!cityName) {
    alert("Please enter city name");
    return;
  }

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.weather[0].icon);

    if (data.cod !== 200) {
      document.querySelector(
        "#weather-info"
      ).innerHTML = `<p> ${data.message}</p>`;
      return;
    }

    document.querySelector(".weather-info").innerHTML = `
    <h3>${data.name},${data.sys.country}</h3>
    <br>
    <p>🌡️Temperature : ${data.main.temp} °c</p>
    <br>
    <p>☁️ Weather : ${data.weather[0].description}</P>
    <br>
    <p>💧 Humidity : ${data.main.humidity}</P>
    <br>
    <p>🍃 Wind Speed : ${data.wind.speed}</P>
    <br>
    <img class="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
  } catch (error) {
    console.log(error);
    document.querySelector(
      "#weather-info"
    ).innerHTML = `<p>Error fetching weather data</p>`;
  }
}

btn.addEventListener("click", getWeather);
getWeather();
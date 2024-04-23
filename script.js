const container = document.getElementById("container");
const buttonSearch = document.getElementById("button");
const error404 = document.getElementById("error404");
const weatherBox = document.getElementById("weatherBox");
const weatherDetails = document.getElementById("weather-details");

buttonSearch.addEventListener("click", () => {
  const APIKey = "1f5e6a059af7b3a86c960941614f7048";
  const city = document.getElementById("cityInput").value;

  if (city == "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod == "404") {
        error404.classList.remove("hidden");
        error404.classList.add("block");
        weatherBox.classList.remove("block");
        weatherBox.classList.add("hidden");
      } else {
        error404.classList.remove("block");
        error404.classList.add("hidden");
        weatherBox.classList.remove("hidden");
        weatherBox.classList.add("block");

        const image = document.getElementById("img_weather");
        const temperature = document.getElementById("temperature");
        const description = document.getElementById("description");
        const humidity = document.getElementById("humidity");
        const wind = document.getElementById("wind");

        switch (json.weather[0].main) {
          case "Clear":
            image.src = "./img/icons/clear.png";
            break;
          case "Rain":
            image.src = "./img/icons/lear.png";
            break;
          case "Snow":
            image.src = "./img/icons/lear.png";
            break;
          case "Clouds":
            image.src = "./img/icons/lear.png";
            break;
          case "Mist":
            image.src = "./img/icons/lear.png";
            break;
          case "Haze":
            image.src = "./img/icons/lear.png";
            break;
          default:
            image.src = "";
            break;
        }

        temperature.textContent = `${parseInt(json.main.temp)} °C`;
        description.textContent = `${json.weather[0].description}`;
        humidity.textContent = `${json.main.humidity}%`;
        wind.textContent = `${parseInt(json.wind.speed)} Km/h`;
      }
    });
});

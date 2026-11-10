const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const lat = "49.75116323191404";
const lon = "6.635368671263601";
const apiKey =  "9a0121366c229921fce7d4ee2c8025a1";

const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
       displayResults(data);

    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    
    captionDesc.textContent = desc;
}





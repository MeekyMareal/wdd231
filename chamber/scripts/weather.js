const hamButton = document.querySelector('#menu');
const navBtn = document.querySelector('.nav')

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navBtn.classList.toggle('show');
});

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.figcaption');
const lat = "6.337522637432035";
const lon = "5.610906406818573";
const apiKey =  "9a0121366c229921fce7d4ee2c8025a1";

const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

async function currentFetch() {
  const response = await fetch(url);
  const data = await response.json();
  displayResults(data);
}
currentFetch();

// consuming api https://byui-cse.github.io/wdd231-ww-course/week03/prepare-api-weather.html

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    weatherIcon.innerHTML = `<img src="${icon}" alt="${desc}" width="70" height="70">`;
    captionDesc.innerHTML = `<p>${data.weather[0].description}</p>`;
}

const weatherForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;


async function apiFetch() {
  const response = await fetch(weatherForecast);
  const data = await response.json();
  displayForecast(data);
}
apiFetch();


function displayForecast(data){
    const forecasts = document.querySelector('#forecast');
    forecasts.innerHTML = '';
    // after going through the basic array method i was able to format the length of the forecast from 5 days to 3 and also how many members are displayed using the slice and include basic array method via: https://www.w3schools.com/js/js_array_reference.asp
    const threeDays = data.list.filter(format => format.dt_txt.includes('12:00:00')).slice(0, 3);
    threeDays.forEach(dayData => {
        const date = new Date(dayData.dt_txt);
        const weekday = date.toLocaleDateString('en-US', {weekday: 'long'});
        const card = document.createElement('div');
        card.innerHTML = `
            <p>${weekday}: ${dayData.main.temp}&deg;F</p>
        `;
        forecasts.appendChild(card);
    });
}

let membersFile = [];


async function loadMembers() {
  let fileFetch = await fetch('data/members.json');
  membersFile = await fileFetch.json();
  showSpotlights();
}

function showSpotlights() {
    const highLevel = membersFile.filter((members) => {
        const levels = members.level;
        return levels.includes("gold") || levels.includes("silver");
    });
    const container = document.querySelector('#spotLights');
    const randomize = highLevel.sort(() => 0.5 - Math.random()).slice(0, 3);
    container.innerHTML = randomize
        .map(
            (m) => `
            <div class="spotcard">
              <img src="${m.image}" width="100" height="85" alt="${m.company}" loading="lazy">
              <div>
                <h3>${m.company}</h3>
                <p>Level: ${m.level}</p>
                <p>Website: <a href="${m.website}" target="_blank">Link</a></p>
                <p>Address: ${m.address}</p>
              </div>
            </div>
          `
        )
        .join("");
}  

document.addEventListener("DOMContentLoaded", loadMembers);
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
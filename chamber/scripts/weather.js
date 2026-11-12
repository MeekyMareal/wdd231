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

currentFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('width', 50);
    weatherIcon.setAttribute('height', 50);
    
    captionDesc.textContent = desc;
}

const weatherForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(weatherForecast);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

apiFetch();


function displayForecast(data){
    const forecasts = document.querySelector('#forecast');
    forecasts.innerHTML = '';
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
    try {
        let fileFetch = await fetch('data/members.json');
        membersFile = await fileFetch.json();
        
        showSpotlights();
    } catch (error) {
        console.error("Error loading members:", error);
    }
}

function showSpotlights() {
    const highLevel = membersFile.filter((m) => {
        const levels = m.level;
        return levels.includes("gold") || levels.includes("silver");
    });

    const container = document.querySelector('#spotLights');

    const randomize = highLevel
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    container.innerHTML = randomize
        .map(
            (m) => `
            <div class="spotcard">
              <img src="${m.image}" width="100" height="85" alt="${m.company}" loading="lazy">
              <div>
                <h3>${m.company}</h3>
                <span>Level: ${m.level}</span>
                <p><a href="${m.website}" target="_blank">${m.company} Website</a></p>
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
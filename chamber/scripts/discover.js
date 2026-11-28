const hamButton = document.querySelector('#menu');
const navBtn = document.querySelector('.nav')

// hamButton.addEventListener('click', () => {
//     hamButton.classList.toggle('show');
//     navBtn.classList.toggle('show');
//     hamButton.setAttribute('aria-expanded', isOpen);
// });

hamButton.addEventListener('click', () => {
    const isOpen = navBtn.classList.toggle('show');
    hamButton.classList.toggle('show', isOpen);
    hamButton.setAttribute('aria-expanded', isOpen);
});

import { places } from "../data/places.mjs";
console.log(places);

function displayPlaces(placesCard) {
    let container = document.getElementById('place');

    for (let i = 0; i < placesCard.length; i++) {
        const placeDetails = placesCard[i];

        container.innerHTML += `
            <section class="place-card">
                <h2>${placeDetails.name}</h2>
                <p class="category"><strong>Category:</strong> ${placeDetails.category}</p>
                <p class="description">${placeDetails.description}</p>
                <address>${placeDetails.address}</address>
                <p class="cost"><strong>Cost:</strong> ${placeDetails.cost}</p>
                <figure><img src="${placeDetails.image}" width="400" height="300" alt="${placeDetails.name}" fetchpriority="high"></figure>
            </section>
        `;
    }
}

displayPlaces(places);

const visitText = document.getElementById("visit");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();
const day = 86400000;

if (lastVisit === null) {
  visitText.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - Number(lastVisit)) / day);

  if (days < 1) {
    visitText.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    visitText.textContent = "You last visited 1 day ago.";
  } else {
    visitText.textContent = `You last visited ${days} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
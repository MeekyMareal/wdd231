const hamButton = document.querySelector('#menu');
const navBtn = document.querySelector('.nav')

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navBtn.classList.toggle('show');
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
                <figure><img src="${placeDetails.image}" width="400" height="300" alt="${placeDetails.name}" loading="lazy"></figure>
            </section>
        `;
    }
}

displayPlaces(places);

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
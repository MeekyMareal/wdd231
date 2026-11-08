// 1. Fetch the data when the page loads
document.addEventListener("DOMContentLoaded", async function() {
    let response = await fetch('businesses.json');
    let businesses = await response.json();
    displayBusinesses(businesses);
});

// 2. Loop through and put cards on the page
function displayBusinesses(list) {
    let container = document.getElementById('directory');
    container.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        let b = list[i];
        
        container.innerHTML += `
            <div class="business-card">
                <h2>${b.company_name}</h2>
                <p>${b.category}</p>
                <p>${b.company_addresses}</p>
                <p>${b.company_phone_number}</p>
                <p><a href="${b.company_website_url}" target="_blank">Website</a></p>
            </div>
        `;
    }
}

// 3. Simple grid/list switcher
function switchView(type) {
    let container = document.getElementById('directory');
    if (type === 'grid') {
        container.className = 'grid-view';
    } else {
        container.className = 'list-view';
    }
}
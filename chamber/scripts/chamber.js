const mainNav = document.querySelector('.nav');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');
});


// proper examples of how to load a json file are were given here at: https://www.w3schools.com/js/js_async_fetch.asp
async function loadMembers() {
  let fileFetch = await fetch('data/members.json');
  let membersFile = await fileFetch.json();
  displayMembers(membersFile);
}


loadMembers();

// how to display through template literal all json data, although the approach in the video is different but i gain an insight  https://youtu.be/eS-FVnhjvEQ?si=5C14G-NwFoN2wV5f
function displayMembers(membersCard) {
    let container = document.getElementById('members');
    container.innerHTML = "";

    for (let i = 0; i < membersCard.length; i++) {
        let membersDetails = membersCard[i];
        
        container.innerHTML += `
            <div class="members-details">
                <div>
                    <h2>${membersDetails.company}</h2>
                    <p class="tag"><strong>Category:</strong> ${membersDetails.category}</p>
                </div>
                <div>
                    <img src="${membersDetails.image}" alt="Members Company Logo" loading="lazy" width="100px">
                    <p><strong>Phone:</strong> ${membersDetails.phone}</p>
                    <p><a href="${membersDetails.website}" target="_blank">Website</a></p>
                    <p><strong>Level:</strong> ${membersDetails.level}</p>
                </div>
                    <p><strong>Address:</strong> ${membersDetails.address}</p>
            </div>
        `;
    }
}

// modification from the course recourses: https://codepen.io/BYU-Idaho/pen/RNbpbNe

const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");
const membersView = document.querySelector("#members");

gridBtn.addEventListener("click", () => {
	membersView.classList.add("grid-view");
	membersView.classList.remove("list-view");
});

listBtn.addEventListener("click", showList);

function showList() {
	membersView.classList.add("list-view");
	membersView.classList.remove("grid-view");
}

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
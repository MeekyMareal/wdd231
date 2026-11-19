const hamButton = document.querySelector('#menu');
const navBtn = document.querySelector('.nav')

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navBtn.classList.toggle('show');
    hamButton.setAttribute('aria-expanded', isOpen);
});

const userInfo = new URLSearchParams(window.location.search);

const formFilled = document.getElementById('formFilled');
formFilled.innerHTML = `
<p>Registration for ${userInfo.get('first')}, ${userInfo.get('last')}</p>
<p>With the following details:</p>
<p>Organization: ${userInfo.get('title')}</p>
<p>Email: ${userInfo.get('email')}</p>
<p>Phone: ${userInfo.get('phone')}</p>
<p>Level: ${userInfo.get('membership')}</p>
<p>Date of Registration: ${userInfo.get('date')}</p>
<p>Has been duly received, we will get in touch with you soon.</p>
`;

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
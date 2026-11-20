const hamButton = document.querySelector('#menu');
const navBtn = document.querySelector('.nav')

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navBtn.classList.toggle('show');
    hamButton.setAttribute('aria-expanded', isOpen);
});

const np = document.querySelector('#np');
const bronze = document.querySelector('#bronze');
const silver = document.querySelector('#silver');
const gold = document.querySelector('#gold');

const npDialog = document.querySelector('#np-dialog');
const bronzeDialog = document.querySelector('#bronze-dialog');
const silverDialog = document.querySelector('#silver-dialog');
const goldDialog = document.querySelector('#gold-dialog');

const closeModal1 = document.querySelector('#closeModal1');
const closeModal2 = document.querySelector('#closeModal2');
const closeModal3 = document.querySelector('#closeModal3');
const closeModal4 = document.querySelector('#closeModal4');

np.addEventListener("click",  () => {
    npDialog.showModal();
});

closeModal1.addEventListener("click",  () => {
    npDialog.close();
});

bronze.addEventListener("click",  () => {
    bronzeDialog.showModal();
});

closeModal2.addEventListener("click",  () => {
    bronzeDialog.close();
});

silver.addEventListener("click",  () => {
    silverDialog.showModal();
});

closeModal3.addEventListener("click",  () => {
    silverDialog.close();
});

gold.addEventListener("click",  () => {
    goldDialog.showModal();
});

closeModal4.addEventListener("click",  () => {
    goldDialog.close();
});





document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.booking-form');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true

})
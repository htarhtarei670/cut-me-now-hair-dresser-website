// for nav bar toggle

let navToggle = document.querySelector('.nav__toggle');
navMenu = document.querySelector('.nav__menu');
navClose = document.querySelector('.nav__close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show');
    })
}
const scrollUpBtn = () => {
    let scrollUpBtn = document.querySelector('.scrollUp-btn');

    window.scrollY > 100 ? scrollUpBtn.classList.add('show') : scrollUpBtn.classList.remove('show');

}

window.addEventListener('scroll', scrollUpBtn);
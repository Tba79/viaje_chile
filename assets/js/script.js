const navEl =document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 60) {
        navEl.classList.add('navbar-scroll');
    } else if (window.scrollY < 56) {
        navEl.classList.remove('navbar-scroll')
    }
});
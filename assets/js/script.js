const navEl = document.querySelector('.navbar');

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

window.addEventListener('scroll', () => {
    if (window.scrollY >= 250) {
        navEl.classList.add('navbar-scroll');
    } else if (window.scrollY < 250) {
        navEl.classList.remove('navbar-scroll')
    }
});


$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});
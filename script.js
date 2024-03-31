var menubutton = document.querySelector('.mustakim');
var leftNav = document.querySelector('.left-nav');


menubutton.addEventListener("click", function() {
    leftNav.classList.toggle('dropdown');
})
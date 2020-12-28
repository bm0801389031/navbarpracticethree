let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
//this top code is to set
//my variables mainNav and navBarToggle
//from here we creat links through the id on html
// and the value used for bottom page becomes 
// mainNav, and NavBarToggle

navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
});
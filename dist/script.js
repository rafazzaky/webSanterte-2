//Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }
    else{
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//Random Color for 'New' Label
//Get the root element (For Variable)
var r = document.querySelector(':root');
let newColors = ['#9333ea', '#4f46e5', '#2563eb', '#c026d3', '#e11d48'];
function changeNewLabelColor(){
    r.style.setProperty('--newColor', newColors[Math.floor(Math.random() * newColors.length)]);
}
setInterval(changeNewLabelColor, 250);

//Href position fix
$(function() {
    // Desired offset, in pixels
    var refOffset = -57;
    // Desired time to scroll, in milliseconds
    var scrollTime = 500;

    $('a[href^="#"]').click(function() {
        // Need both `html` and `body` for full browser support
        $("html, body").animate({
            scrollTop: $( $(this).attr("href") ).offset().top + refOffset 
        }, scrollTime);

        // Prevent the jump/flash
        return false;
    });
});
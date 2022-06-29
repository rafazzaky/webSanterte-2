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
let menuList = document.querySelectorAll('a.menu-list');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

for(let i = 0; i<menuList.length; i++){
    menuList[i].addEventListener('click', function(){
        if(hamburger.style.display == 'none'){
            return;
        }
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
    });
}

window.onresize = () => {
    if ($(window).width() >= 768 && hamburger.classList.contains('hamburger-active')) {
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
    }
}
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
    var scrollTime = 300;

    $('a[href^="#"]').click(function() {
        // Need both `html` and `body` for full browser support
        $("html, body").animate({
            scrollTop: $( $(this).attr("href") ).offset().top + refOffset 
        }, scrollTime);

        // Prevent the jump/flash
        return false;
    });
});

//Modal Box
let btnBaju = document.querySelectorAll('.card');
let modalBaju = document.getElementById('bajuModal');
let closeBaju = document.getElementById('closeBajuModal');
console.log(btnBaju);
for(let i = 0; i<btnBaju.length; i++){
    btnBaju[i].addEventListener('click', ()=>{
        modalBaju.classList.remove('hidden');
        modalBaju.classList.add('block');
    })
}
closeBaju.addEventListener('click', ()=>{
    modalBaju.classList.add('hidden');
    modalBaju.classList.remove('block');
})

window.onclick = function(event) {
    if (event.target == modalBaju) {
        modalBaju.classList.remove('block');
        modalBaju.classList.add('hidden');
    }
  }

$('.card').on('click', function() {
    var linkTokped = $(this).data('tokped');
    var linkShopee = $(this).data('shopee');
    $('#link-tokped').attr("href", linkTokped);
    $('#link-shopee').attr("href", linkShopee);
});
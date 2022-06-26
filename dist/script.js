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

//Random Color for 'New' Label
//Get the root element (For Variable)
var r = document.querySelector(':root');
let newColors = ['#9333ea', '#4f46e5', '#2563eb', '#c026d3', '#e11d48'];
function changeNewLabelColor(){
    r.style.setProperty('--newColor', newColors[Math.floor(Math.random() * newColors.length)]);
}
setInterval(changeNewLabelColor, 250);
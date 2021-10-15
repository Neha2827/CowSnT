let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let image = document.getElementById('image');
let images = ['images/online-doctor-animate.svg','images/webinar-animate.svg','images/in-progress-animate.svg']
setInterval(function()
{
    let random = Math.floor(Math.random() * 3);
    image.src =images[random];
},1000);

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


  
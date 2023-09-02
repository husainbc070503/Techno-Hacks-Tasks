var nav = document.getElementById('navbar');
var scroll = document.getElementById('scroll-btn')
var arrow = document.getElementById('arrow-down')

window.onscroll = () => {
    if (window.scrollY > 700) {
        nav.classList.add('fixed');
        scroll.style.opacity = "1";
    }
    else {
        nav.classList.remove('fixed');
        scroll.style.opacity = "0";
    }
}


scroll.onclick = () => document.documentElement.scrollTop = 0;
arrow.onclick = () => window.scrollTo(0, 740);
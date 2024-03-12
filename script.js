let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top>=offset && top < offset+height)
        {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add('active');
            })
        }
    })
    let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

}

const cir = document.querySelectorAll('.cir')
cir.forEach(ele => {
    let dots = ele.getAttribute("data-dots");
    let marked = ele.getAttribute("data-percent")
    let percent = Math.floor(dots*marked/100)
    let points = ""
    let rotate = 360 / dots;
    for(let i=0;i<dots;i++){
        points+=`      <div class="points" style="--j:${i}; --rot:${rotate}deg"></div>`
    }
    ele.innerHTML = points
    const pointsMarked = ele.querySelectorAll('.points')
    for(let i=0;i<percent;i++)
    {
        pointsMarked[i].classList.add('marked')
    }
})

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
}
ScrollReveal({
    // reset:true,
    distance: '80px',
    duration:2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'})
ScrollReveal().reveal('.home-img img, .portfolio-box, .contact form', {origin:'bottom'})
ScrollReveal().reveal('.home-content h1, .about-img img', {origin:'left'})
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', {origin:'right'})






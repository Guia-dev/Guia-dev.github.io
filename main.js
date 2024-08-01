const navMenu = document.getElementById('nav-menu'),
navClose = document.getElementById('nav-close'),
navToggle = document.getElementById('nav-toggle');

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav_link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const blurHeader = () =>{
    const header = document.getElementById('header');
    if(this.scrollY >= 30){
        header.classList.add('header-blur');
    }else{
        header.classList.remove('header-blur');
    }
}

window.addEventListener('scroll', blurHeader);


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400
    //reset: true // Animation repeat
})

sr.reveal('.home_data')
sr.reveal('.home_img', {delay: 600})
sr.reveal('.projects_scroll', {delay: 800})
sr.reveal('.work_card', {interval: 150})
sr.reveal('.about_content', {origin: 'right'})
sr.reveal('.info_img', {origin: 'left'})
sr.reveal('.info_img', {origin: 'left'})
sr.reveal('.experience_data', {interval: 150})
sr.reveal('.skill_box', {interval: 150, origin: 'left'})
sr.reveal('.services_card', {interval: 150, origin: 'top'})

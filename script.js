/*------------------------------------toggle icon navbar------------------------------------------- */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

/*------------------------------------scroll section active link------------------------------------------- */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });  
        }
    });


/*------------------------------------sticky navbar------------------------------------------- */
    let header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 100);

/*------------------------------------remove toggle icon and navbar------------------------------------------- */
menuIcon.classList.remove('fa-x');
navbar.classList.remove('active');
}

/*------------------------------------scroll revel------------------------------------------- */
ScrollReveal({
    distance:'80px',
    duratiion:2000,
    delay:200,
});
ScrollReveal().reveal('.home-content , heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container , .portfolio-box,.contact form',{origin: 'button'})
ScrollReveal().reveal('.home-contact h1, .about-img',{origin:'left'})
ScrollReveal().reveal('.home-contact p, .about-img',{origin:'right'})

/*------------------------------------typed js------------------------------------------- */
const typed=new Typed('.multiple-text',{
    strings:['MERN Stack Developer','Web Designer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
})


// extra portion
span=document.getElementById("span")
buttoon=document.getElementById("button")
span1=document.getElementById("span1")

function readmore(){
    if(span.style.display=="none"){
        span.style.display="inline"
        buttoon.innerHTML="Read less"
    }
    else{
        span.style.display="none"
        buttoon.innerHTML="Read More"
    }
}
span2=document.getElementById("span2")
buttoon1=document.getElementById("button1")
span3=document.getElementById("span3")

function readmore1(){
    if(span3.style.display=="none"){
        span3.style.display="inline"
        buttoon1.innerHTML="Read less"
    }
    else{
        span3.style.display="none"
        buttoon1.innerHTML="Read More"
    }
}
span4=document.getElementById("span4")
buttoon2=document.getElementById("button2")
span5=document.getElementById("span5")

function readmore2(){
    if(span5.style.display=="none"){
        span5.style.display="inline"
        buttoon2.innerHTML="Read less"
    }
    else{
        span5.style.display="none"
        buttoon2.innerHTML="Read More"
    }
}
span6=document.getElementById("span6")
buttoon3=document.getElementById("button3")
span7=document.getElementById("span7")

function readmore3(){
    if(span7.style.display=="none"){
        span7.style.display="inline"
        buttoon3.innerHTML="Read less"
    }
    else{
        span7.style.display="none"
        buttoon3.innerHTML="Read More"
    }
}
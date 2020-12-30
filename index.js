const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    
    burger.addEventListener('click', ()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;    
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });

    
}

navSlide();

//scrolling upon nav clicks
$("#projects").click(function() {
    $('html, body').animate({
        scrollTop: $('.container').offset().top
    }, 2000);
});


//fixing nav bar when scrolling down
var num = 200; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('nav').addClass('fixed');
    } else {
        $('nav').removeClass('fixed');
    }
});
$(document).ready(function() {

    let scrollitem = $('.scroll');

    let burger = $('.hamburger');

    scrollitem.click(function(e){
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    })

    burger.click(function(){
        burger.toggleClass('is-active');
        $('.overlay').toggleClass('overlay-on');
        $('section').toggleClass('is-blur');
    })

    $('.mobile-menu').click(function(){
        burger.toggleClass('is-active');
        $('.overlay').toggleClass('overlay-on');
        $('section').toggleClass('is-blur'); 
    })

})

let prevScrollpos = window.pageYOffset;
window.onscroll = ()=> {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByTagName('nav')[0].style.top = '0';
    document.getElementsByClassName('hamburger')[0].style.top = '0';
  } else {
    document.getElementsByTagName('nav')[0] .style.top = '-50px';
    document.getElementsByClassName('hamburger')[0].style.top = '-50px';
  }
  prevScrollpos = currentScrollPos;
} 
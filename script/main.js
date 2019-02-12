// Lot's of variables

const body = document.getElementsByTagName('body')[0];
const burger = document.getElementsByClassName('burger')[0];
const nav = document.getElementsByClassName('main-nav')[0];
const overlay = document.getElementsByClassName('overlay')[0];
const overlayMenu = overlay.querySelectorAll('a');
const section = document.querySelectorAll('section');

burger.addEventListener('click', ()=>{
    burger.classList.toggle('burger-active');
    overlay.classList.toggle('overlay-active');
    body.classList.toggle('overflow-stop');
    for (let i = 0; i < section.length; i ++){
      section[i].classList.toggle('is-blur');
    }
})

for (let i = 0; i < overlayMenu.length; i++){
    overlayMenu[i].addEventListener('click',()=>{
        burger.classList.toggle('burger-active');
        overlay.classList.toggle('overlay-active');
        body.classList.toggle('overflow-stop');
        for (let i = 0; i < section.length; i ++){
          section[i].classList.toggle('is-blur');
        }  
    })
}

let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    burger.style.top = "0";
    nav.style.top = "0";
  } else {
    burger.style.top = "-60px";
    burger.style.transition = "top .5s ease";
    nav.style.top = "-50px";
    nav.style.transition = "top .5s ease";
  }
  prevScrollpos = currentScrollPos;
} 

window.addEventListener('scroll', (e)=>{
	if(this.scrollY > nav.clientHeight){
		nav.style.background = '#e1c38e';
	}else{
	nav.style.transition = 'background .3s linear';
	nav.style.background = 'transparent'}
})

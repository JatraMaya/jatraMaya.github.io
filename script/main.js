// List of Variables

const nav = document.getElementsByClassName('main-nav')[0];
const burger = document.getElementsByClassName('burger')[0];
const overlay = document.getElementsByClassName('overlay')[0];
const section = document.getElementsByTagName('section');
const overlayItem = overlay.getElementsByClassName('overlay-item');
let scrollPos = window.pageYOffset;

window.onscroll = () => {
  let posNow = window.pageYOffset;

  if (posNow > nav.clientHeight) {
    nav.style.background = '#e3d4bf'
  } else {
    nav.style.transition = 'background .6s ease-in'
    nav.style.background = 'transparent'
  }

  if (scrollPos > posNow) {
    burger.style.top = '2%';
    nav.style.top = '0';
   } else {
    nav.style.top = '-50%';
    burger.style.top = '-50%';
    burger.style.transition = 'top .5s ease';
    nav.style.transition = 'top .5s ease';
  } scrollPos = posNow;
}

burger.addEventListener('click', () => {
  burger.classList.toggle('burger-active');
  document.getElementsByTagName('html')[0].classList.toggle('stop-overflow');
  overlay.classList.toggle('overlay-active');
  for (let i = 0; i < section.length; i++) {
    section[i].classList.toggle('is-blur');
  }
})

for (let i = 0; i < overlayItem.length; i ++) {
  overlayItem[i].addEventListener('click', () => {
    burger.classList.toggle('burger-active');
    document.getElementsByTagName('html')[0].classList.toggle('stop-overflow');
    overlay.classList.toggle('overlay-active');
    for (let i = 0; i < section.length; i++) {
      section[i].classList.toggle('is-blur');
    } 
  })
}


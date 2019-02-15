// List of Variables

const burger = document.getElementsByClassName('burger')[0];
const overlay = document.getElementsByClassName('overlay')[0];
const section = document.getElementsByTagName('section');
const overlayItem = overlay.getElementsByClassName('overlay-item');
let scrollPos = window.pageYOffset;

window.onscroll = () => {
  let posNow = window.pageYOffset;

  if (scrollPos > posNow) {
    burger.style.top = '2%';
   } else {
    burger.style.top = '-50%';
    burger.style.transition = 'top .5s ease';
  } scrollPos = posNow;
}

burger.addEventListener('click', () => {
  burger.classList.toggle('burger-active');
  document.getElementsByTagName('body')[0].classList.toggle('stop-overflow');
  overlay.classList.toggle('overlay-active');
  for (let i = 0; i < section.length; i++) {
    section[i].classList.toggle('is-blur');
  }
})

for (let i = 0; i < overlayItem.length; i ++) {
  overlayItem[i].addEventListener('click', () => {
    burger.classList.toggle('burger-active');
    document.getElementsByTagName('body')[0].classList.toggle('stop-overflow');
    overlay.classList.toggle('overlay-active');
    for (let i = 0; i < section.length; i++) {
      section[i].classList.toggle('is-blur');
    } 
  })
}


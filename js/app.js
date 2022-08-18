const elOpenHeaderMenu = document.querySelector('.site-header');
const elOpenMenuBtn = document.querySelector('.js-menu-btn');

if(elOpenMenuBtn) {
  elOpenMenuBtn.addEventListener('click', function() {
    elOpenHeaderMenu.classList.toggle('site-header-open')
  })
}
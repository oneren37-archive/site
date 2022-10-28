const openMenu = document.querySelectorAll('.burger')
const closeMenu = document.querySelector('.close')
const mobileMenu = document.querySelector('.header-nav_mobile')

openMenu.forEach(e => e.addEventListener('click', () => {
    mobileMenu.classList.add('visible');
}))
closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('visible');
})


const toggle = document.querySelectorAll('nav .toggle')
const nav = document.querySelector('#header nav')
const links = document.querySelectorAll('nav ul li a')

for (const element of toggle) {
   element.addEventListener('click', () => {
      nav.classList.toggle('show')
   })
}

for (const link of links) {
   link.addEventListener('click', () => {
      nav.classList.remove('show')
   })
}

// mudar o header da página, adicionando sombra quando der scroll

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
   window.scrollY >= navHeight
      ? header.classList.add('scroll')
      : header.classList.remove('scroll')
})

// TESTIMONIALS CAROULSEL SLIDER SWIPER
// https://swiperjs.com/
const swiper = new Swiper('.swiper-container', {
   slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination'
   },
   mousewheel: true,
   keyboard: true
})

// SCROLLREVEAL
const scrollReveal = ScrollReveal({
   origin: 'top',
   distance: '30px',
   duration: 700,
   reset: true
})

ScrollReveal().reveal(
   `
   #home .image, #home .text,
   #about .image, #about .text,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contact .links
`,
   { interval: 100 }
)

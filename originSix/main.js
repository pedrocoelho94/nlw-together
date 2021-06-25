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

function changeHeaderWhenScroll() {
   window.scrollY >= navHeight
      ? header.classList.add('scroll')
      : header.classList.remove('scroll')
}

// TESTIMONIALS CAROULSEL SLIDER SWIPER
// https://swiperjs.com/
const swiper = new Swiper('.swiper-container', {
   slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination'
   },
   mousewheel: true,
   keyboard: true,
   breakpoints:{
      767:{
         slidesPerView: 2,
         setWrapperSize: true
      }
   }
})

// SCROLLREVEAL
const scrollReveal = ScrollReveal({
   origin: 'top',
   distance: '30px',
   duration: 600,
   reset: true
})

ScrollReveal().reveal(
   `
   #home .image, #home .text,
   #about .image, #about .text,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contact .links,
   footer .brand, footer .social
`,
   { interval: 100 }
)

// BACK TO TOP
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {

   if (window.scrollY > 560) {
      backToTopButton.classList.add('show')
   } else {
      backToTopButton.classList.remove('show')
   }
}
// Menu Ativo conforme a seção visível na página
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection(){
   const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

   for(let section of sections){
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute('id')

      const checkpointStart = checkpoint >= sectionTop
      const checkpointEnd = checkpoint <= sectionTop + sectionHeight

      if(checkpointStart && checkpointEnd){
         document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
      }else{
         document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
      }

   }
}

//WHen Scroll
window.addEventListener('scroll', () => {
   changeHeaderWhenScroll()
   backToTop()
   activateMenuAtCurrentSection()
})



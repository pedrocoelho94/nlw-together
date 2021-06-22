const toggle = document.querySelectorAll('nav .toggle')
const nav = document.querySelector('#header nav')
const links = document.querySelectorAll('nav ul li a')

for (const element of toggle) {
   element.addEventListener('click', () => {
      nav.classList.toggle('show')
   })
}

for (const link of links){
   link.addEventListener('click', ()=>{
      nav.classList.remove('show')
   })
}

// mudar o header da página, adicionando sombra quando der scroll

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', ()=>{
   window.scrollY >= navHeight ? header.classList.add('scroll') : header.classList.remove('scroll')
})
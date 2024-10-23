import 'swiper/swiper.scss'
import 'swiper/modules/pagination.scss'
import 'swiper/modules/mousewheel.scss'
import '../scss/style.scss'
import Swiper from 'swiper'
import { Pagination, Mousewheel } from 'swiper/modules'

let swiper = document.querySelectorAll('.swiper-wrapper')
const slider = document.querySelector('.slider-container')

let mySwiper
let mySwiper1
let mySwiper2

function mobileSlider() {
  if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper('.slaider1', {
      slidesPerView: 'auto',
      spaceBetween: 17,
      loop: true,
      slideClass: 'card',
      slidesOffsetBefore: 16,
      modules: [Mousewheel, Pagination],
      mousewheel: {
        enabled: true
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    })

    mySwiper1 = new Swiper('.slaider2', {
      slidesPerView: 'auto',
      spaceBetween: 17,
      loop: true,
      slideClass: 'repair-card',
      slidesOffsetBefore: 16,
      modules: [Mousewheel, Pagination],
      mousewheel: {
        enabled: true
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    })

    mySwiper2 = new Swiper('.slaider3', {
      slidesPerView: 'auto',
      spaceBetween: 17,
      loop: true,
      slideClass: 'price-card',
      slidesOffsetBefore: 16,
      modules: [Mousewheel, Pagination],
      mousewheel: {
        enabled: true
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    })

    slider.dataset.mobile = 'true'
  }

  if (window.innerWidth > 767) {
    slider.dataset.mobile = 'false'
    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy()
      mySwiper1.destroy()
    }
    // console.log(slider.classList);
  }
}
//  swiper-container-initialized
mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider()
})
let about = document.querySelector('.about__text')
let toogle = document.querySelectorAll('.viewmore')
let but = document.querySelectorAll('.icon-text')
let strelochka = document.querySelectorAll('.icon-button')
let toogle0 = toogle[0]
let toogle1 = toogle[1]
let toogle2 = toogle[2]

toogle0.onclick = function () {
  console.log('but[0]:', but[0].textContent, 'but[1]:', but[1].textContent)
  about.classList.toggle('about__text--vesb-blok')
  about.classList.toggle('about__text--polovinka')
  if (but[0].textContent == 'Читать далее') {
    but[0].textContent = 'Читать менее'
    strelochka[0].style.webkitTransform = 'rotate(180deg)'
  } else if (but[0].textContent == 'Читать менее') {
    but[0].textContent = 'Читать далее'
    strelochka[0].style.webkitTransform = 'rotate(0deg)'
  }
}
toogle1.onclick = function () {
  console.log('but[0]:', but[0].textContent, 'but[1]:', but[1].textContent)
  swiper[0].classList.toggle('swiper-wrapper--vesb-blok')
  swiper[0].classList.toggle('swiper-wrapper--polovina')
  if (but[1].textContent == 'Показать всё') {
    but[1].textContent = 'Скрыть'
    strelochka[1].style.webkitTransform = 'rotate(180deg)'
  } else if (but[1].textContent == 'Скрыть') {
    but[1].textContent = 'Показать всё'
    strelochka[1].style.webkitTransform = 'rotate(0deg)'
  }
}

toogle2.onclick = function () {
  // console.log('but[2]:', but[2].textContent, 'but[1]:', but[2].textContent)
  swiper[1].classList.toggle('swiper-wrapper--vesb-bl4ok')
  swiper[1].classList.toggle('swiper-wrapper--polovinka')
  if (but[2].textContent == 'Показать всё') {
    but[2].textContent = 'Скрыть'
    strelochka[2].style.webkitTransform = 'rotate(180deg)'
  } else if (but[2].textContent == 'Скрыть') {
    but[2].textContent = 'Показать всё'
    strelochka[2].style.webkitTransform = 'rotate(0deg)'
  }
}

import 'swiper/swiper.scss'
import 'swiper/modules/pagination.scss'
import 'swiper/modules/mousewheel.scss'
import '../scss/style.scss'

import Swiper from 'swiper'
import { Pagination, Mousewheel } from 'swiper/modules'

let swiper = document.querySelector('.swiper-wrapper')
const slider = document.querySelector('.slider-container')

let mySwiper

function mobileSlider() {
  if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      slidesPerView: 'auto',
      spaceBetween: 17,
      loop: true,
      slideClass: 'card',
      slidesOffsetBefore: 16,
      // slidesOffsetAfter: 67,
      // centeredSlides: false,
      modules: [Mousewheel, Pagination],
      mousewheel: {
        enabled: true
      },
      // modules: [Pagination],
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
    }
    // console.log(slider.classList);
  }
}
//  swiper-container-initialized
mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider()
})

let toogle = document.querySelector('.viewmore')
let but = document.querySelector('.icon-text')
let strelochka = document.querySelector('.icon-button')

toogle.onclick = function () {
  swiper.classList.toggle('swiper-wrapper--vesb-blok')
  swiper.classList.toggle('swiper-wrapper--polovinka')
  if (but.textContent == 'Показать всё') {
    but.textContent = 'Скрыть'
    strelochka.style.webkitTransform = 'rotate(180deg)'
  } else if (but.textContent == 'Скрыть') {
    but.textContent = 'Показать всё'
    strelochka.style.webkitTransform = 'rotate(0deg)'
  }
}

"use strict"
new Swiper('.swiper', {
    navigation: {
        nextEl: '.reviews__arrow-right',
        prevEl: '.reviews__arrow-left'
    },
    pagination: {
        el: '.reviews__fractions',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + '/' + '<span class="' + totalClass + '"></span>'
        }
    },
    slidesPerView: 'auto',
    watchOverflow: true,
    spaceBetween: 20,
});



const btn = document.querySelector('.header__switcher');
if (btn) {
    btn.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
        btn.classList.toggle('_icon-moon');
        btn.classList.toggle('_icon-sun');
    })
}

const burger = document.querySelector('.header__burger-icon');
const header = document.querySelector('.header');
if (burger && header) {
    burger.addEventListener('click', function () {
        header.classList.toggle('header_active');
        burger.classList.toggle('burger_active');
        document.body.classList.toggle('_lock')
    })
}
//Map
const REGION_BUTTONS = document.querySelectorAll('.map__nav-item');
REGION_BUTTONS.forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelector('.active').classList.remove('active');
        btn.classList.add('active');
    })
})

//Solutions
const SOLUTIONS_ITEMS = document.querySelectorAll('.solutions__nav-item');
if (document.documentElement.clientWidth > 1200) {
    SOLUTIONS_ITEMS.forEach(item => {
        item.addEventListener('mouseover', function() {
            item.classList.add('hover');
            item.querySelector('.solutions__nav-subtitle').style.display = 'block';
            item.querySelector('h3').style.alignSelf = 'start';
        })
        item.addEventListener('mouseout', function() {
            item.classList.remove('hover');
            item.querySelector('.solutions__nav-subtitle').style.display = 'none';
            item.querySelector('h3').style.alignSelf = 'end';
        })
    })
}

//Slider
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true
});

const REGION_BUTTONS = document.querySelectorAll('.map__nav-item');
REGION_BUTTONS.forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelector('.active').classList.remove('active');
        btn.classList.add('active');
    })
})
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true
});

const REGION_BUTTONS = document.querySelectorAll('.map__nav-item');
REGION_BUTTONS.forEach(region => {
    region.addEventListener('click', function() {
        REGION_BUTTONS.forEach(region_btn => {
            region_btn.addEventListener('click', function() {
                if (!region_btn.classList.contains('active')) {
                    document.querySelector('.active').classList.remove('active');
                    region_btn.classList.add('active');
                }
            })
        })
    })
})
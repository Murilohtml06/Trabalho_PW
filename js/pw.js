function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.menu');
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.menu');

    }
}
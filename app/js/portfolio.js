var slider = tns({
    container: '.portfolio__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: true,
    controlsContainer: ('.portfolio__nav-arrow-list'),
    mouseDrag: true,
    loop: false,
    center: true,
    nav: false,
    // navContainer: '.slider__banner-nav',
    autoplayButtonOutput: false,
    // autoplayHoverPause: true
    responsive: {
        768: {
            center: true,
            fixedWidth: 718
        },
        320: {
            fixedWidth: false

        }   
    }
  });
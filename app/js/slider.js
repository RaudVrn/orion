var slider = tns({
  container: '.slider__list',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  controls: false,
  mouseDrag: true,
  navContainer: '.slider__banner-nav',
  autoplayButtonOutput: false,
  autoplayHoverPause: true,
  responsive: {
    768:{
      autoplayHoverPause: false,
    }
  }
});
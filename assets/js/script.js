$('.burg-menu').click(function () {
  $('.mobile-menu').slideToggle();
});

if ($(window).width() < 992) {
  $('.anim-class').removeClass('revealator-slideup');
  $('.anim-class').removeClass('revealator-rotateright');
  $('.anim-class').removeClass('revealator-zoomin');
  $('.slider').slick('unslick');
} else {
  false;
}
$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
  adaptiveHeight: true,
});

// });

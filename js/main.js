$(function(){
  $('.slider__header').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });



  $('.slider__base, .slider__advanced, .slider__experience, .slider__excursion').slick({

    infinite: true,
    slidesToShow: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    centerMode: true,
    // variableWidth: true,
    // slidesPerRow: 3,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          infinite: true,
          slidesToShow: 1,
          centerMode: false,
          // variableWidth: true,
          // focusOnSelect: true,
          // centerPadding: '200px',
          dots: true,
        }
      },
    ]

   });



  $('.slider__foto').slick({

    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    variableWidth: true,
    // centerPadding: '400px',
    // focusOnSelect: true,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
        }
      },
    ]
   });



  $('.questions__item-title').on('click', function(){

    $('.questions__item').removeClass('questions__item--active');
    $(this).parent().addClass('questions__item--active');

  });

  // $('.menu__btn').on('click', function () {
  //   $('.menu__btn-line').toggleClass('menu__btn-line--active');
  //   $('.menu__list').toggleClass('menu__list--active');
  // });

  // $('.menu__list-link').on('click', function () {
  //   $('.menu__btn').removeClass('menu__btn--active');
  //   $('.menu__list').removeClass('menu__list--active');
  // })

  $('.menu__btn, .menu a').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  $(".menu a, .logo, .footer__logo, .footer__menu a").on("click", function (e) {
    e.preventDefault();
		var id  = $(this).attr('href'),
    top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $('.routes-more__btn').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
	});

	$('.routes-more__btn').magnificPopup({
		type: 'ajax'
	});
  



});
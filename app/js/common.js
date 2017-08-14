$(document).ready(function() {
      
      $("#my-menu").mmenu({
      	extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black' ],
      	navbar: {
      		title: '<img src="img/logo.svg">'
      	},
      	offCanvas: {
      		position: 'right'
      	}
      });

      var api = $('#my-menu').data('mmenu');
      api.bind('open:finish', function(){
      	$('.hamburger').addClass('is-active')
      });

      api.bind('close:finish', function(){
      	$('.hamburger').removeClass('is-active')
      });

      
      $(".carousel-servises").on('initialized.owl.carousel', function(){
        setTimeout(function(){
           carouselServise()
        }, 100);
      });

      $(".carousel-servises").owlCarousel({
            loop:false,
            nav:true,
            smartSpeed:700,
            navText:['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
            responsiveClass:true,
            responsive:{
              0:{
                  items:1
              },
              800:{
                  items:2
              },
              1100:{
                  items:3
            }
    }
      });

  function carouselServise(){
    $('.carousel-servises-item').each(function(){
      var ths = $(this),
          thsh = ths.find('.carousel-servises-content').outerHeight();
          ths.find('.carousel-servises-image').css('min-height', thsh);
    });
  }
  carouselServise();


  $('.carousel-servises-composition .h3').each(function(){
    var ths = $(this);
    ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
  });

});
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

      //$('.select').selectize();
      
      $(".carousel-servises").on('initialized.owl.carousel', function(){
        setTimeout(function(){
           carouselServise()
        }, 100);
      });

      $(".carousel-servises").owlCarousel({
            loop:false,
            nav:true,
            dots:false,
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

      $(".reviews").owlCarousel({
        items:1,
        loop:true,
        smartSpeed:700,
        nav:false,
        
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

  $('section .h2').each(function(){
    var ths = $(this);
    ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
  });

  //E-mail Ajax Send
  $("form .callback").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/mail.php", //Change
      data: th.serialize()
    }).done(function() {
      
      $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();

      setTimeout(function() {
        // Done Functions
        $(th).find('.success').removeClass('active').fadeOut();
        th.trigger("reset");
      }, 3000);
    });
    return false;
  });

//Resize window

  function onResize(){
    $('.carousel-servises-content').equalHeights();
  }onResize();
  window.onresize = function() {onResize()}

});
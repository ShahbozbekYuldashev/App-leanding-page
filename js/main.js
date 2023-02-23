(function ($) {
  "use strict";

  //Start wow.js
  new WOW().init();

  // Hide Loading Animation after page is load
  $(window).on('load', function () {
    $(".spinner-overlay").fadeOut("slow");
  });
  
  // Shrink Nav After User Scroll
  $(function () {
    var nav = $("nav");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
        nav.removeClass("padding-25-15");
      } else {
        nav.addClass("padding-25-15");
      }
    });
  });

  //Show Burger Menu and Mobile Navigation after click
  $('.burger, .overlay').click(function () {
    $('.burger').toggleClass('clicked');
    if ($(window).width() < 767.8 && !$(".sidenav").hasClass("side")) {
      $(".sidenav").addClass("side");
    }else {
      $(".sidenav").removeClass("side");
    }
  });
  //Close sidebar if its open and window width is larger then 767.8px
  $(window).resize(function () {
    if ($(window).width() > 750.8) {
      $(".sidenav").removeClass("side");
      $('.burger').removeClass('clicked');
    }
  })  

  //Scroll To Section of page
  $('a[href^="#"]').click(function () {
    var target = $(this.hash);
    if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
    if (target.length == 0) target = $('html');
    $(".sidenav").removeClass("side");
    $('.burger').removeClass('clicked');
    $('html, body').animate({ 
      scrollTop: target.offset().top - 100 
    }, 1000);
    return false;
  });

  //Slick Drag Slider
  $('.testimonials-slider').slick({
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false
  });

})(jQuery);








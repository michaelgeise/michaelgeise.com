/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });

    /* =========================================
     *  animations
     *  =======================================*/


  
  })(jQuery); // End of use strict

  
    delayTime = 0;

    $('[data-animate]').waypoint(function (direction) {
        delayTime += 250;

        var element = $(this.element);

        $(this.element).delay(delayTime).queue(function (next) {
            element.toggleClass('animated');
            element.toggleClass(element.data('animate'));
            delayTime = 0;
            next();
        });

        this.destroy();

    }, {
        offset: '90%'
    });
    
    $('[data-animate-hover]').hover(function () {
        $(this).css({
            opacity: 1
        });
        $(this).addClass('animated');
        $(this).removeClass($(this).data('animate'));
        $(this).addClass($(this).data('animate-hover'));
    }, function () {
        $(this).removeClass('animated');
        $(this).removeClass($(this).data('animate-hover'));
    });

$(document).ready(function() {

  // allow to send directly to modal url
  if(window.location.href.indexOf('#emr-modal') != -1) {
    $('#emr-modal').modal('show');
  }
  if(window.location.href.indexOf('#design-system-modal') != -1) {
    $('#design-system-modal').modal('show');
  }
  if(window.location.href.indexOf('#medical-dictation-modal') != -1) {
    $('#medical-dictation-modal').modal('show');
  }
  if(window.location.href.indexOf('#park-modal') != -1) {
    $('#park-modal').modal('show');
  }
  if(window.location.href.indexOf('#insurance-web-app-modal') != -1) {
    $('#insurance-web-app-modal').modal('show');
  }
  if(window.location.href.indexOf('#haas-modal') != -1) {
    $('#haas-modal').modal('show');
  }
  if(window.location.href.indexOf('#tech-non-profit-user-research-modal') != -1) {
    $('#tech-non-profit-user-research-modal').modal('show');
  }
  if(window.location.href.indexOf('#exercise-booking-app-modal') != -1) {
    $('#exercise-booking-app-modal').modal('show');
  }

  // tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

});
  
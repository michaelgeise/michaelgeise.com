
$(function () {

    animations();
    sliders();
    fullScreenContainer();
    utils();
    sliding();
    parallax();
    contactForm();

});

$(window).load(function () {
    windowWidth = $(window).width();
    $(this).alignElementsSameHeight();

    masonry();

});
$(window).resize(function () {

    newWindowWidth = $(window).width();

    if (windowWidth !== newWindowWidth) {
	setTimeout(function () {
	    $(this).alignElementsSameHeight();
	    fullScreenContainer();
	    waypointsRefresh();
	}, 205);
	windowWidth = newWindowWidth;
    }

});


/* =========================================
 *  animations
 *  =======================================*/

function animations() {

    if (Modernizr.csstransitions) {

	delayTime = 0;
	$('[data-animate]').css({opacity: '0'});
	$('[data-animate]').waypoint(function (direction) {
	    delayTime += 150;
	    $(this).delay(delayTime).queue(function (next) {
		$(this).toggleClass('animated');
		$(this).toggleClass($(this).data('animate'));
		delayTime = 0;
		next();
		//$(this).removeClass('animated');
		//$(this).toggleClass($(this).data('animate'));
	    });
	},
		{
		    offset: '95%',
		    triggerOnce: true
		});
	$('[data-animate-hover]').hover(function () {
	    $(this).css({opacity: 1});
	    $(this).addClass('animated');
	    $(this).removeClass($(this).data('animate'));
	    $(this).addClass($(this).data('animate-hover'));
	}, function () {
	    $(this).removeClass('animated');
	    $(this).removeClass($(this).data('animate-hover'));
	});
    }

}

/* =========================================
 * sliding 
 *  =======================================*/

function sliding() {
    $('.scrollTo, #navigation a').click(function (event) {
	event.preventDefault();
	var full_url = this.href;
	var parts = full_url.split("#");
	var trgt = parts[1];

	$('body').scrollTo($('#' + trgt), 800, {offset: -80});

    });
}

/* =========================================
 * sliders 
 *  =======================================*/

function sliders() {
    if ($('.owl-carousel').length) {

	$(".customers").owlCarousel({
	    items: 6,
	    itemsDesktopSmall: [990, 4],
	    itemsTablet: [768, 2],
	    itemsMobile: [480, 1]
	});
	$(".testimonials").owlCarousel({
	    items: 4,
	    itemsDesktopSmall: [1170, 3],
	    itemsTablet: [970, 2],
	    itemsMobile: [750, 1]
	});
    }

}

/* =========================================
 * parallax 
 *  =======================================*/

function parallax() {

    $('.text-parallax').parallax("50%", 0.1);
    
}

/* =========================================
 *  masonry 
 *  =======================================*/

function masonry() {

    $('#references-masonry').css({visibility: 'visible'});

    $('#references-masonry').masonry({
	itemSelector: '.reference-item:not(.hidden)',
	isFitWidth: true,
	isResizable: true,
	isAnimated: true,
	animationOptions: {
	    duration: 200,
	    easing: 'linear',
	    queue: true
	},
	gutter: 30
    });
    scrollSpyRefresh();
    waypointsRefresh();
}

/* =========================================
 * filter 
 *  =======================================*/

$('#filter a').click(function (e) {
    e.preventDefault();



    $('#filter li').removeClass('active');
    $(this).parent('li').addClass('active');

    var categoryToFilter = $(this).attr('data-filter');

    $('.reference-item').each(function () {
	if ($(this).data('category') === categoryToFilter || categoryToFilter === 'all') {
	    $(this).removeClass('hidden');
	}
	else {
	    $(this).addClass('hidden');
	}
    });

    if ($('#detail').hasClass('open')) {
	closeReference();
    }
    else {
	$('#references-masonry').masonry('reloadItems').masonry('layout');

    }

    scrollSpyRefresh();
    waypointsRefresh();
});

/* =========================================
 *  open reference 
 *  =======================================*/

$('.reference-item').click(function (e) {
    e.preventDefault();

    var element = $(this);
    var title = element.find('.reference-title').text();
    var description = element.find('.reference-description').html();

    images = element.find('.reference-description').data('images').split(',');

    if (images.length > 0) {
	slider = '';
	for (var i = 0; i < images.length; ++i) {
	    slider = slider + '<div class="item"><img src=' + images[i] + ' alt="" class="img-responsive"></div>';
	}
    }
    else {
	slider = '';
    }



    $('#detail-title').text(title);
    $('#detail-content').html(description);
    $('#detail-slider').html(slider);

    openReference();

});

function openReference() {

    $('#detail').addClass('open');
    $('#references-masonry').animate({opacity: 0}, 300);
    $('#detail').animate({opacity: 1}, 300);

    setTimeout(function () {
	$('#detail').slideDown();
	$('#references-masonry').slideUp();

	if ($('#detail-slider').html() !== '') {

	    $('#detail-slider').owlCarousel({
		slideSpeed: 300,
		paginationSpeed: 400,
		autoPlay: true,
		stopOnHover: true,
		singleItem: true,
		afterInit: ''
	    });
	}
    }, 300);

    setTimeout(function () {
	$('body').scrollTo($('#detail'), 1000, {offset: -80});
    }, 500);

}

function closeReference() {

    $('#detail').removeClass('open');
    $('#detail').animate({'opacity': 0}, 300);

    setTimeout(function () {
	$('#detail').slideUp();
	$('#detail-slider').data('owlCarousel').destroy();
	$('#references-masonry').slideDown().animate({'opacity': 1}, 300).masonry('reloadItems').masonry();

    }, 300);

    setTimeout(function () {
	$('body').scrollTo($('#portfolio'), 1000, {offset: -110});
    }, 500);


    setTimeout(function () {
	$('#references-masonry').masonry('reloadItems').masonry();
    }, 800);

}

$('#detail .close').click(function () {
    closeReference(true);
})

/* =========================================
 * full screen intro 
 *  =======================================*/

function fullScreenContainer() {

    var screenWidth = $(window).width() + "px";
    var screenHeight = '';
    if ($(window).height() > 500) {
	screenHeight = $(window).height() + "px";
    }
    else {
	screenHeight = "500px";
    }


    $("#intro, #intro .item").css({
	width: screenWidth,
	height: screenHeight
    });
}


/* =========================================
 *  UTILS
 *  =======================================*/

function utils() {

    /* tooltips */

    $('[data-toggle="tooltip"]').tooltip();

    /* external links in new window*/

    $('.external').on('click', function (e) {

	e.preventDefault();
	window.open($(this).attr("href"));
    });
    /* animated scrolling */

}

$.fn.alignElementsSameHeight = function () {
    $('.same-height-row').each(function () {

	var maxHeight = 0;
	var children = $(this).find('.same-height');
	children.height('auto');
	if ($(window).width() > 768) {
	    children.each(function () {
		if ($(this).innerHeight() > maxHeight) {
		    maxHeight = $(this).innerHeight();
		}
	    });
	    children.innerHeight(maxHeight);
	}

	maxHeight = 0;
	children = $(this).find('.same-height-always');
	children.height('auto');
	children.each(function () {
	    if ($(this).height() > maxHeight) {
		maxHeight = $(this).innerHeight();
	    }
	});
	children.innerHeight(maxHeight);
    });
}

/* refresh scrollspy */
function scrollSpyRefresh() {
    setTimeout(function () {
	$('body').scrollspy('refresh');
    }, 1000);
}

/* refresh waypoints */
function waypointsRefresh() {
    setTimeout(function () {
	$.waypoints('refresh');
    }, 1000);
}

function contactForm() {
	$(document).ready(function(){
		$('#email-form').on('submit',function(e) {
	  		console.log($(this).closest('form').serialize());

			$.ajax({
				url:'send-email.php', //===PHP file name====
				data:$(this).serialize(),
				type:'POST',
				success:function(data){
					//Success Message == 'Title', 'Message body', Last one leave as it is
					swal("Got it!", "Thanks for reaching out! I'll get back to you shortly!", "success");
				},
				error:function(data){
					//Error Message == 'Title', 'Message body', Last one leave as it is
					swal("Oops...", "Something went wrong :(", "error");
				}
			});
			
	    e.preventDefault(); //This is to Avoid Page Refresh and Fire the Event "Click"

	  });
	});
}

    //header style
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $(".navbar-default").addClass("scrolled");
        }
        if (scroll == 0){
            $(".navbar-default").removeClass("scrolled");
        }
    });

    //loading screen
	$(window).load(function(){
    	$('#cover').fadeOut(1000);
	})


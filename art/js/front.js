$(function () {


    // ------------------------------------------------------ //
    // Masonary
    // ------------------------------------------------------ //
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 0
    });


    // ------------------------------------------------------ //
    //  Off-canvas menu
     // ------------------------------------------------------ //

     $(document).ready(function () {
         $('[data-toggle="offcanvas"]').click(function () {
             $('.row-offcanvas').toggleClass('active')
         });
     });



    // ------------------------------------------------------ //
    // Main slider
    // ------------------------------------------------------ //
    $('#main-slider').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true
    });


    // ------------------------------------------------------ //
    // For demo purposes, can be deleted
    // ------------------------------------------------------ //

    var stylesheet = $('link#theme-stylesheet');
    $( "<link id='new-stylesheet' rel='stylesheet'>" ).insertAfter(stylesheet);
    var alternateColour = $('link#new-stylesheet');

    if ($.cookie("theme_csspath")) {
        alternateColour.attr("href", $.cookie("theme_csspath"));
    }

    $("#colour").change(function () {

        if ($(this).val() !== '') {

            var theme_csspath = 'css/style.' + $(this).val() + '.css';

            alternateColour.attr("href", theme_csspath);

            $.cookie("theme_csspath", theme_csspath, { expires: 365, path: document.URL.substr(0, document.URL.lastIndexOf('/')) });

        }

        return false;
    });

});

// random card order
 var cards = $(".grid-item");
 for(var i = 0; i < cards.length; i++){
     var target = Math.floor(Math.random() * cards.length -1) + 1;
     var target2 = Math.floor(Math.random() * cards.length -1) +1;
     cards.eq(target).before(cards.eq(target2));
 }
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

});

// random card order
 // var cards = $(".grid-item");
 // for(var i = 0; i < cards.length; i++){
 //     var target = Math.floor(Math.random() * cards.length -1) + 1;
 //     var target2 = Math.floor(Math.random() * cards.length -1) +1;
 //     cards.eq(target).before(cards.eq(target2));
 // }
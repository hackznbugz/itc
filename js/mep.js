$(document).ready(function(){
    $('.details .row .slide .inner').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: $('.details .row .slide .fas.fa-chevron-right'),
      prevArrow: $('.details .row .slide .fas.fa-chevron-left'),
      responsive: [
         {
             breakpoint: 920, // mobile breakpoint
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1
             }
         },
         {
             breakpoint: 500, // mobile breakpoint
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }
     ]
    }); 
 });

 var count = 1;
 $('.details .row .slide .inner .image').each(function(index){
    if (count > 3) {
        count = 1;
    }
    $(this).css({'background':'url(images/' + (count) +'.png)', 'background-position': 'center', 'background-size': 'cover'});
    count ++;
 });
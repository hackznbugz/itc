
// gallery
$('.gallery .image').each(function(index){
    $(this).css({'background':'url(gallery/' + (index + 1) +'.png)', 'background-size': 'cover'});
});


// clients slider
var count = 1;
$('.clients .image').each(function(index){
    if (count > 5) {
        count = 1;
    }
    $(this).css({'background':'url(clients/client' + (count) +'.png)', 'background-position': 'center', 'background-repeat':'no-repeat', 'background-size': 'contain'});
    count ++;
});

$(document).ready(function(){
    $('.clients .row').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: $('.clients .fas.fa-chevron-right'),
      prevArrow: $('.clients .fas.fa-chevron-left'),
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

 $('.arrow img').click(function(){
    document.querySelector('.story').scrollIntoView({
        behavior: 'smooth'
    });
 });
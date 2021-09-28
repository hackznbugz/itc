
// gallery

var images = [
    'gallery/1.png',
    'gallery/2.png',
    'gallery/3.png',
    'gallery/4.png',
    'gallery/5.png',
    'gallery/6.png',
    'gallery/7.png',
    'gallery/8.png',
]

$('.gallery .image').each(function(index){
    $(this).css({'background':'url(gallery/' + (index + 1) +'.png)', 'background-size': 'cover'});
});

$('.gallery .image').click(function(){
    var bg = $(this).css('background').replace(/^url\(['"](.+)['"]\)/, '$1');
    $('.gallery-carousel').css({'display':'block'});
    $('.gallery-carousel .image').css({'background':bg});
    index = $(this).index() + 1;
});

$('.gallery-carousel .arrow.right').click(function(){
    index = index + 1;
    if(index > images.length){
        index = 1;
    }
    $('.gallery-carousel .image').css({'background':'url(' + images[index-1] + ')'});
});

$('.gallery-carousel .arrow.left').click(function(){
    index = index - 1;
    if(index == 0){
        index = images.length;
    }
    $('.gallery-carousel .image').css({'background':'url(' + images[index-1] + ')'});
});

$('.gallery-carousel .top i').click(function(){
    $('.gallery-carousel').css({'display':'none'});
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
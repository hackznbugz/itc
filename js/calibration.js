
$('.story .row .box').each(function(index){
    $(this).find('.image').css({'background':'url(images/' + (index + 1) + '.png)', 'background-size':'cover'});
})
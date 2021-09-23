 // nav menu
$('.hamburger').click(function () {
    $('.nav-box').css({'transform': 'translateX(0)'});
});
$('.nav-box-close').click(function () {
    $('.nav-box').css({'transform': 'translateX(100%)'});
});

 
 // sticky navbar
 window.onscroll = function() {

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop + 100;

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};
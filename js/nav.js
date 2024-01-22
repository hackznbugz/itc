// nav menu
$('.hamburger').click(function () {
    if ($(this).hasClass('open')) {
        $(this).removeClass('open')
        $('.links').css({ transform: 'translateX(100%)' })
    } else {
        $(this).addClass('open')
        $('.links').css({ transform: 'translateX(0)' })
    }
})

// sticky navbar
window.onscroll = function () {
    var navbar = document.getElementById('navbar')
    var sticky = navbar.offsetTop + 100

    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }
}

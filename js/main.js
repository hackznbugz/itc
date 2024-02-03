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

$('.gallery .image').each(function (index) {
    $(this).css({
        background: 'url(gallery/' + (index + 1) + '.png)',
        'background-size': 'cover',
    })
})

$('.gallery .image').click(function () {
    var bg = $(this)
        .css('background')
        .replace(/^url\(['"](.+)['"]\)/, '$1')
    $('.gallery-carousel').css({ display: 'block' })
    $('.gallery-carousel .image').css({ background: bg })
    index = $(this).index() + 1
})

$('.gallery-carousel .arrow.right').click(function () {
    index = index + 1
    if (index > images.length) {
        index = 1
    }
    $('.gallery-carousel .image').css({
        background: 'url(' + images[index - 1] + ')',
    })
})

$('.gallery-carousel .arrow.left').click(function () {
    index = index - 1
    if (index == 0) {
        index = images.length
    }
    $('.gallery-carousel .image').css({
        background: 'url(' + images[index - 1] + ')',
    })
})

$('.gallery-carousel .top i').click(function () {
    $('.gallery-carousel').css({ display: 'none' })
})

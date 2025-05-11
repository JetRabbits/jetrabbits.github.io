//Кнопка-вверх
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        if ($('#upbutton').is(':hidden')) {
            $('#upbutton').css({opacity: 1}).fadeIn('slow');
        }
    } else {
        $('#upbutton').stop(true, false).fadeOut('fast');
    }
});

$('#upbutton').click(function () {
    $('html, body').stop().animate({scrollTop: 0}, 30);
});

//Меню-гамбургер
$('.menu-toggle').click(function (e) {
    e.preventDefault();
    $('ul.menu').toggleClass('show');
});

//Modal-contacts
$(document).ready(function () {
    $('a.myLinkModal').click(function (event) {
        event.preventDefault();
        $('#myOverlay').fadeIn(297, function () {
            $('#myModal')
                .css('display', 'block')
                .animate({opacity: 1}, 198);
        });
    });

    $('#myModal__close, #myOverlay').click(function () {
        $('#myModal').animate({opacity: 0}, 198, function () {
            $(this).css('display', 'none');
            $('#myOverlay').fadeOut(297);
        });
    });
});


// Табы 
$(".tab_item").not(":first").hide();
$(".port_page .tab").click(function () {
    $(".port_page .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


//Accord
$(document).ready(function () {
    $('.panel-heading').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('in').next().slideToggle();
        $('.panel-heading').not(this).removeClass('in').next().slideUp();
    });
});

$(document).ready(function () {
    let year = new Date().getFullYear();
    $('#year').text(year);
});

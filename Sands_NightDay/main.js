$(document).ready(function () {
    $('#orb').click(function () {
        if ($(this).hasClass('sun')) {
          $(this).removeClass('sun').addClass('moon');
        } else {
          $(this).removeClass('moon').addClass('sun');
        }
        if ($('#sky').hasClass('day')) {
          $('#sky').removeClass('day').addClass('night');
        } else {
          $('#sky').removeClass('night').addClass('day');
        }
        if ($('[id^=moonspot').hasClass('visible')) {
            $('[id^=moonspot').removeClass('visible');
        } else {
            $('[id^=moonspot').addClass('visible');
        }
        if ($('#moon2').hasClass('removesun')) {
            $('#moon2').removeClass('removesun');
        } else {
            $('#moon2').addClass('removesun');
        }
        if ($('#moon3').hasClass('removesun')) {
            $('#moon3').removeClass('removesun');
        } else {
            $('#moon3').addClass('removesun');
        }
        if ($('#crescent1').hasClass('isvisible')) {
            $('#crescent1').removeClass('isvisible');
        } else {
            $('#crescent1').addClass('isvisible');
        }
        if ($('#sun3').hasClass('removesun')) {
            $('#sun3').removeClass('removesun');
        } else {
            $('#sun3').addClass('removesun');
        }
        if ($('#sun2').hasClass('removesun')) {
            $('#sun2').removeClass('removesun');
        } else {
            $('#sun2').addClass('removesun');
        }
        if ($('#ring1').hasClass('removesun')) {
            $('#ring1').removeClass('removesun');
        } else {
            $('#ring1').addClass('removesun');
        }
        if ($('[id^=star').hasClass('removesun')) {
            $('[id^=star').removeClass('removesun');
        } else {
            $('[id^=star').addClass('removesun');
        }
        if ($('[id^=blackhole').hasClass('removesun')) {
            $('[id^=blackhole').removeClass('removesun');
        } else {
          
            $('[id^=blackhole').addClass('removesun');
        }
    });
});
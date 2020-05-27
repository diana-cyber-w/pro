$(function() {
    $('.product-one__tabs .tab,setting__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
        $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product-one__tabs .tabs,setting__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 900,
        prefix: ""
    });


    var ochlilocal = 0;
    $('.posled').on('click', function() {
        if (ochlilocal >= 15) {
            window.location.href = 'final.html';
        } else window.location.href = 'lose.html';
    });

    $('.finalochka').on('click', function() {
        window.location.href = 'analiz.html';
    });
    if (localStorage.getItem('schetchik1.1') !== null) {
        var ball = localStorage.getItem('schetchik1.1');
        $('.right1').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);
    }
    $('.right1').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right1').addClass('none');
        localStorage.setItem('schetchik1.1', 'right1');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    if (localStorage.getItem('schetchik1.2') !== null) {
        var ball = localStorage.getItem('schetchik1.2');
        $('.right2').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);
    }

    $('.right2').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right2').addClass('none');
        localStorage.setItem('schetchik1.2', 'right2');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));


    });

    if (localStorage.getItem('schetchik1.3') !== null) {
        var ball = localStorage.getItem('schetchik1.3');
        $('.right3').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);
    }
    $('.right3').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right3').addClass('none');
        localStorage.setItem('schetchik1.3', 'right3');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });

    if (localStorage.getItem('schetchik1.4') !== null) {
        var ball = localStorage.getItem('schetchik1.4');
        $('.right4').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);
    }
    $('.right4').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right4').addClass('none');
        localStorage.setItem('schetchik1.4', 'right4');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });

    if (localStorage.getItem('schetchik1.5') !== null) {
        var none = localStorage.getItem('schetchik1.5');
        $('.right5').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right5').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right5').addClass('none');
        localStorage.setItem('schetchik1.5', 'right5');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    if (localStorage.getItem('schetchik1.6') !== null) {
        var none = localStorage.getItem('schetchik1.6');
        $('.right6').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right6').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right6').addClass('none');
        localStorage.setItem('schetchik1.6', 'right6');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    //beloded  start
    if (localStorage.getItem('schetchik.bely-right1') !== null) {
        var none = localStorage.getItem('schetchik.bely-right1');
        $('.right-bely1').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right-bely1').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right-bely1').addClass('none');
        localStorage.setItem('schetchik.bely-right1', 'right-bely1');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });
    if (localStorage.getItem('schetchik.bely-right2') !== null) {
        var none = localStorage.getItem('schetchik.bely-right2');
        $('.right-bely2').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right-bely2').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right-bely2').addClass('none');
        localStorage.setItem('schetchik.bely-right2', 'right-bely2');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    if (localStorage.getItem('schetchik.bely-error1') !== null) {
        var none = localStorage.getItem('schetchik.bely-error1');
        $('.error-bely1').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error-bely1').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error-bely1').addClass('none');
        localStorage.setItem('schetchik.bely-error1', 'error-bely1');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });


    if (localStorage.getItem('schetchik.bely-error2') !== null) {
        var none = localStorage.getItem('schetchik.bely-error2');
        $('.error-bely2').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error-bely2').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error-bely2').addClass('none');
        localStorage.setItem('schetchik.bely-error2', 'error-bely2');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });
    if (localStorage.getItem('schetchik.bely-error3') !== null) {
        var none = localStorage.getItem('schetchik.bely-error3');
        $('.error-bely3').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error-bely3').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error-bely3').addClass('none');
        localStorage.setItem('schetchik.bely-error3', 'error-bely3');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });
    if (localStorage.getItem('schetchik.bely-error4') !== null) {
        var none = localStorage.getItem('schetchik.bely-error4');
        $('.error-bely4').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error-bely4').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error-bely4').addClass('none');
        localStorage.setItem('schetchik.bely-error4', 'error-bely4');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });
    //beloded end
    //start labocki 
    if (localStorage.getItem('schetchik.labocki-right1') !== null) {
        var none = localStorage.getItem('schetchik.labocki-right1');
        $('.right-labocki1').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right-labocki1').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right-labocki1').addClass('none');
        localStorage.setItem('schetchik.labocki-right1', 'labocki-right1');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    if (localStorage.getItem('schetchik.labocki-right2') !== null) {
        var none = localStorage.getItem('schetchik.labocki-right2');
        $('.right-labocki2').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right-labocki2').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right-labocki2').addClass('none');
        localStorage.setItem('schetchik.labocki-right2', 'labocki-right2');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    if (localStorage.getItem('schetchik.labocki-error1') !== null) {
        var none = localStorage.getItem('schetchik.labocki-error1');
        $('.error-labocki1').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error-labocki1').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error-labocki1').addClass('none');
        localStorage.setItem('schetchik.labocki-error1', 'labocki-error1');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    if (localStorage.getItem('schetchik.labocki-error2') !== null) {
        var none = localStorage.getItem('schetchik.labocki-error2');
        $('.error-labocki2').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error-labocki2').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error-labocki2').addClass('none');
        localStorage.setItem('schetchik.labocki-error2', 'labocki-error2');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    if (localStorage.getItem('schetchik.labocki-error3') !== null) {
        var none = localStorage.getItem('schetchik.labocki-error3');
        $('.error-labocki3').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error-labocki3').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error-labocki3').addClass('none');
        localStorage.setItem('schetchik.labocki-error3', 'labocki-error3');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    if (localStorage.getItem('schetchik.labocki-error4') !== null) {
        var none = localStorage.getItem('schetchik.labocki-error4');
        $('.error-labocki4').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error-labocki4').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error-labocki4').addClass('none');
        localStorage.setItem('schetchik.labocki-error4', 'labocki-error4');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    if (localStorage.getItem('schetchik.labocki-error5') !== null) {
        var none = localStorage.getItem('schetchik.labocki-error5');
        $('.error-labocki5').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error-labocki5').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error-labocki5').addClass('none');
        localStorage.setItem('schetchik.labocki-error5', 'labocki-error5');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });
    //end labocki
    //start pavlova
    if (localStorage.getItem('schetchik.right1-pavlova') !== null) {
        var none = localStorage.getItem('schetchik.right1-pavlova');
        $('.right1-pavlova').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right1-pavlova').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right1-pavlova').addClass('none');
        localStorage.setItem('schetchik.right1-pavlova', 'right1-pavlova');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    if (localStorage.getItem('schetchik.right2-pavlova') !== null) {
        var none = localStorage.getItem('schetchik.right2-pavlova');
        $('.right2-pavlova').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right2-pavlova').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right2-pavlova').addClass('none');
        localStorage.setItem('schetchik.right2-pavlova', 'right2-pavlova');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    if (localStorage.getItem('schetchik.error1-pavlova') !== null) {
        var none = localStorage.getItem('schetchik.error1-pavlova');
        $('.error1-pavlova').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error1-pavlova').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error1-pavlova').addClass('none');
        localStorage.setItem('schetchik.error1-pavlova', 'error1-pavlova');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    if (localStorage.getItem('schetchik.error2-pavlova') !== null) {
        var none = localStorage.getItem('schetchik.error2-pavlova');
        $('.error2-pavlova').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error2-pavlova').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error2-pavlova').addClass('none');
        localStorage.setItem('schetchik.error2-pavlova', 'error2-pavlova');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    if (localStorage.getItem('schetchik.error3-pavlova') !== null) {
        var none = localStorage.getItem('schetchik.error3-pavlova');
        $('.error3-pavlova').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error3-pavlova').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error3-pavlova').addClass('none');
        localStorage.setItem('schetchik.error3-pavlova', 'error3-pavlova');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });

    if (localStorage.getItem('schetchik.error4-pavlova') !== null) {
        var none = localStorage.getItem('schetchik.error4-pavlova');
        $('.error4-pavlova').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error4-pavlova').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error4-pavlova').addClass('none');
        localStorage.setItem('schetchik.error4-pavlova', 'error4-pavlova');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });

    if (localStorage.getItem('schetchik.error5-pavlova') !== null) {
        var none = localStorage.getItem('schetchik.error5-pavlova');
        $('.error5-pavlova').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error5-pavlova').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error5-pavlova').addClass('none');
        localStorage.setItem('schetchik.error5-pavlova', 'error5-pavlova');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    //end pavlova
    //start shastitko
    if (localStorage.getItem('schetchik.error1-shastic') !== null) {
        var none = localStorage.getItem('schetchik.error1-shastic');
        $('.error1-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error1-shastic').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error1-shastic').addClass('none');
        localStorage.setItem('schetchik.error1-shastic', 'error1-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });

    if (localStorage.getItem('schetchik.error2-shastic') !== null) {
        var none = localStorage.getItem('schetchik.error2-shastic');
        $('.error2-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error2-shastic').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error2-shastic').addClass('none');
        localStorage.setItem('schetchik.error2-shastic', 'error2-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error3-shastic') !== null) {
        var none = localStorage.getItem('schetchik.error3-shastic');
        $('.error3-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error3-shastic').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error3-shastic').addClass('none');
        localStorage.setItem('schetchik.error3-shastic', 'error3-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error4-shastic') !== null) {
        var none = localStorage.getItem('schetchik.error4-shastic');
        $('.error4-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error4-shastic').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error4-shastic').addClass('none');
        localStorage.setItem('schetchik.error4-shastic', 'error4-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error5-shastic') !== null) {
        var none = localStorage.getItem('schetchik.error5-shastic');
        $('.error5-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error5-shastic').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error5-shastic').addClass('none');
        localStorage.setItem('schetchik.error5-shastic', 'error5-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error6-shastic') !== null) {
        var none = localStorage.getItem('schetchik.error6-shastic');
        $('.error6-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error6-shastic').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error6-shastic').addClass('none');
        localStorage.setItem('schetchik.error6-shastic', 'error6-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error7-shastic') !== null) {
        var none = localStorage.getItem('schetchik.error7-shastic');
        $('.error7-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error7-shastic').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error7-shastic').addClass('none');
        localStorage.setItem('schetchik.error7-shastic', 'error7-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error8-shastic') !== null) {
        var none = localStorage.getItem('schetchik.error8-shastic');
        $('.error8-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error8-shastic').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error8-shastic').addClass('none');
        localStorage.setItem('schetchik.error8-shastic', 'error8-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error9-shastic') !== null) {
        var none = localStorage.getItem('schetchik.error9-shastic');
        $('.error9-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error9-shastic').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error9-shastic').addClass('none');
        localStorage.setItem('schetchik.error9-shastic', 'error9-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error10-shastic') !== null) {
        var none = localStorage.getItem('schetchik.error10-shastic');
        $('.error10-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error10-shastic').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error10-shastic').addClass('none');
        localStorage.setItem('schetchik.error10-shastic', 'error10-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error11-shastic') !== null) {
        var none = localStorage.getItem('schetchik.error11-shastic');
        $('.error11-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error11-shastic').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error11-shastic').addClass('none');
        localStorage.setItem('schetchik.error11-shastic', 'error11-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error12-shastic') !== null) {
        var none = localStorage.getItem('schetchik.error12-shastic');
        $('.error12-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error12-shastic').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error12-shastic').addClass('none');
        localStorage.setItem('schetchik.error12-shastic', 'error12-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error13-shastic') !== null) {
        var none = localStorage.getItem('schetchik.error13-shastic');
        $('.error13-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error13-shastic').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error13-shastic').addClass('none');
        localStorage.setItem('schetchik.error13-shastic', 'error13-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error14-shastic') !== null) {
        var none = localStorage.getItem('schetchik.error14-shastic');
        $('.error14-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error14-shastic').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error14-shastic').addClass('none');
        localStorage.setItem('schetchik.error14-shastic', 'error14-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error15-shastic') !== null) {
        var none = localStorage.getItem('schetchik.error15-shastic');
        $('.error15-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error15-shastic').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error15-shastic').addClass('none');
        localStorage.setItem('schetchik.error15-shastic', 'error15-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.right1-shastic') !== null) {
        var none = localStorage.getItem('schetchik.right1-shastic');
        $('.right1-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right1-shastic').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right1-shastic').addClass('none');
        localStorage.setItem('schetchik.right1-shastic', 'right1-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.right2-shastic') !== null) {
        var none = localStorage.getItem('schetchik.right2-shastic');
        $('.right2-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right2-shastic').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right2-shastic').addClass('none');
        localStorage.setItem('schetchik.right2-shastic', 'right2-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.right3-shastic') !== null) {
        var none = localStorage.getItem('schetchik.right3-shastic');
        $('.right3-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right3-shastic').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right3-shastic').addClass('none');
        localStorage.setItem('schetchik.right3-shastic', 'right3-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.right4-shastic') !== null) {
        var none = localStorage.getItem('schetchik.right4-shastic');
        $('.right4-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right4-shastic').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right4-shastic').addClass('none');
        localStorage.setItem('schetchik.right4-shastic', 'right4-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.right5-shastic') !== null) {
        var none = localStorage.getItem('schetchik.right5-shastic');
        $('.right5-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right5-shastic').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right5-shastic').addClass('none');
        localStorage.setItem('schetchik.right5-shastic', 'right5-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.right6-shastic') !== null) {
        var none = localStorage.getItem('schetchik.right6-shastic');
        $('.right6-shastic').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right6-shastic').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right6-shastic').addClass('none');
        localStorage.setItem('schetchik.right6-shastic', 'right6-shastic');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    class AudioController {
        constructor() {
            this.flipSound = new Audio('Assets__shast/Audio/flip.wav');
            this.matchSound = new Audio('Assets__shast/Audio/line_open (mp3cut.net).mp3');
            this.gamestartSound = new Audio('Assets__shast/Audio/00171.mp3');
        }
        flip() {
            this.flipSound.play();
        }
        match() {
            this.matchSound.play();
        }
        gamestart() {
            this.gamestartSound.play();
        }
    }

    class MixOrMatch {
        constructor(totalTime, cards) {
            this.cardsArray = cards;
            this.totalTime = totalTime;
            this.timeRemaining = totalTime;
            this.timer = document.getElementById('time-remaining')
            this.audioController = new AudioController();
        }

        startGame() {
            this.totalClicks = 0;
            this.timeRemaining = this.totalTime;
            this.cardToCheck = null;
            this.matchedCards = [];
            this.busy = true;
            this.audioController.gamestart();
            setTimeout(() => {
                this.shuffleCards(this.cardsArray);
                this.countdown = this.startCountdown();
                this.busy = false;
            }, 500)
            this.hideCards();
            this.timer.innerText = this.timeRemaining;
        }
        startCountdown() {
            return setInterval(() => {
                this.timeRemaining--;
                this.timer.innerText = this.timeRemaining;
                if (this.timeRemaining === 0)
                    this.gameOver();
            }, 1000);
        }
        gameOver() {
            clearInterval(this.countdown);
            smoke.alert("Конец игры!!! Попробуйте еще раз");
            ochlilocal--;
            $('.schet').html(ochlilocal);
            $('.error16-shastic').addClass('none');
            localStorage.setItem('schetchik.error16-shastic', 'error16-shastic');
            localStorage.setItem('schet', JSON.stringify(ochlilocal));
        }
        victory() {
            clearInterval(this.countdown);
            smoke.alert("Победа!!!");
            ochlilocal++;
            $('.schet').html(ochlilocal);
            $('.right7-shastic').addClass('none');
            localStorage.setItem('schetchik.right7-shastic', 'right7-shastic');
            localStorage.setItem('schet', JSON.stringify(ochlilocal));
        }
        hideCards() {
            this.cardsArray.forEach(card => {
                card.classList.remove('visible');
                card.classList.remove('matched');
            });
        }
        flipCard(card) {
            if (this.canFlipCard(card)) {
                this.audioController.flip();
                card.classList.add('visible');

                if (this.cardToCheck) {
                    this.checkForCardMatch(card);
                } else {
                    this.cardToCheck = card;
                }
            }
        }
        checkForCardMatch(card) {
            if (this.getCardType(card) === this.getCardType(this.cardToCheck))
                this.cardMatch(card, this.cardToCheck);
            else
                this.cardMismatch(card, this.cardToCheck);

            this.cardToCheck = null;
        }
        cardMatch(card01, card02) {
            this.matchedCards.push(card01);
            this.matchedCards.push(card02);
            card01.classList.add('matched');
            card02.classList.add('matched');
            this.audioController.match();
            if (this.matchedCards.length === this.cardsArray.length)
                this.victory();
        }
        cardMismatch(card01, card02) {
            this.busy = true;
            setTimeout(() => {
                card01.classList.remove('visible');
                card02.classList.remove('visible');
                this.busy = false;
            }, 1000);
        }
        shuffleCards(cardsArray) {
            for (let i = cardsArray.length - 1; i > 0; i--) {
                let randIndex = Math.floor(Math.random() * (i + 1));
                cardsArray[randIndex].style.order = i;
                cardsArray[i].style.order = randIndex;
            }
        }
        getCardType(card) {
            return card.getElementsByClassName('card-value')[0].src;
        }
        canFlipCard(card) {
            return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
        }
    }

    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', ready);
    } else {
        ready();
    }

    function ready() {
        let overlays = Array.from(document.getElementsByClassName('start'));
        let cards = Array.from(document.getElementsByClassName('card'));
        let game = new MixOrMatch(60, cards);

        overlays.forEach(overlay => {
            overlay.addEventListener('click', () => {
                overlay.classList.remove('visible');
                game.startGame();
            });
        });

        cards.forEach(card => {
            card.addEventListener('click', () => {
                game.flipCard(card);
            });
        });
    }
    //end shastitko

    //start urcha
    if (localStorage.getItem('schetchik.right1-urcha') !== null) {
        var none = localStorage.getItem('schetchik.right1-urcha');
        $('.right1-urcha').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right1-urcha').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right1-urcha').addClass('none');
        localStorage.setItem('schetchik.right1-urcha', 'right1-urcha');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.right2-urcha') !== null) {
        var none = localStorage.getItem('schetchik.right2-urcha');
        $('.righ2-urcha').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right2-urcha').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right2-urcha').addClass('none');
        localStorage.setItem('schetchik.right2-urcha', 'right2-urcha');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error2-urcha') !== null) {
        var none = localStorage.getItem('schetchik.error2-urcha');
        $('.error2-urcha').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error2-urcha').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error2-urcha').addClass('none');
        localStorage.setItem('schetchik.error2-urcha', 'error2-urcha');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error1-urcha') !== null) {
        var none = localStorage.getItem('schetchik.error1-urcha');
        $('.error1-urcha').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error1-urcha').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error1-urcha').addClass('none');
        localStorage.setItem('schetchik.error1-urcha', 'error1-urcha');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error3-urcha') !== null) {
        var none = localStorage.getItem('schetchik.error3-urcha');
        $('.error3-urcha').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error3-urcha').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error3-urcha').addClass('none');
        localStorage.setItem('schetchik.error3-urcha', 'error3-urcha');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error4-urcha') !== null) {
        var none = localStorage.getItem('schetchik.error4-urcha');
        $('.error4-urcha').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error4-urcha').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error4-urcha').addClass('none');
        localStorage.setItem('schetchik.error4-urcha', 'error4-urcha');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error5-urcha') !== null) {
        var none = localStorage.getItem('schetchik.error5-urcha');
        $('.error5-urcha').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error5-urcha').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error5-urcha').addClass('none');
        localStorage.setItem('schetchik.error5-urcha', 'error5-urcha');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });

    //end urcha
    //start gvaeva
    if (localStorage.getItem('schetchik.right1-gvaeva') !== null) {
        var none = localStorage.getItem('schetchik.right1-gvaeva');
        $('.right1-gvaeva').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right1-gvaeva').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right1-gvaeva').addClass('none');
        localStorage.setItem('schetchik.right1-gvaeva', 'right1-gvaeva');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.right2-gvaeva') !== null) {
        var none = localStorage.getItem('schetchik.right2-gvaeva');
        $('.right2-gvaeva').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right2-gvaeva').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right2-gvaeva').addClass('none');
        localStorage.setItem('schetchik.right2-gvaeva', 'right2-gvaeva');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.right3-gvaeva') !== null) {
        var none = localStorage.getItem('schetchik.right3-gvaeva');
        $('.right3-gvaeva').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right3-gvaeva').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right3-gvaeva').addClass('none');
        localStorage.setItem('schetchik.right3-gvaeva', 'right3-gvaeva');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error1-gvaeva') !== null) {
        var none = localStorage.getItem('schetchik.error1-gvaeva');
        $('.error1-gvaeva').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }

    $('.error1-gvaeva').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error1-gvaeva').addClass('none');
        localStorage.setItem('schetchik.error1-gvaeva', 'error1-gvaeva');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error2-gvaeva') !== null) {
        var none = localStorage.getItem('schetchik.error2-gvaeva');
        $('.error2-gvaeva').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error2-gvaeva').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error2-gvaeva').addClass('none');
        localStorage.setItem('schetchik.error2-gvaeva', 'error2-gvaeva');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error3-gvaeva') !== null) {
        var none = localStorage.getItem('schetchik.error3-gvaeva');
        $('.error3-gvaeva').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error3-gvaeva').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error3-gvaeva').addClass('none');
        localStorage.setItem('schetchik.error-gvaeva', 'error3-gvaeva');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error4-gvaeva') !== null) {
        var none = localStorage.getItem('schetchik.error4-gvaeva');
        $('.error4-gvaeva').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error4-gvaeva').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error4-gvaeva').addClass('none');
        localStorage.setItem('schetchik.error4-gvaeva', 'error4-gvaeva');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error5-gvaeva') !== null) {
        var none = localStorage.getItem('schetchik.error5-gvaeva');
        $('.error5-gvaeva').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error5-gvaeva').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error5-gvaeva').addClass('none');
        localStorage.setItem('schetchik.error5-gvaeva', 'error5-gvaeva');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error6-gvaeva') !== null) {
        var none = localStorage.getItem('schetchik.error6-gvaeva');
        $('.error6-gvaeva').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error6-gvaeva').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error6-gvaeva').addClass('none');
        localStorage.setItem('schetchik.error6-gvaeva', 'error6-gvaeva');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    //end gvaeva
    //start sharkova
    if (localStorage.getItem('schetchik.right1-sharkova') !== null) {
        var none = localStorage.getItem('schetchik.right1-sharkova');
        $('.right1-sharkova').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right1-sharkova').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right1-sharkova').addClass('none');
        localStorage.setItem('schetchik.right1-sharkova', 'right1-sharkova');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.right2-sharkova') !== null) {
        var none = localStorage.getItem('schetchik.right2-sharkova');
        $('.right2-sharkova').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.right2-sharkova').on('click', function() {
        ochlilocal++;
        $('.schet').html(ochlilocal);
        $('.right2-sharkova').addClass('none');
        localStorage.setItem('schetchik.right2-sharkova', 'right2-sharkova');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error1-sharkova') !== null) {
        var none = localStorage.getItem('schetchik.error1-sharkova');
        $('.error1-sharkova').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error1-sharkova').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error1-sharkova').addClass('none');
        localStorage.setItem('schetchik.error1-sharkova', 'error1-sharkova');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error2-sharkova') !== null) {
        var none = localStorage.getItem('schetchik.error2-sharkova');
        $('.error2-sharkova').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error2-sharkova').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error2-sharkova').addClass('none');
        localStorage.setItem('schetchik.error2-sharkova', 'error2-sharkova');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error3-sharkova') !== null) {
        var none = localStorage.getItem('schetchik.error3-sharkova');
        $('.error3-sharkova').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error3-sharkova').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error3-sharkova').addClass('none');
        localStorage.setItem('schetchik.error3-sharkova', 'error3-sharkova');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error4-sharkova') !== null) {
        var none = localStorage.getItem('schetchik.error4-sharkova');
        $('.error4-sharkova').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error4-sharkova').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error4-sharkova').addClass('none');
        localStorage.setItem('schetchik.error4-sharkova', 'error4-sharkova');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik.error5-sharkova') !== null) {
        var none = localStorage.getItem('schetchik.error5-sharkova');
        $('.error5-sharkova').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error5-sharkova').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error5-sharkova').addClass('none');
        localStorage.setItem('schetchik.error5-sharkova', 'error5-sharkova');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });

    //end sharkova





    if (localStorage.getItem('schetchik1') !== null) {
        var ball = localStorage.getItem('schetchik1');
        $('.error1').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error1').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error1').addClass('none');
        localStorage.setItem('schetchik1', 'error1');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));



    });
    if (localStorage.getItem('schetchik2') !== null) {
        var ball = localStorage.getItem('schetchik2');
        $('.error2').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);


    }
    $('.error2').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error2').addClass('none');
        localStorage.setItem('schetchik2', 'error2');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });

    if (localStorage.getItem('schetchik3') !== null) {
        var none = localStorage.getItem('schetchik3');
        $('.error3').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error3').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error3').addClass('none');
        localStorage.setItem('schetchik3', 'error3');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });
    if (localStorage.getItem('schetchik4') !== null) {
        var none = localStorage.getItem('schetchik4');
        $('.error4').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error4').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error4').addClass('none');
        console.log('wirl');
        localStorage.setItem('schetchik4', 'error4');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });
    if (localStorage.getItem('schetchik5') !== null) {
        var none = localStorage.getItem('schetchik5');
        $('.error5').addClass('none');
        var ochlilocal = JSON.parseses(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error5').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error5').addClass('none');
        localStorage.setItem('schetchik5', 'error5');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));


    });

    if (localStorage.getItem('schetchik6') !== null) {
        var none = localStorage.getItem('schetchik6');
        $('.error6').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error6').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error6').addClass('none');
        localStorage.setItem('schetchik6', 'error6');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    if (localStorage.getItem('schetchik7') !== null) {
        var none = localStorage.getItem('schetchik7');
        $('.error7').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error7').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error7').addClass('none');
        localStorage.setItem('schetchik7', 'error7');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });

    if (localStorage.getItem('schetchik8') !== null) {
        var none = localStorage.getItem('schetchik8');
        $('.error8').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error8').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error8').addClass('none');
        localStorage.setItem('schetchik8', 'error8');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });

    if (localStorage.getItem('schetchik9') !== null) {
        var none = localStorage.getItem('schetchik9');
        $('.error9').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error9').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error9').addClass('none');
        localStorage.setItem('schetchik9', 'error9');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });

    if (localStorage.getItem('schetchik10') !== null) {
        var none = localStorage.getItem('schetchik10');
        $('.error10').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error10').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error10').addClass('none');
        localStorage.setItem('schetchik10', 'error10');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });

    if (localStorage.getItem('schetchik11') !== null) {
        var none = localStorage.getItem('schetchik11');
        $('.error11').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error11').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error11').addClass('none');
        localStorage.setItem('schetchik11', 'error11');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });

    if (localStorage.getItem('schetchik12') !== null) {
        var none = localStorage.getItem('schetchik12');
        $('.error12').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error12').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error12').addClass('none');
        localStorage.setItem('schetchik12', 'error12');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });

    if (localStorage.getItem('schetchik13') !== null) {
        var none = localStorage.getItem('schetchik13');
        $('.error13').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error13').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error13').addClass('none');
        localStorage.setItem('schetchik13', 'error13');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));
    });

    if (localStorage.getItem('schetchik14') !== null) {
        var none = localStorage.getItem('schetchik14');
        $('.error14').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error14').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error14').addClass('none');
        localStorage.setItem('schetchik14', 'error14');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    if (localStorage.getItem('schetchik15') !== null) {
        var none = localStorage.getItem('schetchik15');
        $('.error15').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error15').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error15').addClass('none');
        localStorage.setItem('schetchik15', 'error15');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    if (localStorage.getItem('schetchik16') !== null) {
        var none = localStorage.getItem('schetchik16');
        $('.error16').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error16').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error16').addClass('none');
        localStorage.setItem('schetchik16', 'error16');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    if (localStorage.getItem('schetchik16') !== null) {
        var none = localStorage.getItem('schetchik16');
        $('.error17').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error17').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error17').addClass('none');
        localStorage.setItem('schetchik17', 'error17');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    if (localStorage.getItem('schetchik18') !== null) {
        var none = localStorage.getItem('schetchik18');
        $('.error18').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error18').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error18').addClass('none');
        localStorage.setItem('schetchik18', 'error18');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    if (localStorage.getItem('schetchik19') !== null) {
        var none = localStorage.getItem('schetchik19');
        $('.error19').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error19').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error19').addClass('none');
        localStorage.setItem('schetchik19', 'error19');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));

    });

    if (localStorage.getItem('schetchik20') !== null) {
        var none = localStorage.getItem('schetchik20');
        $('.error20').addClass('none');
        var ochlilocal = JSON.parse(localStorage.getItem('schet'));
        $('.schet').html(ochlilocal);

    }
    $('.error20').on('click', function() {
        ochlilocal--;
        $('.schet').html(ochlilocal);
        $('.error20').addClass('none');
        localStorage.setItem('schetchik20', 'error20');
        localStorage.setItem('schet', JSON.stringify(ochlilocal));


    });






});





const $pong = $('#pong');
const $playerPadel = $('#player-padel');
const $aiPadel = $('#ai-padel');
const $ball = $('#ball');
const $start = $('#start');

const UP_LEFT = -3 * Math.PI / 4;
const UP_RIGHT = -Math.PI / 4;
const DOWN_LEFT = 3 * Math.PI / 4;
const DOWN_RIGHT = Math.PI / 4;
let interval = null;
let aiPadel = null;
let ball = null;
let interval2 = null;
$start.click(function() {
    init();
})
this.timenotourRemaining = 0;
this.timeourRemaining = 0;
var mismatchSound = new Audio('audio/6_sto-k-odnomu-ne-pra_ilnyy-ot_et (mp3cut.net).mp3');
var matchSound = new Audio('audio/line_open (mp3cut.net).mp3');

function init() {
    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', ready);
    }
    aiPadel = {
        direction: 1,
        SPEED: 2,
        top: 0
    }

    ball = {
        top: 340,
        left: 460,
        angle: UP_LEFT,
        speed: 9
    }

    interval = setInterval(update, 10);
}

$pong.mousemove(function(evt) {
    if (!interval) {
        return;
    }
    const top = Math.min(
        $pong.height() - $playerPadel.height(),
        evt.pageY - $pong.offset().top
    )
    $playerPadel.css({
        top: `${top}px`
    });
});

function update() {
    updateBall();
    updateAiPadel();
}

function updateBall() {
    ball.top += ball.speed * Math.sin(ball.angle);
    ball.left += ball.speed * Math.cos(ball.angle);
    $ball.css({
        top: `${ball.top}px`,
        left: `${ball.left}px`
    });

    if (isBallOverlappingWithPlayerPadel()) {
        if (ball.angle === UP_LEFT) {
            ball.angle = UP_RIGHT;
        } else {
            ball.angle = DOWN_RIGHT;
        }
    }

    if (isBallOverlappingWithAiPadel()) {
        if (ball.angle === UP_RIGHT) {
            ball.angle = UP_LEFT;
        } else {
            ball.angle = DOWN_LEFT;
        }
    }

    if (isBallOverlappingWithTop()) {
        if (ball.angle === UP_RIGHT) {
            ball.angle = DOWN_RIGHT;
        } else {
            ball.angle = DOWN_LEFT;
        }
    }

    if (isBallOverlappingWithBottom()) {
        if (ball.angle === DOWN_RIGHT) {
            ball.angle = UP_RIGHT;
        } else {
            ball.angle = UP_LEFT;
        }
    }
    if (timeourRemaining === 10) {
        victory();
    }
    if (timenotourRemaining === 10) {
        gameover();
    }
    const winner = getWinner();
    if (winner) {
        endGame(winner);
    }
}

function getWinner() {
    this.timerour = document.getElementById('our');
    this.timernotour = document.getElementById('notour');
    this.timernotour.innerText = this.timenotourRemaining;
    this.timerour.innerText = this.timeourRemaining;
    if (ball.left < 0) {
        this.timenotourRemaining++;
        return 'red';
    } else if (ball.left > $pong.width() - $ball.width()) {
        this.timeourRemaining++;
        return 'blue';
    } else {
        return false;
    }
}


function isBallOverlappingWithPlayerPadel() {
    return $ball.overlaps('#player-padel').length > 0
}

function isBallOverlappingWithAiPadel() {
    return $ball.overlaps('#ai-padel').length > 0
}

function isBallOverlappingWithTop() {
    return ball.top <= 0;
}

function isBallOverlappingWithBottom() {
    return ball.top >= $pong.height() - $ball.height();
}

function updateAiPadel() {
    if (aiPadel.top > $pong.height() - $aiPadel.height()) {
        aiPadel.direction = -1;
    }

    if (aiPadel.top < 0) {
        aiPadel.direction = 1;
    }

    aiPadel.top += aiPadel.direction * aiPadel.SPEED;

    $aiPadel.css({
        top: `${aiPadel.top}px`
    });
}

function endGame(winner) {
    this.timernotour.innerText = this.timenotourRemaining;
    this.timerour.innerText = this.timeourRemaining;
    clearInterval(interval);
    interval = null;
    interval2 = setTimeout(init, 600);

}

function victory() {
    clearInterval(interval);
    interval = null;
    matchSound.onplaying = function() {
        smoke.alert("Поздравляю!!! Ты настоящий Бруно Резенде!");
    }
    matchSound.play();
}

function gameover() {
    clearInterval(interval);
    interval = null;
    mismatchSound.onplaying = function() {
        smoke.alert("Увы! Бруно Резенде из тебя никакой.");
    }
    mismatchSound.play();
}
$('#click').click(function() {
    $('#main').show();
    $('#click').hide();
});
$('#click-2').click(function() {
    $('#main-2').show();
    $('#click-2').hide();
});
$('#click-3').click(function() {
    $('#main-3').show();
    $('#click-3').hide();
});
$('#click-4').click(function() {
    $('#main-4').show();
    $('#click-4').hide();
});
$('#click-5').click(function() {
    $('#main-5').show();
    $('#click-5').hide();
});
$('#click-6').click(function() {
    $('#main-6').show();
    $('#click-6').hide();
});
$('#click-7').click(function() {
    $('#main-7').show();
    $('#click-7').hide();
});
$('#click-8').click(function() {
    $('#main-8').show();
    $('#click-8').hide();
});
$('#click-9').click(function() {
    $('#main-9').show();
    $('#click-9').hide();
});
$('#click-10').click(function() {
    $('#main-10').show();
    $('#click-10').hide();
});
$('#click-11').click(function() {
    $('#main-11').show();
    $('#click-11').hide();
});
$('#click-12').click(function() {
    $('#main-12').show();
    $('#click-12').hide();
});
$('#click-13').click(function() {
    $('#main-13').show();
    $('#click-13').hide();
});
$('#click-14').click(function() {
    $('#main-14').show();
    $('#click-14').hide();
});
$('#click-15').click(function() {
    $('#main-15').show();
    $('#click-15').hide();
});
$('#click-16').click(function() {
    $('#main-16').show();
    $('#click-16').hide();
});
$('#click-17').click(function() {
    $('#main-17').show();
    $('#click-17').hide();
});
$('#click-18').click(function() {
    $('#main-18').show();
    $('#click-18').hide();
});

function finalpro() {
    var myf = document.getElementById("finall");
    $('.finalochka').on('click', function() {
        if (ochlilocal == 0) {
            alert('hj');
            myf.innerText = 'К сожалению, ты не получил зачет. Но такое часто бывает на нашей специальности, так что не опускай руки!!! Попробуй еще раз. Мы уверены: у тебя всё получится!';
        }
    });
}
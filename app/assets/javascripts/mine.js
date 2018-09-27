var header_size = '41px';
function delclass(){
    $('#first-scr').attr('class','top-menu-elem');
    $('#second-scr').attr('class','top-menu-elem');
    $('#third-scr').attr('class','top-menu-elem');
    $('#four-scr').attr('class','top-menu-elem');
}
function delid() {
    for (var i = 1; i < 9; i++) {
        $('#s'+i+'h').attr('id','s1');
    }
}
var timer = setInterval(function () {

}, 16000);
$(document).ready(function(){
        var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        $('#s1').click();
        if(posTop <= $('nav').offset().top){
            $('nav').removeClass('fixed');
            $('#content').css({'margin-top':'0'});
        }
        if(posTop > $('nav').offset().top){
            $('nav').addClass('fixed');
            $('#content').css({'margin-top':'140px'})
        }
        if (posTop < $('#scope-block').offset().top-40){
            delclass();
        }
        if((posTop >  $('#scope-block').offset().top-200)){
            if ($('#first-scr').attr('class') === 'top-menu-elem') {
                delclass();
                $('#first-scr').attr('class', 'top-menu-elem-active');
            }
        }
        if((posTop >  $('#virtual-tour-block').offset().top-200)){
            if ($('#second-scr').attr('class') === 'top-menu-elem') {
                delclass();
                $('#second-scr').attr('class', 'top-menu-elem-active');
            }
        }
        if((posTop >  $('#about-us-block').offset().top-200)){
            if ($('#third-scr').attr('class') === 'top-menu-elem') {
                delclass();
                $('#third-scr').attr('class', 'top-menu-elem-active');
            }
        }
        if((posTop >  $('#order-block').offset().top-100)){
            if ($('#four-scr').attr('class') === 'top-menu-elem') {
                delclass();
                $('#four-scr').attr('class', 'top-menu-elem-active');
            }
        }
        $('label').attr('for','pet_cat').html('Я ознакомлен(а) с правилами <span>политики конфиденциальности</span> и даю <span> согласие на обработку персональных данных</span>');
        $('input').attr('required',true);
        $('#first-scr' ).on('click', function () {
            $('html,body').animate({scrollTop: $('#scope-block').offset().top - 68}, 'easeInOutCubic');

        });
        $('#second-scr').on('click', function () {
            $('html,body').animate({scrollTop: $('#virtual-tour-block').offset().top - 68},'easeInOutCubic');

        });
        $('#third-scr').on('click', function () {
            var kek = $('#about-us-block').offset().top;
            kek = kek - 64;
            $('html,body').animate({scrollTop: kek},'easeInOutCubic');

        });
        $('#four-scr').on('click', function () {
            $('html,body').animate({scrollTop: $('#order-block').offset().top - 68},'easeInOutCubic');

        });
        let count=0;

        setInterval(function () {
            switch(count) {
                case 0:  $('#display-block-content').animate({scrollLeft: 0});
                    delid();
                    $('#s1').attr('id', 's1h');
                    count++;
                break;

                case 1:  $('#display-block-content').animate({scrollLeft: 569});
                    delid();
                    $('#s2').attr('id', 's2h');
                    count++;
                    break;

                case 2:  $('#display-block-content').animate({scrollLeft: 2 * 569});
                    delid();
                    $('#s3').attr('id', 's3h');
                    count++;
                    break;

                case 3:  $('#display-block-content').animate({scrollLeft: 3 * 569});
                    delid();
                    $('#s4').attr('id', 's4h');
                    count++;
                    break;

                case 4: $('#display-block-content').animate({scrollLeft: 4 * 569});
                    delid();
                    $('#s5').attr('id', 's5h');
                    count++;
                    break;

                case 5:  $('#display-block-content').animate({scrollLeft: 5 * 569});
                    delid();
                    $('#s6').attr('id', 's6h');
                    count++;
                    break;

                case 6:  $('#display-block-content').animate({scrollLeft: 6 * 569});
                    delid();
                    $('#s7').attr('id', 's7h');
                    count++;
                    break;

                case 7:  $('#display-block-content').animate({scrollLeft: 7 * 569});
                    delid();
                    $('#s8').attr('id', 's8h');
                    count = 0;
                    break;
            };
        }, 3000);


        $('#s1').on('click', function () {
            $('#display-block-content').animate({scrollLeft: 0});
            delid();
            $(this).attr('id','s1h');
        });
        $('#s2').on('click', function () {
            $('#display-block-content').animate({scrollLeft: 569});
            delid();
            $(this).attr('id','s2h');
        });
        $('#s3').on('click', function () {
            $('#display-block-content').animate({scrollLeft :2 * 569});
            delid();
            $(this).attr('id','s3h');
        });
        $('#s4').on('click', function () {
            $('#display-block-content').animate({scrollLeft :3 * 569});
            delid();
            $(this).attr('id','s4h');
        });
        $('#s5').on('click', function () {
            $('#display-block-content').animate({scrollLeft : 4 * 569});
            delid();
            $(this).attr('id','s5h');
        });
        $('#s6').on('click', function () {
            $('#display-block-content').animate({scrollLeft :5 * 569});
            delid();
            $(this).attr('id','s6h');
        });
        $('#s7').on('click', function () {
            $('#display-block-content').animate({scrollLeft : 6 * 569});
            delid();
            $(this).attr('id','s7h');
        });
        $('#s8').on('click', function () {
            $('#display-block-content').animate({scrollLeft :7 * 569});
            delid();
            $(this).attr('id','s8h');
        });


        $('.border-button').on('click', function () {
            $('html,body').animate({scrollTop: $('#order-block').offset().top + 68});
        });
        $('.buy-button').on('click', function () {
            $('html,body').animate({scrollTop: $('#order-block').offset().top + 68});
        });
        $('.top-link').on('click', function () {
            $('html,body').animate({scrollTop: 0});
        });

        $('.target').hover(function () {
                $(this).animate({scrollTop: 225}, 225);
            },
            function() {
                $(this).animate({scrollTop: 0}, 100);
            }
        );

        $(document).on('scroll', function () {
            posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

            if(posTop <= $('nav').offset().top){
                $('nav').removeClass('fixed');
                $('#content').css({'margin-top':'0'});
            }
            if(posTop > $('nav').offset().top){
                $('nav').addClass('fixed');
                $('#content').css({'margin-top':'140px'})
            }
            if (posTop < $('#scope-block').offset().top-40){
                delclass();
            }
            if((posTop >  $('#scope-block').offset().top-200)){
                if ($('#first-scr').attr('class') === 'top-menu-elem') {
                    delclass();
                    $('#first-scr').attr('class', 'top-menu-elem-active');
                }
            }
            if((posTop >  $('#virtual-tour-block').offset().top-200)){
                if ($('#second-scr').attr('class') === 'top-menu-elem') {
                    delclass();
                    $('#second-scr').attr('class', 'top-menu-elem-active');
                }
            }
            if((posTop >  $('#about-us-block').offset().top-200)){
                if ($('#third-scr').attr('class') === 'top-menu-elem') {
                    delclass();
                    $('#third-scr').attr('class', 'top-menu-elem-active');
                }
            }
            if((posTop >  $('#order-block').offset().top-100)){
                if ($('#four-scr').attr('class') === 'top-menu-elem') {
                    delclass();
                    $('#four-scr').attr('class', 'top-menu-elem-active');
                }
            }

        });
        console.log($('#display-block-content').offset().top, $('#dp-b-c-six').offset().top);
});
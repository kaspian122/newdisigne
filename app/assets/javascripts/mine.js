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
$(document).ready(function(){
    $(document).ready(function() {
        $('input').attr('required',true);
        $('#first-scr' ).on('click', function () {
            $('html,body').animate({scrollTop: $('#scope-block').offset().top - 64});

        });
        $('#second-scr').on('click', function () {
            $('html,body').animate({scrollTop: $('#virtual-tour-block').offset().top - 64});

        });
        $('#third-scr').on('click', function () {
            var kek = $('#about-us-block').offset().top;
            kek = kek - 64;
            $('html,body').animate({scrollTop: kek});

        });
        $('#four-scr').on('click', function () {
            $('html,body').animate({scrollTop: $('#order-block').offset().top - 64});

        });
        $('#s1').on('click', function () {
            $('#display-block-content').animate({scrollTop: 0});
            delid();
            $(this).attr('id','s1h')
        });
        $('#s2').on('click', function () {
            $('#display-block-content').animate({scrollTop: 325.99});
            delid();
            $(this).attr('id','s2h')
        });
        $('#s3').on('click', function () {
            $('#display-block-content').animate({scrollTop:2 * 325.99});
            delid();
            $(this).attr('id','s3h')
        });
        $('#s4').on('click', function () {
            $('#display-block-content').animate({scrollTop:3 * 325.99});
            delid();
            $(this).attr('id','s4h')
        });
        $('#s5').on('click', function () {
            $('#display-block-content').animate({scrollTop: 4 * 325.99});
            delid();
            $(this).attr('id','s5h')
        });
        $('#s6').on('click', function () {
            $('#display-block-content').animate({scrollTop:5 * 325.99});
            delid();
            $(this).attr('id','s6h')
        });
        $('#s7').on('click', function () {
            $('#display-block-content').animate({scrollTop: 6 * 325.99});
            delid();
            $(this).attr('id','s7h')
        });
        $('#s8').on('click', function () {
            $('#display-block-content').animate({scrollTop:7 * 325.99});
            delid();
            $(this).attr('id','s8h')
        });
        $('.border-button').on('click', function () {
            $('html,body').animate({scrollTop: $('#order-block').offset().top - 64});
        });

        $('.target').hover(function () {
            $(this).html('My');
        },
        function() {
            $( this ).find( "my" ).remove();
        }
        );

        $(document).on('scroll', function () {
            var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
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
});
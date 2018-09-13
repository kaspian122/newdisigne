var header_size = '41px';
function delclass(){
    $('#first-scr').attr('class','top-menu-elem');
    $('#second-scr').attr('class','top-menu-elem');
    $('#third-scr').attr('class','top-menu-elem');
    $('#four-scr-scr').attr('class','top-menu-elem');
}
function delclassel() {
}
$(document).ready(function(){
    $(document).ready(function() {

        $('#first-scr').on('click', function () {
            $('html,body').animate({scrollTop: $('#scope-block').offset().top - 64});
            delclass();
            $(this).attr('class','top-menu-elem-active');
        });
        $('#second-scr').on('click', function () {
            $('html,body').animate({scrollTop: $('#virtual-tour-block').offset().top - 64});
            delclass();
            $(this).attr('class','top-menu-elem-active');
        });
        $('#third-scr').on('click', function () {
            var kek = $('#about-us-block').offset().top;
            kek = kek - 64;
            $('html,body').animate({scrollTop: kek});
            delclass();
            $(this).attr('class','top-menu-elem-active');
        });
        $('#four-scr-scr').on('click', function () {
            window.scrollTo(0,("#virtual-tour-block").offset().top);
            delclass();
            $(this).attr('class','top-menu-elem-active');
        });
        $(document).onscroll(function(){
            $(window).scroll(function() {
                var top = $(document).scrollTop();
                var kek = $('#top-block').height;
                if (top > kek) $('nav').addClass('fixed'); //200 - это значение высоты прокрутки страницы для добавления класс
                else $('nav').removeClass('fixed');
            });
        });



    });
});
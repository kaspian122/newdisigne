var header_size = '41px';
function delclass(){
    $('#first-scr').attr('class','top-menu-elem');
    $('#second-scr').attr('class','top-menu-elem');
    $('#third-scr').attr('class','top-menu-elem');
    $('#four-scr-scr').attr('class','top-menu-elem');
}
function delid() {
    for (var i = 1; i < 9; i++) {
        $('#s'+i+'h').attr('id','s1');
    }
}
$(document).ready(function(){
    $(document).ready(function() {

        $('#first-scr' ).on('click', function () {
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
        $('#s1').on('click', function () {
            delid();
            $(this).attr('id','s1h')
        });
        $('#s2').on('click', function () {
            delid();
            $(this).attr('id','s2h')
        });
        $('#s3').on('click', function () {
            delid();
            $(this).attr('id','s3h')
        });
        $('#s4').on('click', function () {
            delid();
            $(this).attr('id','s4h')
        });
        $('#s5').on('click', function () {
            delid();
            $(this).attr('id','s5h')
        });
        $('#s6').on('click', function () {
            delid();
            $(this).attr('id','s6h')
        });
        $('#s7').on('click', function () {
            delid();
            $(this).attr('id','s7h')
        });
        $('#s8').on('click', function () {
            delid();
            $(this).attr('id','s8h')
        });
    });
});
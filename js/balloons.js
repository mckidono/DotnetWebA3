$('document').ready(function(){

$('label#red').on("mouseover",turnRed);
$('label#green').on("mouseover",turnGreen);
$('label#blue').on("mouseover",turnBlue);

});

function turnRed(){
    $('h1#birthday').css('color','#f51000');
}
function turnGreen(){
    $('h1#birthday').css('color','#189100');
}
function turnBlue(){
    $('h1#birthday').css('color','#0081d6');
}


$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
         $('#' + this.id + 'Img').addClass('animated bounceOutUp');
    });
});

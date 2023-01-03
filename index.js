function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
    
}
function fadeout(){
    setInterval(loader, 2000);
}
window.onload = fadeout;

$(document).ready(function () {
    $('.groups').hide();
    $('.filterBtns').removeClass('sBtnOne');
    $('.filterBtns').addClass('sBtnTwo');

    $('.filterBtns').click(function () {
        let target = $(this).attr('data-target');
        $('.groups').hide();
        $(target).show();
        $('.filterBtns').removeClass('sBtnOne');
        $('.filterBtns').addClass('sBtnTwo');
        $(this).removeClass('sBtnTwo');
        $(this).addClass('sBtnOne');
    });

    $('.filterBtns').first().click();
});
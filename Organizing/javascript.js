function toggleMenu(){
    let toggle = document.querySelector('.toggle');
    toggle.classList.toggle('active');
}
$(document).ready(function(){
    $(".toggle").click(function(){
        $(".sidebar").fadeToggle();
    });
});



$(document).ready(function () {
    $('#Button1').on('click', function () {
        var number = $('#number');
        number += 1;
        $('#Container').clone().appendTo("#new-Station");
    });

    $('#Button1').on('click', function () {
        $("#new-Station").fadeIn();
    });

});
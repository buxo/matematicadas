$(document).ready(function() {
    abrirMenu();

    //Abrir-Cerrar menu
    function abrirMenu() {
        //abrir
        $(".interruptores #abrir").click(function(e) {
            e.preventDefault();
            $(this).slideUp(0);
            $(".interruptores #cerrar").slideDown(500);
            $("#menu").animate({ left: '15%' }, 1000);
        });
        //cerrar
        $(".interruptores #cerrar").click(function(e) {
            e.preventDefault();
            $(this).slideUp(0);
            $(".interruptores #abrir").slideDown(500);
            $("#menu").animate({ left: '105%' }, 1000);
        });
    }

});
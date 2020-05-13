$(document).ready(function() {

    $('button').click(function() {
        $('#div1').fadeIn(5000); // nascer do sol
        $('#div2').fadeOut(5000); //por do sol
        $('#div3').fadeToggle(5000); // os dois, basta clicar no botão pra ele nascer e se por
    })

})
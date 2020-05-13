//Faça o menu lateral aparecer

$(document).ready(function () {

    $('#botaoAbrir').click(function () {
        $('#menulateral').css('display', 'block');
        $('.div-botao').css('margin-left', '250px')
    })

    $('#botaoFechar').click(function() {
        $('#menulateral').css('display', 'none');
        $('.div-botao').css('margin-left', '0')
    })



    // $('#botaoAbrir').click(function() {
    //     $('#menulateral').show()
    // })

    // $('#botaoFechar').click(function() {
    //     $('#menulateral').hide()
    // })
})
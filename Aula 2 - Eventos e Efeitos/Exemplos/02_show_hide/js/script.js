$(document).ready(function(){

    let elementoComAcao = $('#aguardandoAcao')

    $('#hideElement').click(function() {
       elementoComAcao.hide('slow')
      // elementoComAcao.hide('fast')
       //elementoComAcao.hide(5000) // 2 segundos
    })

    $('#showElement').click(function() {
        elementoComAcao.show('slow')
      // elementoComAcao.show('fast')
       //elementoComAcao.showw(5000) // 2 segundos
    })

    $('#toggleElement').click(function() {
        elementoComAcao.toggle('slow')
    })
//eventos de teclado, qnd clica, digitando
    $('input').keyup(function() {
        $(this).val()

        if( $(this).val() == 'hide') {
            elementoComAcao.hide('slow')
        }
        if( $(this).val() == 'show') {
            elementoComAcao.show('slow')
        }
        if( $(this).val() == 'toggle') {
            elementoComAcao.toggle('slow')
        }
    })
})
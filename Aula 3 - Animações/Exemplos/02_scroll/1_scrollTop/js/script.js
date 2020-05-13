$(document).ready(function() {

    $('#buttonTop').click(function(){
        //coloca o html e o body pq alguns navegadores não fuincioam ou com um ou com outro.. ai chama os dois elementos
        $('html, body').animate({
            //sem  '' porque é um metodo ja existente
            scrollTop: '0'}, 2000)
    })
})
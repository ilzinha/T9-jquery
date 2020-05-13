//1. Faça com que os elementos dentro do menu aparecem quando o mouse passar por eles.
//2. Os elementos devem desaparecer quando o mouse não estiver passando por eles

$(document).ready(function () {


    //Dessa forma os tres aparecem de vez
    // $('.menu1').mouseover(function() {
    //     $('.menu2').show('slow')
    // })

    // $('.menu1').mouseout(function(){
    //     $('.menu2').hide('slow')
    // })

    //ou

    // $('li').hover(function() {
    //         $(this).find('.menu2').slideToggle()
    // })


    //ou

    $('li').hover(function () {
        $(this).find('.menu2').slideDown()
    }, 
    function() {
        $(this).find('.menu2').slideUp()
    })

})
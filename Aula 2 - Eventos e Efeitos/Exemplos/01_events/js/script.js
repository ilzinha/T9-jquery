$(document).ready( () => {

    $('h2').click(function () {
        //referencia aquele elemento que está sendo afetado pelo evento
        $(this).css({
            'background-color': 'black',
            'color': 'white'
        })
    })

    $('h3').dblclick(function() {
        alert('este elemento foi clicado duas vezes')
        $(this).hide('slow')
        $(this).show('slow')
    })

    $('#div').mouseenter(function() {
        $(this).css('background', '#666')
    })

    $('#div').mouseleave(function() {
        $(this).text('Volta!!!')
    })

    $('input').focus(function() {
        $(this).css('background', '#666')
    })

    $('input').blur(function () {
        $(this).css('background', '#f66')
    })

})
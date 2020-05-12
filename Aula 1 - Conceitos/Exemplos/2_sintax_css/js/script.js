$(document).ready(function () {

    // Encadeamento de bloco    
    $('h1')
        .css('color', '#f66')
        .hide()
        .delay('1000')
        .fadeIn('slow')

    $('.item1').click(function () {
        $('body').css('background', 'pink')
        $('h1').text('Mudei!')
    })

    $('li').css({
        listStyle: 'none',
        color: 'blue',
        padding: '10px'
        
    })

});
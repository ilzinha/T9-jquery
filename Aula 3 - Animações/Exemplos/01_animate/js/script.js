//o animate() aceita o estilo(css) e duração(quanto tempo essa animação vai acontecer)
// fica assim:
// {estilo - css}, duranção, function()
//sempre nessa ordem pq ele não entende se for diferente



$(document).ready(function () {

    // $('#animate').click(function () {

    //     $('#content').animate({
    //         'height': '200px'
    //     }, 'slow')
    // })

    $('#animate').click(function () {
        $('#content').animate({
            'height': '200px'
        }, 'slow', () => {
            alert('animação termono')
        })
    })

})
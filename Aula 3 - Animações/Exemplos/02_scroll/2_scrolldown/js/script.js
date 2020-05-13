$(document).ready(function() {
    //offset é o posicionamento dos meus elementors.. e vamos precisar dele para saber como usar o scroll
    $('#button').click(function() {
        $(this).offset()
        alert('top:' + $(this).offset().top)
    }) 
})
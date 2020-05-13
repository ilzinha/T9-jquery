$(document).ready(function () {

    $('p').html(`Olá é a mesma coisa que 
    <span class="cor">Hello</span> 
    <strong>Darkness</strong>`);

    $('li').addClass('margin');

    $('li').removeClass('item1');

    //nessa função, ao clicar em  qlqr elemento p, ele usa a função toggleClass, que adiciona uma classe e remove ela, sempre ao clicar
    $('p').click(function () {
        $(this).toggleClass('destaque')
    })
});

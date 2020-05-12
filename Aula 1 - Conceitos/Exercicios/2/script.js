/*
    Liga e Desliga - Versão JQuery

  - Altere o background do body, o título da página e o gif da imagem quando o usuário clicar no botão
  - Você pode criar uma função "changeBg" que será responsável pela lógica dessa alteração
  - Extra: Modifiquem o estilo da página para ela ficar com a sua cara!
*/


$(document).ready( () => {

  const bodyColor = $('body')
  bodyColor.css('background', 'white')


  let changeBg = () => {

    if (bodyColor[0].style.background == 'white') {
      $('body').css('background', '#666');
      $('h1')
        .text('Desligado')
        .css('color', 'white')
      $('.imagem').attr('src', 'https://media.giphy.com/media/HL1MeEq6XebEA/giphy.gif')

    } else {
      $('body').css('background', 'white');
      $('h1')
        .text('Ligado')
        .css('color', '#000')
      $('.imagem').attr('src', 'https://media.giphy.com/media/3KVRMtLXfORVosk6TW/giphy.gif')

    }
  }

  $('#botao').click(changeBg)

})
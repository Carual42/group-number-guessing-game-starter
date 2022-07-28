$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  getRandomNum();
  $('#submit-guess').on('click', sendGuessToServer);
  $('#submit-guess').on('click', emptyFields);
  // $('#reset-game').on('click', resetGame);
}

let numberOfGuesses = 0;

/**
 * Sends input guesses to server, increments guess counter
 */

function sendGuessToServer() {
  console.log('in sendGuessToServer');
  numberOfGuesses++;
  console.log('number of guesses:', numberOfGuesses);
$.ajax({
  type:'POST',
  url: '/guesses',
  data: {
    meaghan: $('#meaghan-input').val(),
    brianna: $('#brianna-input').val(),
    alex: $('#alex-input').val(),
    holly: $('#holly-input').val(),
    bryn: $('#bryn-input').val()
  }
}).then(function (response) {
  console.log(response);
  getGuesses();
});

}


//function to get random number
function getRandomNum() {
  $.ajax({
      type: 'GET',
      url: '/randomNum'
  }).then(function (response) {
      // $('#artistTableBody').empty();
      console.log(response);
    }
  );}

// function to get guesses
function getGuesses() {
  $.ajax({
      type: 'GET',
      url: '/guesses'
  }).then(function (response) {
    $('#content').empty();
    $('#content').append(`
    <h3>${numberOfGuesses}</h3>
    `)
    for (let i = 0; i < response.length; i++) {
      $('#content').append(`
        <h2>Meaghan's Guess: ${response[i].meaghan}</h2>
        <h2>Brianna's Guess: ${response[i].brianna}</h2>
        <h2>Alex's Guess: ${response[i].alex}</h2>
        <h2>Holly's Guess: ${response[i].holly}</h2>
        <h2>Bryn's Guess: ${response[i].bryn}</h2>
        <hr>
      `);
    }
  });
}

function emptyFields() {
  $('#meaghan-input').val('');
  $('#brianna-input').val('');
  $('#alex-input').val('');
  $('#holly-input').val('');
  $('#bryn-input').val('');
}

  
$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  getRandomNum()
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




  
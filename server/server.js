const express = require('express');
const bodyParser = require('body-parser');
const { support } = require('jquery');
const app = express();
const PORT = 5001;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));


// function to get random number
function randomNumber(min, max) {
 let randomNum = Math.floor(Math.random() * (1 + max - min) + min);
  return randomNum
}
// function to find out if guesses were right
function checkWinner(array, Num) {
  let feedBack = '';
  let response = []
for (let i = 0; i < array.length-1; i++){
  if (array[i] > Num) {
    feedBack = ('too high');
    response.push(feedBack);
  } else if (array[i] < Num){
    feedBack = ('too low');
    response.push(feedBack);
  } else{
    feedBack = ('Winner');
    response.push(feedBack);
  }
}
return feedBack;
}
app.get('/winner', (req, res) => {
  checkWinner(guessesArray, randomNum);
  let feedbackObject = {winnernum: feedBack};
  console.log(feedbackObject);
  res.send(feedbackObject);
})
// GET & POST Routes go here
// for random number
let randomNum = randomNumber(1, 25);
app.get('/randomNum', (req, res) => {
  // console.log(randomNumber(1, 25));
  let gameNumber = {number: randomNum};
  console.log(gameNumber);
  res.send(gameNumber);
});

let guessesArray = [];
//for guess
app.get('/guesses', (req, res) => {
  res.send(guessesArray);
});
app.post('/guesses', (req, res) => {
  let guessesToAdd = req.body;
  console.log('guessesToAdd:', req.body);
  guessesArray.push(guessesToAdd);
  res.sendStatus(200);
});


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

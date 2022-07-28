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
// GET & POST Routes go here
app.get('/randomNum', (req, res) => {
  // console.log(randomNumber(1, 25));
  let randomNum = randomNumber(1, 25);
  let gameNumber = {number: randomNum};
  console.log(gameNumber);
  res.send(gameNumber);
});
// app.post('/randomNum', (req, res) => {
//   // let gameNum = req.body;
//   console.log(req.body);
//   res.sendStatus(200);
// });


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

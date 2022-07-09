'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!!!'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').textContent = 10;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random()*20)
let score = 20;
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
//document.querySelector('.number').textContent = secretNumber;
document.querySelector('.again').addEventListener('click', function(){
    score = 20
    secretNumber = Math.trunc(Math.random()*20)
    displayMessage ('Start guessing. . .');
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.body.style.backgroundColor = '#222' ;
    document.querySelector('.score').textContent = 20

});


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        displayMessage ('No number -!')
    } else if(secretNumber === guess){
        displayMessage ('Its correct number!');
        document.querySelector('.number').textContent = secretNumber;
        document.body.style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.score').textContent = 20
    } else if (secretNumber !== guess){
        if (score > 1) {
            score --;
            document.querySelector('.score').textContent = score;
            displayMessage ( guess < secretNumber ? 'Number too low!' : 'Number too high!' );
         } else 
            {
            displayMessage ('You lost the game');
            document.body.style.backgroundColor = 'red';
        }
    }     
});

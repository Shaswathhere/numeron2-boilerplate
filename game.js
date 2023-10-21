// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

var random1 = Math.floor((Math.random())*100) + 1
var number1Box = document.getElementById('number1')


var random2 = Math.floor((Math.random())*100) + 1
var number2Box = document.getElementById('number2')


// Iteration 3: Creating variables required to make the game functional

var score = 0
var symbol
var Plus = document.querySelector('#plus')
var Minus = document.querySelector('#minus')
var Mul = document.querySelector('#mul')
var Divide = document.querySelector('#divide')
var Modulus = document.querySelector('#modulus')


// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

var number3Box = document.getElementById('number3')
var number3

// Iteration 5: Creating a randomise function to make the game functional


var x

function Randomise(){
    timer = 21
    random1 = Math.floor((Math.random())*100) + 1
    random2 = Math.floor((Math.random())*100) + 1
    if(random2>random1){
        x = random1
        random1 = random2
        random2 = x
    }
    symbol = Math.floor((Math.random()) * 5) + 1;

    if(symbol == 1){
        number3 = random1 + random2
    }
    else if(symbol == 2){
        number3 = random1 - random2
    }
    else if(symbol == 3){
        number3 = random1 * random2
    }
    else if(symbol == 4){
        number3 = Math.floor(random1 / random2)
    }
    else if(symbol == 5){
        number3 = random1 % random2
    }
    else{
        Randomise()
    }
    
    number1Box.innerHTML = random1
    number2Box.innerHTML = random2
    number3Box.innerHTML = number3
}
Randomise()

// Iteration 6: Making the Operators (button) functional

Plus.addEventListener('click',() => {
    if(random1+random2===number3){
        score++
        Randomise()
        localStorage.setItem('score',score)
        countDown()
    }
    else{
        location.href = "gameover.html";
    }
})

Minus.addEventListener('click',() => {
    if(random1-random2===number3){
        score++
        Randomise()
        localStorage.setItem('score',score)
        countDown()
    }
    else{
        location.href = "gameover.html";
    }
})

Mul.addEventListener('click',() => {
    if(random1*random2===number3){
        score++
        Randomise()
        localStorage.setItem('score',score)
        countDown()
    }
    else{
        location.href = "gameover.html";
    }
})

Divide.addEventListener('click',() => {
    if(Math.floor(random1/random2)===number3){
        score++
        Randomise()
        localStorage.setItem('score',score)
    }
    else{
        location.href = "gameover.html";
    }
})

Modulus.addEventListener('click',() => {
    if(random1%random2===number3){
        score++
        Randomise()
        localStorage.setItem('score',score)
        countDown()
    }
    else{
        location.href = "gameover.html";
    }
})
// Iteration 7: Making Timer functional


var timerDiv = document.getElementById('timer')
var timer = 21
function countDown(){
    
    
    if(timer>0){
        timer--
        timerDiv.textContent = timer
    }
    else{
        window.location.href = 'gameover.html'
    }
    
}
setInterval(countDown, 1000);

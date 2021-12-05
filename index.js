// 1st Dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

// var image1 = document.querySelectorAll("img")[0];

document.getElementsByTagName("img")[0].src = randomImageSource;

// image1.setAttribute("src", randomImageSource);



// 2nd Dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomDiceImage;

// var image2 = document.querySelectorAll("img")[1];

document.querySelectorAll("img")[1].src = randomImageSource;

// image2.setAttribute("src", randomImageSource);


/* predict the winner */

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
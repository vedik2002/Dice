 function program() {

   var randomNumber1 = Math.floor(Math.random() * 6) + 1;

   var randomImagedice1 = "dice" + randomNumber1 + ".png";

   var randomSorce1 = "Images/" + randomImagedice1;

   var image1 = document.querySelectorAll("img")[0];

   image1.setAttribute("src", randomSorce1);

   var randomNumber2 = Math.floor(Math.random() * 6) + 1;

   var randomImagedice2 = "dice" + randomNumber2 + ".png";

   var randomSorce2 = "Images/" + randomImagedice2;

   var image2 = document.querySelectorAll("img")[1];

   image2.setAttribute("src", randomSorce2);

   if (randomNumber1 > randomNumber2) {
     var player1 = document.querySelectorAll("h1")[0];
     player1.innerHTML = "Player 1 wins";
   } else if (randomNumber2 > randomNumber1) {
     var player2 = document.querySelectorAll("h1")[0];
     player2.innerHTML = "Player 2 Wins";
   } else {
     var player = document.querySelectorAll("h1")[0];
     player.innerHTML = "Draw";
   }
 }

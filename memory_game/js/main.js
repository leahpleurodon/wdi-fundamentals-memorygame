console.log("Up and running!");

var userScore = 0;

var cards = [
{rank: "queen",	suit:"hearts", cardImage:"images/queen-of-hearts.png"},
{rank: "queen",	suit:"diamonds", cardImage:"images/queen-of-diamonds.png"},
{rank: "king",	suit:"hearts", cardImage:"images/king-of-hearts.png"},
{rank: "king",	suit:"diamonds", cardImage:"images/king-of-diamonds.png"}
];

var cardsInPlay = [];

var matchFinish = function(){
  console.log(congratulations);
};

var checkForMatch = function(){
  if (cards[cardsInPlay[0]].rank === cards[cardsInPlay[1]].rank) {
    alert("You found a match!");
    userScore ++;
    cardsInPlay = [];
    document.getElementById("user-score").innerHTML = userScore
    if (userScore === 2){
      matchFinish();
    };
  } else {
    alert("Sorry, try again.");
  };
};

var flipCard = function(){
  var cardId = this.getAttribute('id');
  cardsInPlay.push(cardId);
  this.setAttribute("src", cards[cardId].cardImage)
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  if (cardsInPlay.length === 2){
    checkForMatch();
  };
};

var createBoard = function(){
  for (var i = 0; i < cards.length; i++) {
      var cardElement = document.createElement("img");
      cardElement.setAttribute("src", "images/back.png");
      cardElement.setAttribute("id", i);
      document.getElementById("game-board").appendChild(cardElement);
      cardElement.addEventListener('click' , flipCard);
  };
};

createBoard();

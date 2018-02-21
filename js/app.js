
// an array that holds all the cards
let card = document.getElementsByClassName("card");
let cards = [...card]
console.log(cards);


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


// function that will introduce the neccesary class to the clicked card
var showCard = function (){
   this.classList.toggle("open");
   this.classList.toggle("show");
   this.classList.toggle("disabled");
};

for (var i = 0; i < cards.length; i++){
  card = cards[i];
   card.addEventListener("click", showCard);
};

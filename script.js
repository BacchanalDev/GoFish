const gameContainer = document.getElementById("game");
/*    let startOver = document.querySelector('button'),
    heading = document.querySelector('h1');
  
    //startOver.addEventListener('click',(event)=>{
    //event.preventDefault();
    //make code to reset game in here
    */
   let card1 = null;
   let card2 = null;
   let cardsFlipped = 0;
   let noClicking = false;
   


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];



// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    newDiv.classList.add('backOfCard');


    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  if(noClicking) return;
  if(event.target.classList.contains('flipped')) return;
  // you can use event.target to see which element was clicked
  let currentCard = event.target;
  currentCard.style.backgroundColor = currentCard.classList[0];
  gameContainer.style.backgroundColor = currentCard.classList[0];
  console.log(currentCard.classList);

  if (!card1 || !card2) {
    currentCard.classList.add("flipped");
    if(!card1){
    card1= currentCard
    }
    if(currentCard === card1){
      card2 = null
    } else{
      card2 = currentCard
    }
  //   card1 = card1 || currentCard;
  //   card2 = currentCard === card1 ? null : currentCard;
  }
  if (card1 && card2) {
    noClicking = true;
    // debugger
    let gif1 = card1.className;
    let gif2 = card2.className;

    if (gif1 === gif2) {
      cardsFlipped += 2;
      card1.removeEventListener("click", handleCardClick);
      card2.removeEventListener("click", handleCardClick);
      card1 = null;
      card2 = null;
      noClicking = false;
    } else {
      setTimeout(function() {
        gameContainer.style.backgroundColor =''
        card1.style.backgroundColor = "";
        card2.style.backgroundColor = "";
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1 = null;
        card2 = null;
        noClicking = false;
      }, 1000);
    }
  }

  if (cardsFlipped === COLORS.length) alert("game over!");
}


// when the DOM loads
createDivsForColors(shuffledColors);



  gameContainer.addEventListener('keypress', function(event){
    console.log(event);
    clickCount= 0
    if(event){
      clickCount++
    }
     console.log( clickCount)
    })






    // cardA:

// cardB: 
 
// let faceUP = 
// faceDown
  // function issaMatch(){
  //   if()

  // };
// make sure u have localStorage to be set to first click and another

  // let noBueno = setInterval (function(){

  // }, 1000 )



  // });

  /* .addEventListener('click', function(event){
      let clicks = 0,
      tries;
    if(event. ){
      clicks++
    }
    tries =clicks/2;
    if(tries>=1){
      let score = document.createElement('p'),
      score.innerText ='You have tried ' tries;
      scoreboard.classList.add('scoreboard')
      heading.append(scoreboard);
    }
    return tries
  })

*/

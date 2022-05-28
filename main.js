


//--->VARIABLES

var manifestBtn = document.querySelector('.manf-btn')





//---> EVENT LISTENERS
manifestBtn.addEventListener('click', randomize)




//---> EVENT HANDLERS








//--->FUNCTIONS


function randomize(#affirmations){
 var randomIndex = getRandomIndex(affirmations)
 var randomDetails = #affirmations[randomIndex]
 console.log(randomDetails)
};




function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

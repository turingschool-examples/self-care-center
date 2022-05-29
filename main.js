var affirm = document.querySelector("#Affirmation");
var mantra = document.querySelector("#Mantra");
var receiveButton = document.querySelector("button");
var meditationMan = document.querySelector("#mm-image");
var messageBox = document.querySelector(".text-box");
// var messageBox = document.querySelector('') /this is needed for the message to go into (whichever one is selected.)

// event listeners below:

receiveButton.addEventListener('click', getMessage);


function getMessage(){
  switchScreen();
  if(affirm.checked === true){
    return randomizeAffirmations()
  } else if(mantra.checked === true){
    return randomizeMantras()
  // } else {
  //   alert("Oops, it looks like you haven't picked an option!")
  // }
  console.log(getMessage());
}
};

function randomizeAffirmations(){
  var oneAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
  messageBox.innerText = oneAffirmation
};

// function randomizeAffirmations() {
//   return affirmations[Math.floor(Math.random()*affiramtions.length)];
// }

function randomizeMantras(){
  var oneMantra = mantras[Math.floor(Math.random() * mantras.length)];
  messageBox.innerText = oneMantra
};


function switchScreen(){
  meditationMan.classList.add('hidden');
  messageBox.classList.remove('hidden');
};



// function randomElement(array){
//  var randomIndex = getRandomIndex(array)
//  var randomDetails = array[randomIndex]
//  console.log(randomDetails)
// };

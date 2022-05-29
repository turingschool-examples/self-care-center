var affirm = document.querySelector("#Affirmation");
var mantra = document.querySelector("#Mantra");
var receiveButton = document.querySelector("button");
var meditationMan = document.querySelector("#mm-image");
var messageBox = document.querySelector(".text-box");
var clearButton = document.querySelector(".clear-button");

// event listeners below:

receiveButton.addEventListener('click', getMessage);
clearButton.addEventListener('click', clearMessage);


function getMessage(){
  switchScreen();
  if(affirm.checked === true){
    return randomizeAffirmations()
  } else if(mantra.checked === true){
    return randomizeMantras()
  } else {
    alert("Oops, it looks like you haven't picked an option!")
    meditationMan.classList.remove('hidden');
    clearButton.classList.add('hidden');
  }
};

function randomizeAffirmations(){
  var oneAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
  messageBox.innerText = oneAffirmation
};

function randomizeMantras(){
  var oneMantra = mantras[Math.floor(Math.random() * mantras.length)];
  messageBox.innerText = oneMantra
};

function switchScreen(){
  meditationMan.classList.add('hidden');
  messageBox.classList.remove('hidden');
  clearButton.classList.remove('hidden');
};
//
function clearMessage(){
  if(messageBox.innerText = ''){
    document.querySelector('message.wrapper').reset();
  }
  meditationMan.classList.remove('hidden');
  clearButton.classList.add('hidden');
}

// function randomElement(array){
//  var randomIndex = getRandomIndex(array)
//  var randomDetails = array[randomIndex]
//  console.log(randomDetails)
// };

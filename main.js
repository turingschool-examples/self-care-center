var mantras =
["My mind is brilliant",
"I create my own path and walk it with joy",
"My positive thoughts guide me to new heights",
"I am conquering my fears and becoming stronger each day",
"I will have a good day, because it's my choice",
"I am that I am",
"May my heart be kind my mind fierce and my spirit brave",
"Expect nothing and appreciate everything",
"I am free from sadness",
"I choose purpose over perfect"]

var affirmations =
["I choose to be happy and love myself everyday",
"I am worthy",
"Today is going to be a great day",
"I am becoming more confident everyday",
"I will not worry about things I cannot control",
"I am grateful for all that I have",
"I have it within me to solve any challenges that occur today",
"I am enough",
"I am creating my life exactly as I want it",
"I have what it takes"]

var mantraBtn = document.getElementById("mantra")
var affirmationBtn = document.getElementById("affirmation")
var receiveMessageBtn = document.querySelector(".receiveBtn")
var messageReveal = document.querySelector(".message-reveal")

receiveMessageBtn.addEventListener("click", retrieveMessage)
//test function below to make sure buttons are logging
function log(){
  if (mantraBtn.checked===true){
    console.log("mantra checked")
  } else if (affirmationBtn.checked===true) {
    console.log("affirmation checked")
  }
}

//get random index of one of the arrays
function generateRandomIndex(list) {
  var randomIndex = Math.floor(Math.random() * list.length)
  return randomIndex
}

function retrieveMessage() {
  if(mantraBtn.checked===true) {
    var randomMantra = mantras[generateRandomIndex(mantras)]
    messageReveal.innerText = randomMantra
  } else if (affirmationBtn.checked===true) {
    var randomAffirmation = affirmations[generateRandomIndex(affirmations)]
    messageReveal.innerText = randomAffirmation
  }



}

//generate random index

// conditional for error thang

var buttonReceiveMessage = document.querySelector(".button-receive-message")
var buttonAffirmation = document.querySelector("#affirmation")
var buttonMantra = document.querySelector("#mantra")
var buttonClear = document.querySelector(".button-clear")

var biggerBox = document.querySelector(".box-bigger")
var gottaGo = document.querySelector(".gotta-go")
var imageMeditate = document.querySelector(".image-meditate")

buttonReceiveMessage.addEventListener("click", showMessage)
buttonAffirmation.addEventListener("click", chooseAffirmation)
buttonMantra.addEventListener("click", chooseMantra)

// user stories
// when a user clicks affirmations and then showMessage button
// image is replaced and random affirmation appears.
// or when a user clicks mantras and then showmessage button
// image is replaced and random mantra appears.

// We check which radio button was clicked and then based on which
// radio button was clicked we set selected array to render global variable.

// g i o s
// goal: if affirmation is selected, arrayToRandomize becomes affirmation
// input: click
// output: setting variable to array
// setup:

var arrayToRandomize = ""

function chooseAffirmation() {
  arrayToRandomize = affirmations
}

function chooseMantra() {
  arrayToRandomize = mantras
}

function getRandomItemFromArray(array) {
  var randomArrayIndex = Math.floor(Math.random() * array.length);
  return array[randomArrayIndex]
}

function showMessage() {
  gottaGo.innerHTML = ""
  var arrayToRandomizeData = getRandomItemFromArray(arrayToRandomize)
  gottaGo.innerHTML =
  `<h2>${arrayToRandomizeData}</h2>`
  // hideImage()
}






// function hideImage() {
//   gottaGo.classList.toggle("hidden")
//   // buttonClear.classList.("hidden")
// }
//
// function showMessage() {
//
// hideImage()
// }

// function chooseAffirmation() {
// getRandomItemFromArray(affirmations)
// }
//
// function chooseMantra() {
// getRandomItemFromArray(mantra)
// }

// function showMantra() {
//   gottaGo.innerHTML = ""
//   for (var i = 0; i < mantra.length; i++) {
//   gottaGo.innerHTML +=
//   `<h2>${mantra[i]}</h2>`
//   }
//   hideImage()
// }

// function showAffirmation() {
//   gottaGo.innerHTML = ""
//   var randomAffirmation = getRandomItemFromArray(affirmations)
//   gottaGo.innerHTML =
//   `<h2>${randomAffirmation}</h2>`
//   // hideImage()
// }

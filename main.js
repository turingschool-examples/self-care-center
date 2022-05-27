// conditional for error thang

var buttonReceiveMessage = document.querySelector(".button-receive-message")
var buttonAffirmation = document.querySelector("#affirmation")
var buttonMantra = document.querySelector("#mantra")
var buttonClear = document.querySelector(".button-clear")
var imageMeditate = document.querySelector(".image-meditate")

var biggerBox = document.querySelector(".box-bigger")
var gottaGo = document.querySelector(".gotta-go")
var imageMeditate = document.querySelector(".image-meditate")

buttonReceiveMessage.addEventListener("click", handleClick)
buttonAffirmation.addEventListener("click", enableButton)
buttonMantra.addEventListener("click", enableButton)
buttonClear.addEventListener("click", clearMessage)





function getRandomItemFromArray(array) {
  var randomArrayIndex = Math.floor(Math.random() * array.length);
  return array[randomArrayIndex]
}

function enableButton() {
  buttonReceiveMessage.removeAttribute("disabled")
}

function handleClick(event) {
  event.preventDefault();
  if (buttonAffirmation.checked) {
      console.log("HI")
      var message = getRandomItemFromArray(affirmations)
  } else if (buttonMantra.checked) {
      console.log("Hello")
      var message = getRandomItemFromArray(mantras)
  } else {
    return
  }
  // if the affirmation button is checked we want to choose an affirmation and display it
  // if the mantra button is checked we want to choose an mantra and display it
  // if neither is checked, we shouldn't chaneg anything.
  gottaGo.innerHTML = ""

  gottaGo.innerHTML =
  `<h2>${message}</h2>`
  // hideImage()
  imageMeditate.classList.remove("hidden")
  buttonClear.classList.remove("hidden")
}

// add id to h2
// make query selector for interval
// use element.innertext
// set inner text to message

function clearMessage() {
  // gottaGo.innerHTML = ""
  imageMeditate.classList.remove("hidden")

}

// function hideImage() {
//   gottaGo.classList.toggle("hidden")
//   buttonClear.classList.remove("hidden")
// }






// function showMessage(event) {
//   event.preventDefault();
//   gottaGo.innerHTML = ""
//   var arrayToRandomizeData = getRandomItemFromArray(arrayToRandomize)
//   gottaGo.innerHTML =
//   `<h2>${arrayToRandomizeData}</h2>`
//   // hideImage()
// }







// var arrayToRandomize = ""

// function chooseAffirmation() {
//   arrayToRandomize = affirmations
// }
//
// function chooseMantra() {
//   arrayToRandomize = mantras
// }

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

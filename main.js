var buttonReceiveMessage = document.querySelector(".button-receive-message")
var buttonAffirmation = document.querySelector("#affirmation")
var buttonMantra = document.querySelector("#mantra")
var buttonClear = document.querySelector(".button-clear")
var imageMeditate = document.querySelector(".image-meditate")
var biggerBox = document.querySelector(".box-bigger")
var gottaGo = document.querySelector(".gotta-go")
var imageMeditate = document.querySelector(".image-meditate")
var gottaGoImgae = document.querySelector(".gotta-go-image")

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
      var message = getRandomItemFromArray(affirmations)
  } else if (buttonMantra.checked) {
      var message = getRandomItemFromArray(mantras)
  } else {
    return
  }
  gottaGo.innerHTML = ""
  gottaGo.innerHTML =
  `<h2>${message}</h2>`
  buttonClear.classList.remove("hidden")
}

function clearMessage(array) {
  for (var i = 0; i < array.length; i++) {
    return array.array(i, 1)
  }
  buttonClear.classList.add("hidden")
  gottaGo.classList.remove()
  imageMeditate.classList.remove("hidden")
}

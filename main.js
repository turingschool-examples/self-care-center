//querySelectors
submitButton = document.querySelector('button')
printMessage = document.querySelector('.print')
svg = document.querySelector('svg')
//eventListeners
submitButton.addEventListener('click', displayMessage)

//arrays
affirmations = []

mantras = []

//functions

function displayMessage() {
  for(var i = 0; i < affirmations.length; i++)
  printMessage.innerHTML += `${affirmations[i]}`

  for(var i = 0; i < mantras.length; i++)
  printMessage.innerHTML += `${mantras[i]}`
}

function hideSvg() {
  svg.classList.add('hidden')
}



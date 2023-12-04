let affirmRadioButton = document.getElementById('affirm')
let mantraRadioButton = document.getElementById('mantra')

let receiveButton = document.getElementById('receive-button')
let userMessage = document.getElementById('user-message')

const showUserChoice = () => {
  if(affirmRadioButton.checked) {
    userMessage.textContent = `You have clicked the ${affirmRadioButton.value} button`
  } else if (mantraRadioButton.checked) {
    userMessage.textContent = `You have clicked the ${mantraRadioButton.value} button`
  }
}

receiveButton.addEventListener('click', showUserChoice)
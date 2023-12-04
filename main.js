let affirmRadioButton = document.getElementById('affirm')
let mantraRadioButton = document.getElementById('mantra')

let receiveButton = document.getElementById('receive-button')
let userMessage = document.getElementById('user-message')
let meditateImage = document.getElementById('meditate-image')
let clearLink = document.getElementById('clear-link')

let affirmations = 
['I alone hold the truth of who I am.', 
 'I affirm and encourage others, as I do myself.',
 'I am allowed to ask for what I want and what I need.',
 'I am allowed to feel good.',
 'I am capable of balancing ease and effort in my life.',
 'I am complete as I am, others simply support me.'
]

let mantras = [
  "I surrender to the divine within.",
  "May everyone be blessed with peace and harmony.",
  "Guide me from ignorance to enlightenment.",
  "That is whole, and this is whole.",
  "May there be peace within and around me.",
  "May all beings everywhere be happy and free, and may the thoughts, words, and actions of my own life contribute to the happiness and freedom for all.",
  "Expect nothing and appreciate everything."
]

const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
}

const showUserChoice = () => {
  meditateImage.classList.add('hidden')
  clearLink.classList.remove('hidden')
  if(affirmRadioButton.checked) {
    userMessage.textContent = `${affirmations[getRandomIndex(affirmations)]}`
  } else if (mantraRadioButton.checked) {
    userMessage.textContent = `${mantras[getRandomIndex(mantras)]}`
  }
}

const clearMessage = () => {
  userMessage.textContent = ''
  meditateImage.classList.remove('hidden')
  clearLink.classList.add('hidden')
}

receiveButton.addEventListener('click', showUserChoice)
clearLink.addEventListener('click', clearMessage)


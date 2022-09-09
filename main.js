//querySelectors
submitButton = document.querySelector('button')
printMessage = document.querySelector('.print')
svg = document.getElementById('a')
//eventListeners
submitButton.addEventListener('click', displayMessage)

//arrays
affirmations = [
"I am successful",
"I am confident",
"I am powerful",
"I am strong",
"I am getting better and better every day",
"All I need is within me right now",
"I wake up motivated",
"I am an unstoppable force of nature",
""

]

mantras = [
  "My mind is brilliant. My body is healthy. My spirit is tranquil.",
  "I create my own path and walk it with joy",
  "My positive thoughts guide me to new heights",
  "I am conquering my fears and becoming stronger each day",
  "I will have a good day, because it's my choice",
  "I am not afraid to be wrong",
  "My body is a temple. I keep my temple clean",
  "I hold the key to better health through eating better and exercise",
  "Good health is a practice, and I have patience",
  "I listen to my body and give it what it needs",
  "Every cell in my body is alive and beautiful",
  "My potential is limitless, and I choose where to spend my energy",
  "While I support others, I also ask for help when needed",
  "I surrender to the flow and have faith in the ultimate good",
  "I will speak with confidence and self-assurance",
  "My commitment to myself is unbreakable"

]

//functions

function displayMessage() {
  for(var i = 0; i < affirmations.length; i++)
  printMessage.innerHTML += `${affirmations[i]}`

  for(var i = 0; i < mantras.length; i++)
  printMessage.innerHTML += `${mantras[i]}`
}

function hideSvg() {

}



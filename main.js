var Affirmations = ["I forgive myself and set myself free.", "I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself.", 
"I have the freedom & power to create the life I desire.", "I choose to be kind to myself and love myself unconditionally.", "My possibilities are endless.",
"I am worthy of my dreams.", "I am enough.", "I deserve to be healthy and feel good.", "I am full of energy and vitality and my mind is calm and peaceful.", 
"Every day I am getting healthier and stronger.", "I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices."]


var Mantras = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", "Don/t let yesterday take up too much of today.", "Every day is a second chance.", 
"Tell the truth and love everyone.", "I am free from sadness.", "I am free from sadness.", " I am enough.", "I am enough.", "In the beginning it is you, in the middle it is you and in the end it is you.", 
"I love myself.", "I am present now.", "Inhale the future, exhale the past.", "This too shall pass.", "Yesterday is not today.", "The only constant is change.", 
"Onward and upward.", " I am the sky, the rest is weather."]




var receiveMessageButton = document.querySelector(".message-button")
var yogi = document.querySelector(".dude")
var affirmationButton = document.querySelector(".first-button")
var mantraButton = document.querySelector(".second-button")
var displaySaying = document.querySelector(".saying")

receiveMessageButton.addEventListener('click', generateMessage)

function getRandomIndex(array) {
    var randomNumber = Math.floor(Math.random() * array.length);
}

function generateMessage() {
  if (affirmationButton.checked) {
    displaySaying.innerText = Affirmations                      
    yogi.classList.add("hidden")
  } else if (mantraButton.checked) {
    displaySaying.innerText = `${Mantras}`
    yogi.classList.add("hidden")
    } else {
        return alert("Please choose Affirmation or Mantra. Namaste. 🧘 ");
    }                                                         
} 



//1. Receive button should be locked unless radio dial button has a value
//2. Research randomized code from romcom. set to a variable. tha variable will be current mantra/affirma
//3. If (affirmation then choose me a random on button click
//4. If (mantra then chose me a random on a button click
// For loop
//5.will need an anonymous function in the event listener so you can run other functions inside of it. 

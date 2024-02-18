function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomMessage = array[randomIndex]
  return randomMessage
}

//Query Selectors
var recieveButton = document.querySelector("#receive-message-button");
var addButton = document.querySelector('#add-message-button');
var submitButton = document.querySelector("#submit-message-button");

var mantraChoice = document.querySelector("#radio-mantra");
var affirmationChoice = document.querySelector("#radio-affirmation");
var mantraNewChoice = document.querySelector("#radio-mantra-submit");
var affirmationNewChoice = document.querySelector("#radio-affirmation-submit");

var meditationImage = document.querySelector("#meditation-image");
var newMessageInput = document.querySelector("#add-message-box");

var meditationBox = document.querySelector(".meditation-box");
var addMessageForm = document.querySelector('.add-message-form');
//random variable arrays


//event listeners
recieveButton.addEventListener('click', displaySelfCare)
addButton.addEventListener('click', addSelfCare)
submitButton.addEventListener('click', submitSelfCare)


//functions
function displaySelfCare(){
  meditationImage.classList.add(".meditation-hidden");
    if (mantraChoice.checked) {
        var randomMantra = getRandomIndex(mantras);
       meditationBox.innerText = `${randomMantra}`;
    } else if (affirmationChoice.checked) {
        var randomAffirmation = getRandomIndex(affirmations);
        meditationBox.innerText = `${randomAffirmation}`;
    };
};

function addSelfCare() {
    addMessageForm.style.display = "flex";
  }


function submitSelfCare(event) {
  event.preventDefault(event);
  var newMessageSubmit = newMessageInput.value
  meditationImage.classList.add(".meditation-hidden");
    if (mantraNewChoice.checked === false && affirmationNewChoice.checked === false){
      meditationBox.innerText = "Error! Make sure to check an 'Affirmation' or 'Mantra' first!";
    } else if (mantraNewChoice.checked){
      meditationBox.innerText = `${newMessageSubmit}`;
      mantras.push(newMessageSubmit)
    } else if (affirmationNewChoice.checked){
      meditationBox.innerText = `${newMessageSubmit}`;
      affirmations.push(newMessageSubmit);
    }
}
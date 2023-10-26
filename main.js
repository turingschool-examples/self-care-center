// Event Listener
var recieveMsgBtn = document.querySelector('button[type="button"]')
var affirmationBtn = document.querySelector("#affirmation")
var mantraBtn = document.querySelector("#mantra")

// Event Handler
recieveMsgBtn.addEventListener('click', createMessage);
affirmationBtn.addEventListener('click', handleRadioClick)
mantraBtn.addEventListener('click', handleRadioClick)

// Functions
var randomIndex;

function getRandomIndex(array) {
    randomIndex = Math.floor(Math.random() * array.length)  
    return  randomIndex
  }

var id;

function handleRadioClick(event) {
    id = event.target.id;
    return id
}

function createMessage() {
    switch (id) {
        case "affirmation":
            getRandomIndex(affirmations)
            document.querySelector('.message').innerText = affirmations[randomIndex]
            break;
        case "mantra":
            getRandomIndex(mantras)
            document.querySelector('.message').innerText = mantras[randomIndex];
            break;
        default:
            alert('Error: Please select a radio button.')
            break;
    }
}
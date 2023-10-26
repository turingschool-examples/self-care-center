// Event Listener
var recieveMsgBtn = document.querySelector('button[type="button"]')
var affirmationBtn = document.querySelector("#affirmation")
var mantraBtn = document.querySelector("#mantra")

// Event Handler
recieveMsgBtn.addEventListener('click', createMessage);
affirmationBtn.addEventListener('click', handleRadioClick)
mantraBtn.addEventListener('click', handleRadioClick)

// Functions
var id;

function handleRadioClick(event) {
    id = event.target.id;
    return id
}

function createMessage() {
    switch (id) {
        case "affirmation":
            console.log('affirmation button was clicked');
            break;
        case "mantra":
            console.log('mantra button was clicked');
            break;
        default:
            alert('Error: Please select a radio button.')
            break;
    }
}
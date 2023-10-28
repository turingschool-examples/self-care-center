// Event Listener
var recieveMsgBtn = document.querySelector('#receive-btn')
var affirmationBtn = document.querySelector("#affirmation")
var clearBtn = document.querySelector('.clear-btn')
var mantraBtn = document.querySelector("#mantra")

// Event Handler
recieveMsgBtn.addEventListener('click', createMessage);
affirmationBtn.addEventListener('click', handleRadioClick)
mantraBtn.addEventListener('click', handleRadioClick)
clearBtn.addEventListener('click', clearMessage)

// Functions
var id;

function getRandomIndex(array) {
    randomIndex = Math.floor(Math.random() * array.length)  
    return  randomIndex
  }

function handleRadioClick(event) {
    id = event.target.id;
    recieveMsgBtn.classList.add('button-hover')
}

function createMessage() {

    switch (id) {
        case "affirmation":
            var randomIndex = getRandomIndex(affirmations)
            document.querySelector('.message').innerText = affirmations[randomIndex];
            show(clearBtn);
            break;
        case "mantra":
            var randomIndex = getRandomIndex(mantras)
            document.querySelector('.message').innerText = mantras[randomIndex];
            show(clearBtn);
            break;
        default:
            alert('Please select an affirmation or a mantra.')
            break;
    }
}

function clearMessage() {
    document.querySelector('.message').innerHTML = '<img src="/assets/meditate.svg" alt="meditation emoji">'
    hide(clearBtn)
}

function show(element) {
    element.classList.remove('hidden');
  }
    
  function hide(element) {
    element.classList.add('hidden');
  }
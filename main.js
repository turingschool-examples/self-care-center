// Event Listener
var recieveMsgBtn = document.querySelector('#receive-btn')
var affirmationBtn = document.querySelector("#affirmation")
var mantraBtn = document.querySelector("#mantra")
var clearBtn = document.querySelector('.clear-btn')
var favBtn = document.querySelector('.favorite-btn')
var viewFavsBtn = document.querySelector('.fav-view-btn')
var mainH2 = document.querySelector('.main-h2')
var mainSection = document.querySelector('.main')
var msgBoard = document.querySelector('.message-board')
var homeBtn = document.querySelector('.home-btn')
var deleteBtn = document.querySelector('.delete-btn')
var favContainer = document.querySelector('.fav-container')
var favSection = document.querySelector('.fav-section')
var favMsg = document.querySelector('.fav-msg')


// Event Handler
recieveMsgBtn.addEventListener('click', createMessage);
affirmationBtn.addEventListener('click', handleRadioClick)
mantraBtn.addEventListener('click', handleRadioClick)
clearBtn.addEventListener('click', clearMessage)
favBtn.addEventListener('click', addToFavs)
viewFavsBtn.addEventListener('click', showFavsView)
homeBtn.addEventListener('click', showHome)
deleteBtn.addEventListener('click', deleteMessage)


// Functions
var radioID;
var msgID;

function getRandomIndex(array) {
    randomIndex = Math.floor(Math.random() * array.length)  
    return  randomIndex
  }

function handleRadioClick(event) {
    radioID = event.target.id;
    recieveMsgBtn.classList.add('button-hover')
}

function handleMsgClick(event) {
    msgID = event.target.id;
}

function createMessage() {

    switch (radioID) {
        case "affirmation":
            var randomIndex = getRandomIndex(affirmations)
            document.querySelector('.message').innerText = affirmations[randomIndex];
            document.querySelector('.message').classList.add("message-style");
            show(clearBtn);
            show(favBtn)
            break;
        case "mantra":
            var randomIndex = getRandomIndex(mantras)
            document.querySelector('.message').innerText = mantras[randomIndex];
            document.querySelector('.message').classList.add("message-style");
            show(clearBtn);
            show(favBtn);
            break;
        default:
            alert('Please select an affirmation or a mantra.')
            break;
    }
}

function clearMessage() {
    document.querySelector('.message').innerHTML = '<img src="/assets/meditate.svg" alt="meditation emoji">'
    document.querySelector('.message').classList.remove("message-style");
    hide(clearBtn)
    hide(favBtn)
}

function addToFavs() {
    var currentMessage = document.querySelector('.message').innerText
    favMessages.push(currentMessage)
}

function showFavsView() {

    hide(mainH2);
    hide(mainSection)
    hide(msgBoard)
    hide(viewFavsBtn)
    show(favSection)
    show(homeBtn)

    favSection.innerHTML = '';
    
    for (var i = 0; i < favMessages.length; i++) {
        var p = document.createElement('p')
        p.innerText = favMessages[i]
        p.id = [i]
        p.classList.add('fav-msg')
        p.addEventListener('click', handleMsgClick)
        favSection.appendChild(p)
    }

    if (p) {
        show(deleteBtn)
    } else {
        hide(deleteBtn)
    }
}


function showHome() {
    hide(favSection)
    hide(homeBtn)
    hide(deleteBtn)
    hide(favSection)
    show(mainH2)
    show(mainSection)
    show(msgBoard)
    show(viewFavsBtn)
}

function deleteMessage() {
    var index = msgID
    favMessages.splice(index, 1)
    showFavsView()
}

function show(element) {
    element.classList.remove('hidden');
  }
    
  function hide(element) {
    element.classList.add('hidden');
  }
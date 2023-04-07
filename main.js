//DOM elements
var randomButton = document.querySelector(".button");
var affirmationCheck = document.querySelector("#affirmation");
var mantraCheck = document.querySelector("#mantra");
var displayMessage = document.querySelector(".displayMessage");
var meditateIcon = document.querySelector(".meditateIcon");
var currentMessage;

// event listeners
randomButton.addEventListener("click", renderCurrentMessage);

//functions
function getRandomIndex(array) {
    return Math.floor(Math.random()*array.length);
} 

function hideDomElement(element) {
    element.classList.add("hidden");
}

function showDomElement(element) {
    element.classList.remove("hidden");
}

function addNotificationStyling() {
    displayMessage.classList.add("notification");
}

function removeNotificationStyling() {
    displayMessage.classList.remove("notification");
}

function checkMessageType() {
    if(affirmationCheck.checked) {
        typeOfMessages = "affirmations";
    } 

    if(mantraCheck.checked) {
        typeOfMessages = "mantras";
    }

    return typeOfMessages;
}


/*
import the DOM elements
create getRandomIndex
create variables currentMantra or currentAffirmation

makeClones:
make a safeMantras and safeAffirmations
make cloneMantras and cloneAffirmations.
Use cloned arrays for displays and splice them

reassignCurrent:
var randomIndex = getRandomIndex from the array
if(cloneArray.length)
if(notificationStyle is in classlist)
remove that style,
var currentMantra = Array[index]
splice the array using the same index
else 
run (refillMessages)
(notify the message) and (clone the safe array.)
Notify the message by reassigning current. 
add a style class for notification to be different.

renderCurrent

displayMessage.innerText = currentMantra or currentAffirmation
addClass hidden to the meditate icon
removeClass hidden from displayMessage

when button click, depending on what user selected, 
invoke reassignCurrent and renderCurrent versions
*/ 

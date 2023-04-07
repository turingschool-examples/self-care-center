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

function removeMessageFromArray(array, index) {
    array.splice(index, 1);
}


function refillArrays() {
    if(checkMessageType() === "affirmations") {
        clonedAffirmations = [...safeAffirmations];
    }
    if(checkMessageType() === "mantras") {
        clonedMantras = [...safeMantras];
    }
}

function notifyRepeatMessages() {
    addNotificationStyling();
    if(checkMessageType() === "mantras") {
        return `You will now see repeated Mantras...`
    } 
    if(checkMessageType() === "affirmations") {
        return `You will now see repeated Affirmations...`
    }
}

function reassignCurrentMessage() {
    if(checkMessageType() === "affirmations") {
     fetchRelevantMessage(clonedAffirmations);
    } 
    if(checkMessageType() === "mantras") {
     fetchRelevantMessage(clonedMantras);
    }
}

function fetchRelevantMessage(activeArray) {
    if(activeArray.length) {
        if(displayMessage.classList.contains("notification")) {
            removeNotificationStyling();
        }
        var workingIndex = getRandomIndex(activeArray);
        currentMessage = activeArray[workingIndex];
        removeMessageFromArray(activeArray, workingIndex);
    } else {
        currentMessage = notifyRepeatMessages();
        refillArrays();
        }
    return currentMessage;
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

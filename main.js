//DOM elements
var messageButton = document.querySelector(".receiveMessage");
var viewFavoritesButton = document.querySelector(".viewFavoriteButton");
var homeButton = document.querySelector(".homeButton");
var affirmationCheck = document.querySelector("#affirmation");
var mantraCheck = document.querySelector("#mantra");
var displayMessage = document.querySelector(".displayMessage");
var meditateIcon = document.querySelector(".meditateIcon");
var homeView = document.querySelector(".homeView");
var favoritesView = document.querySelector(".favoritesView");
var favoriteMessage = document.querySelector(".favoriteMessage");
var currentMessage;
var favoriteMessages = [];


// event listeners
messageButton.addEventListener("click", renderCurrentMessage);
viewFavoritesButton.addEventListener("click", showFavorites);
homeButton.addEventListener("click", showHome);
favoriteMessage.addEventListener("click", addToFavorites);

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

function renderCurrentMessage() {
    reassignCurrentMessage();
    displayMessage.innerText = currentMessage;
    hideDomElement(meditateIcon);
    showDomElement(displayMessage);
    showDomElement(favoriteMessage)
}

function showFavorites() {
    hideDomElement(homeView);
    showDomElement(favoritesView);
}

function showHome() {
    hideDomElement(favoritesView);
    showDomElement(homeView)
}

function checkFavoriteDuplicates(inputMessage){
    for (var i = 0; i < favoriteMessages.length; i++) {
        if(favoriteMessages[i].message === inputMessage) {
            return true;
        }
    }
    return false;
}
    

function createFavoriteObject(message) {
    var messageObject = {
        message: message,
        id: Date.now(),
        messageType: checkMessageType()
    }
    return messageObject;
}

function addToFavorites() {
    if(!checkFavoriteDuplicates(currentMessage))
    favoriteMessages.push(createFavoriteObject(currentMessage));
    console.log(favoriteMessages);
}
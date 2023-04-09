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
var groupAffirmations = document.querySelector(".groupAffirmations");
var groupMantras = document.querySelector(".groupMantras");
var favoriteSection = document.querySelector(".favoriteSection");
var currentMessage;
var favoriteMessages = [];


// event listeners
messageButton.addEventListener("click", renderCurrentMessage);
viewFavoritesButton.addEventListener("click", showFavorites);
homeButton.addEventListener("click", showHome);
favoriteMessage.addEventListener("click", addToFavorites);
favoriteSection.addEventListener("click", function() {
    deleteFavoriteMessage(event);
})
favoriteSection.addEventListener("mouseover", function() {
    enlargeFavoriteMessage(event);
})
favoriteSection.addEventListener("mouseout", function() {
    shrinkFavoriteMessage(event);
})
favoriteSection.addEventListener("mouseover", function() {
    focusDeleteButton(event);
})
favoriteSection.addEventListener("mouseout", function() {
    defocusDeleteButton(event);
})


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
            showDomElement(favoriteMessage);
        }
        var workingIndex = getRandomIndex(activeArray);
        currentMessage = activeArray[workingIndex];
        removeMessageFromArray(activeArray, workingIndex);
    } else {
        currentMessage = notifyRepeatMessages();
        hideDomElement(favoriteMessage);
        refillArrays();
        }
    return currentMessage;
}

function renderCurrentMessage() {
    reassignCurrentMessage();
    displayMessage.innerText = currentMessage;
    hideDomElement(meditateIcon);
    showDomElement(displayMessage);
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
    renderFavorites();
}

function createHTML(inputMessageType) {
    var htmlCode = '';

    for(var i = 0; i < favoriteMessages.length; i++) {
        if(favoriteMessages[i].messageType === inputMessageType) {
            htmlCode += `
            <section class="singleQuote" 
            id="${favoriteMessages[i].id}">
            "${favoriteMessages[i].message}"
            <button type="button" class="deleteButton">Delete</button>
            </section> 
        `;
        }
    }
    return htmlCode;
}

function renderFavorites() {
    groupMantras.innerHTML = createHTML("mantras");
    groupAffirmations.innerHTML = createHTML("affirmations");
}

function deleteFavoriteMessage(event) {
    if(event.target.classList.contains("deleteButtonAlt")) {
        var targetID = event.target.closest(".singleQuote").id;
        for(var i = 0; i < favoriteMessages.length; i++) {
            if(favoriteMessages[i].id.toString()===targetID) {
                favoriteMessages.splice(i,1);
            }
        }
    }
    renderFavorites();
}

function enlargeFavoriteMessage(event) {
    if (event.target.classList.contains("singleQuote")) {
        event.target.classList.remove("singleQuote");
        event.target.classList.add("singleQuoteAlt");
    }   
    if (event.target.classList.contains("deleteButton")) {
        event.target.closest(".singleQuote").classList.add("singleQuoteAlt");
        event.target.closest(".singleQuote").classList.remove("singleQuote");
    }
}

function shrinkFavoriteMessage(event) {
    if (event.target.classList.contains("singleQuoteAlt")) {
        event.target.classList.add("singleQuote");
        event.target.classList.remove("singleQuoteAlt");
    }
    if (event.target.classList.contains("deleteButtonAlt")) {
        event.target.closest(".singleQuoteAlt").classList.add("singleQuote");
        event.target.closest(".singleQuoteAlt").classList.remove("singleQuoteAlt");
    }
}

function focusDeleteButton(event) {
    if (event.target.classList.contains("deleteButton")) {
        event.target.classList.add("deleteButtonAlt");
        event.target.classList.remove("deleteButton");
    }
}

function defocusDeleteButton(event) {
    if (event.target.classList.contains("deleteButtonAlt")) {
        event.target.classList.remove("deleteButtonAlt");
        event.target.classList.add("deleteButton");
    }
}
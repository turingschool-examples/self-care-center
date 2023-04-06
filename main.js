//DOM elements
var randomButton = document.querySelector(".button");
var affirmationCheck = document.querySelector("#affirmation");
var mantraCheck = document.querySelector("#mantra");

// event listeners
randomButton.addEventListener("click", displayMessage);

//functions
function getRandomIndex(array) {
    return Math.floor(Math.random()*array.length);
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

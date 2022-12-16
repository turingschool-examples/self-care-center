
//there are two radio buttons that should switch which array we are randomizing on click of the recieve message button
    //how do forms work?
        //is there any built in functionality in the forms html?
        //do I grab each radio button with a querySelector?
        //Do i use an event.target
        //loop through the node array and see which one is checked?

var logo = document.querySelector(".logo");
var messageDiv = document.querySelector(".messagediv");
var messageButton = document.querySelector(".button");
var radioButtons = document.querySelectorAll(".radio");
var form = document.querySelector("form");



messageButton.addEventListener("click", preventDefault);
messageButton.addEventListener("click", function(){
    hide(logo);
    displaySentiment();
});


function displaySentiment() {
    if(radioButtons[0].checked) {
        randomAff = affirmations[getRandomIndex(affirmations)];
        messageDiv.innerText = randomAff; 
    } else if (radioButtons[1].checked) {
      randomMantra = mantras[getRandomIndex(mantras)];
      messageDiv.innerText = randomMantra; 
    }
};

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

function preventDefault(event) {
    event.preventDefault()
};

function show(element){
    element.classList.remove("hidden");
};

function hide(element){
    element.classList.add("hidden");
};

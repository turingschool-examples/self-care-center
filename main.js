
//there are two radio buttons that should switch which array we are randomizing on click of the recieve message button
    //how do forms work?
        //is there any built in functionality in the forms html?
        //do I grab each radio button with a querySelector?
        //Do i use an event.target

var logo = document.querySelector(".logo");
var messageDiv = document.querySelector(".messagediv");
var messageButton = document.querySelector(".button");
var radioButtons = document.querySelectorAll(".radio");



messageButton.addEventListener("click", preventDefault);
messageButton.addEventListener("click", function(){
    hide(logo);
    displaySentiment();
});
// affirmationRadioButton.addEventListener('')


function displaySentiment() {
    randomMantra = mantras[getRandomIndex(mantras)];
    messageDiv.innerText = randomMantra;
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

function preventDefault(event) {
    event.preventDefault()
}

function show(element){
    element.classList.remove("hidden");
};

function hide(element){
    element.classList.add("hidden");
};

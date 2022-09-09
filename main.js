var mantrasArray = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", "Don’t let yesterday take up too much of today.", "Every day is a second chance."]
var affirmationsArray = ["I forgive myself and set myself free.", "I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself."]
var receiveMessageButton = document.querySelector("button")
var mantraButton = document.getElementById("mantraLabel")
var affirmationButton = document.getElementById("affirmationLabel")

affirmationButton.addEventListener('click', selectAffirmation)

function selectAffirmation() {
    mantraButton.checked = false
    document.querySelector('#receiveMessageButtonId').disabled = false;
}

mantraButton.addEventListener('click', selectMantra)

function selectMantra() {
    affirmationButton.checked = false
    document.querySelector('#receiveMessageButtonId').disabled = false;
}

receiveMessageButton.addEventListener('click', receiveMessage)

var meditationImageHTML = document.querySelector('.meditationImage')
var flexBox2 = document.querySelector('.flexbox-item-2')

function getRandomNumber() {
    //refactor to array.length to make dynamic 
    return Math.floor(Math.random() * 3)
}

var flexContainerButtons = document.querySelector("#flex-container-buttons")
var flexBox2PhraseContainer = document.querySelector("#flexbox-item-2-phrase-container")

function receiveMessage() {
    if (!mantraButton.checked && !affirmationButton.checked) {
        document.querySelector('#receiveMessageButtonId').disabled = true;
        alert("Please select affirmation or mantra and click receive message again.")
        //add opacity to receive message button when disabled
        } else if (mantraButton.checked) {
            document.querySelector('#receiveMessageButtonId').disabled = false;
            flexBox2.innerText = ""
            flexBox2.innerText += mantrasArray[getRandomNumber()]
            flexBox2.innerHTML += `<button id="clearButton">Clear</button><button id="favoriteButton">💛</button>`
            var clearButton = document.getElementById("clearButton")
            clearButton.addEventListener('click', clearMessage)
            } else if (affirmationButton.checked) {
                document.querySelector('#receiveMessageButtonId').disabled = false;
                flexBox2.innerText = ""
                flexBox2.innerText += affirmationsArray[getRandomNumber()]
                flexBox2.innerHTML += `<button id="clearButton">Clear</button><button id="favoriteButton">💛</button>`
                var clearButton = document.getElementById("clearButton")
                clearButton.addEventListener('click', clearMessage)
                var favoriteButton = document.querySelector("#favoriteButton")
                favoriteButton.addEventListener('click', addToFavorites)
    }
}
// var clearButton = document.querySelector("#clearButton")
// var clearButton = document.getElementById("clearButton")

function clearMessage() {
    flexBox2.innerText = ""
    flexBox2.innerHTML += `<img class="meditationImage" src="./assets/meditate.svg">`
    mantraButton.checked = false
    affirmationButton.checked = false
}
//Variables for favorite and view favorites
//Listening events for both
//call back function for favorite pushes the index to an object of favorites that mixes mantras and affirmations
//call back for view favorites clears out both divs and adds a new one that has a return to home button 
//insert a new trash icon and click to delete next to each added mantra/affirmation 

// var favoriteButton = document.querySelector("#favoriteButton")
function addToFavorites() {
    // JSON.stringify(flexBox2.innerText)
    // localStorage.setItem("🪷", )
    window.localStorage.setItem("🪷", flexBox2.innerHTML.toString())
}
var viewFavoritesButton = document.querySelector("#viewFavoritesButton")

viewFavoritesButton.addEventListener('click', goToFavoritesView)

function goToFavoritesView() {
    flexBox2.innerText = ""
    flexBox2.innerText = Object.values(localStorage)
}

console.log("LOOK HERE", typeof localStorage)
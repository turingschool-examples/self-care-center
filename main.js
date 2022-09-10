//See variables below
var mantrasArray = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", "Don’t let yesterday take up too much of today.", "Every day is a second chance."]
var affirmationsArray = ["I forgive myself and set myself free.", "I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself."]
var favoritesArray = []
var receiveMessageButton = document.querySelector("button")
var mantraButton = document.getElementById("mantraLabel")
var affirmationButton = document.getElementById("affirmationLabel")
var clearButton = document.querySelector(".clearButton")
var favoriteButton = document.querySelector(".favoriteButton")
var viewFavoritesButton = document.querySelector("#viewFavoritesButton")
var flexboxContainer = document.querySelector(".flexbox-container")
var h2Header = document.querySelector("h2")
var homeButton = document.querySelector(".homeButton")
var clearButton2 = document.querySelector(".clearButton2")
var favoritesArrayView = document.querySelector(".favoritesArrayView")
var containerFavoritesPage = document.querySelector(".containerFavoritesPageView")
var favoriteButton = document.querySelector(".favoriteButton")
viewFavoritesButton.addEventListener('click', goToFavoritesView)
var meditationImageHTML = document.querySelector('.meditationImage')
var flexBox2 = document.querySelector('.flexbox-item-2')
var flexContainerButtons = document.querySelector("#flex-container-buttons")
var flexBox2PhraseContainer = document.querySelector("#flexbox-item-2-phrase-container")
var addButton = document.querySelector(".addButton")

//See default classes below
clearButton.classList.remove('hidden')
favoriteButton.classList.remove('hidden')

//See event listeners below
addButton.addEventListener('click', saveInput) 
affirmationButton.addEventListener('click', selectAffirmation)
mantraButton.addEventListener('click', selectMantra)
receiveMessageButton.addEventListener('click', receiveMessage)
homeButton.addEventListener('click', goToHomePage)
clearButton2.addEventListener('click', clearFavoritesArray)

//See functions below 
function selectAffirmation() {
    mantraButton.checked = false
    document.querySelector('#receiveMessageButtonId').disabled = false;
}
function selectMantra() {
    affirmationButton.checked = false
    document.querySelector('#receiveMessageButtonId').disabled = false;
}
function getRandomNumber() {
    if(affirmationButton.checked) {
    return Math.floor(Math.random() * affirmationsArray.length)
    } else if (mantraButton.checked) {
        return Math.floor(Math.random() * mantrasArray.length)
    }
}
function receiveMessage() {
    if (!mantraButton.checked && !affirmationButton.checked) {
        document.querySelector('#receiveMessageButtonId').disabled = true;
        alert("Please select affirmation or mantra and click receive message again.")
        } else if (mantraButton.checked) {
            document.querySelector('#receiveMessageButtonId').disabled = false;
            flexBox2.innerText = ""
            flexBox2.innerText += mantrasArray[getRandomNumber()]
            var clearButton = document.querySelector(".clearButton")
            clearButton.addEventListener('click', clearMessage)
            var favoriteButton = document.querySelector(".favoriteButton")
            favoriteButton.addEventListener('click', addToFavorites)
            } else if (affirmationButton.checked) {
                document.querySelector('#receiveMessageButtonId').disabled = false;
                flexBox2.innerText = ""
                flexBox2.innerText += affirmationsArray[getRandomNumber()]
                var clearButton = document.querySelector(".clearButton")
                clearButton.addEventListener('click', clearMessage)
                var favoriteButton = document.querySelector(".favoriteButton")
                favoriteButton.addEventListener('click', addToFavorites)
    }
}
function clearMessage() {
    flexBox2.innerText = ""
    flexBox2.innerHTML += `<img class="meditationImage" src="./assets/meditate.svg">`
    mantraButton.checked = false
    affirmationButton.checked = false
}
function addToFavorites() {
    favoritesArray.push(flexBox2.innerText)
    alert("Added to favorites!")
}
function goToFavoritesView() {
    favoritesArrayView.innerHTML = ""
    flexboxContainer.classList.add("hidden")
    containerFavoritesPage.classList.remove('hidden')
    favoritesArrayView.classList.remove('hidden')
    homeButton.classList.remove('hidden')
    clearButton2.classList.remove('hidden')
    favoriteButton.classList.remove('hidden')
    h2Header.innerText = "Favorites"
    var userInput = document.querySelector('.inputField')
    userInput.value = ""
    for (var i = 0; i < favoritesArray.length; i++) {
        favoritesArrayView.innerHTML += `<div>✨${favoritesArray[i]}✨</div>`
    }
}
function goToHomePage() {
    flexboxContainer.classList.remove("hidden")
    containerFavoritesPage.classList.add('hidden')
    favoritesArrayView.classList.add('hidden')
    homeButton.classList.add('hidden')
    clearButton2.classList.add('hidden')
    favoriteButton.classList.remove('hidden')
    h2Header.innerText = "Which type of message?"
}
function clearFavoritesArray() {
    favoritesArrayView.innerHTML = ""
    favoritesArray = []
}
function saveInput() {
    var userInput = document.querySelector('.inputField').value
    if (!userInput) {
        alert("Please enter text and click add.")
    } else {
        userInput = document.querySelector('.inputField').value
        favoritesArray.push(userInput)
        mantrasArray.push(userInput)
        affirmationsArray.push(userInput)
        alert("Added!")
    }
    goToFavoritesView()
}
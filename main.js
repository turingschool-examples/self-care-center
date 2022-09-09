var mantrasArray = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", "Don’t let yesterday take up too much of today.", "Every day is a second chance."]
var affirmationsArray = ["I forgive myself and set myself free.", "I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself."]
var receiveMessageButton = document.querySelector("button")
var mantraButton = document.getElementById("mantraLabel")
var affirmationButton = document.getElementById("affirmationLabel")
var clearButton = document.querySelector(".clearButton")
var favoriteButton = document.querySelector(".favoriteButton")

clearButton.classList.remove('hidden')
favoriteButton.classList.remove('hidden')

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
            // clearButton.classList.remove('hidden')
            // favoriteButton.classList.remove('hidden')
            // flexBox2.innerHTML += `<button id="clearButton">Clear</button><button id="favoriteButton">💛</button>`
            var clearButton = document.querySelector(".clearButton")
            clearButton.addEventListener('click', clearMessage)
            var favoriteButton = document.querySelector(".favoriteButton")
            favoriteButton.addEventListener('click', addToFavorites)
            } else if (affirmationButton.checked) {
                document.querySelector('#receiveMessageButtonId').disabled = false;
                flexBox2.innerText = ""
                flexBox2.innerText += affirmationsArray[getRandomNumber()]
                // flexBox2.innerHTML += `
                // <button id="clearButton">Clear</button>
                // <button id="favoriteButton">💛</button>`
                var clearButton = document.querySelector(".clearButton")
                clearButton.addEventListener('click', clearMessage)
                var favoriteButton = document.querySelector(".favoriteButton")
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


function addToFavorites() {
    favoritesArray.push(flexBox2.innerText)
    alert("Added to favorites!")
   //push to array
   //confirmation alert 
}
var viewFavoritesButton = document.querySelector("#viewFavoritesButton")
var flexboxContainer = document.querySelector(".flexbox-container")
var h2Header = document.querySelector("h2")
var homeButton = document.querySelector(".homeButton")
var clearButton2 = document.querySelector(".clearButton2")





var favoritesArrayView = document.querySelector(".favoritesArrayView")
var containerFavoritesPage = document.querySelector(".containerFavoritesPageView")

// favoritesArrayView.classList.add('hidden')
// containerFavoritesPage.classList.add('hidden')
var favoriteButton = document.querySelector(".favoriteButton")


var favoritesArray = []

viewFavoritesButton.addEventListener('click', goToFavoritesView)

function goToFavoritesView() {
    //hides other pages
    favoritesArrayView.innerHTML = ""
    flexboxContainer.classList.add("hidden")
    containerFavoritesPage.classList.remove('hidden')
    favoritesArrayView.classList.remove('hidden')
    homeButton.classList.remove('hidden')
    clearButton2.classList.remove('hidden')
    favoriteButton.classList.remove('hidden')
    h2Header.innerText = "Favorites"
    //unhide two new buttons home and clear favorites 
    //changes inner text of h2 to favorites 
    //shows a new div 
    //for loop through array adds sparkle emoji

    for (var i = 0; i < favoritesArray.length; i++) {
        favoritesArrayView.innerHTML += `<div>✨${favoritesArray[i]}✨</div>`
    }
    // favoritesArrayView.innerText = "test"
    //for loop inserts inner text into new div
    //add listening event to both home and clear button to fire a different function
}

homeButton.addEventListener('click', goToHomePage)

function goToHomePage() {
    flexboxContainer.classList.remove("hidden")
    containerFavoritesPage.classList.add('hidden')
    favoritesArrayView.classList.add('hidden')
    homeButton.classList.add('hidden')
    clearButton2.classList.add('hidden')
    favoriteButton.classList.remove('hidden')
    h2Header.innerText = "Which type of message?"
}

clearButton2.addEventListener('click', clearFavoritesArray)

function clearFavoritesArray() {
    favoritesArrayView.innerHTML = ""
    favoritesArray = []
}
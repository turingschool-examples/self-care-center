var selects = document.querySelectorAll('input[type="radio"]');
var zen = document.querySelector('.zenIcon');
var returnMessage = document.querySelector('.replace');
var receiveBtn = document.querySelector('.receive-message-button');
var clearBtn = document.querySelector('.clear-message-button');
var startBtn = document.querySelector(".start-button");
var sectionHome = document.querySelector(".main-login");
var sectionLanding = document.querySelector(".message-landing");
var returnGreeting = document.querySelector(".greeting")

// var sectionMain = document.querySelector(".main-page");



// var hideMainPage = document.querySelector(".hide-main");
// var loginPage = document.querySelector(".login");


if (selects[0].checked === false || selects[1].checked === false) {
    receiveBtn.disabled = true;
}
for (var i = 0; i < selects.length; i++) {
    selects[i].addEventListener('input', enableReceiveButton)
}

window.addEventListener('load', hideMessageLanding)
receiveBtn.addEventListener('click', showMessage)
clearBtn.addEventListener('click', clearMessage)
startBtn.addEventListener('click', showMain)


function getRandomIndex(array) {
    var randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}

function showMessage() {
    var mantra = getRandomIndex(mantras)
    var affirmation = getRandomIndex(affirmations)

    if (selects[0].checked) {
        returnMessage.innerText = `${mantra}`
    } else if (selects[1].checked) {
        returnMessage.innerText = `${affirmation}`
    }
    zen.classList.add('hidden');

}

function enableReceiveButton() {
    receiveBtn.removeAttribute('disabled')
}

function clearMessage() {
    returnMessage.innerText = ""
    returnMessage.innerText = ""
    zen.classList.remove('hidden')

}


function hideMessageLanding() {
    sectionLanding.classList.add('hidden')

}



function showMain() {
    var inputVal = document.getElementById("my-input").value;
    sectionLanding.classList.remove('hidden');
    returnGreeting.innerText = `Nice to see you  ${inputVal}.`
    sectionHome.classList.add("hidden");
}
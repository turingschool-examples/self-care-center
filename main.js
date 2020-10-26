var mantras = [
    'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
    'Don’t let yesterday take up too much of today.',
    'Every day is a second chance.',
    'Tell the truth and love everyone',
    'I am free from sadness.',
    'I am enough.',
    'In the beginning it is you, in the middle it is you and in the end it is you.',
    'I love myself.',
    'I am present now.',
    'Inhale the future, exhale the past.',
    'This too shall pass.',
    'Yesterday is not today.',
    'The only constant is change.',
    'Onward and upward.',
    'I am the sky, the rest is weather.'
];
var affirmations = [
    'I forgive myself and set myself free.',
    'I believe I can be all that I want to be.',
    'I am in the process of becoming the best version of myself.',
    'I have the freedom & power to create the life I desire.',
    'I choose to be kind to myself and love myself unconditionally.', 'My possibilities are endless.',
    'I am worthy of my dreams.',
    'I am enough.',
    'I deserve to be healthy and feel good.',
    'I am full of energy and vitality and my mind is calm and peaceful.',
    'Every day I am getting healthier and stronger.',
    'I honor my body by trusting the signals that it sends me.',
    'I manifest perfect health by making smart choices.'
];
var affirm = document.querySelector('#affirmation ');
var mantra = document.querySelector('#mantra');
var typeBox = document.querySelector('.type-box');
var messagePad = document.querySelector('.message-pad');
var radios = document.getElementsByName('care-choice');
var sayDisplay = document.querySelector('.say-display');
var buddha = document.querySelector('.buddha')
var clearOut = document.querySelector('.clear')
var favSaying = document.querySelector('.favorite');
var displayedSaying = document.querySelector('.displayed-saying');
var favGallery = document.querySelector('.fav-gallery');
var viewGallery = document.querySelector('.view-favorites');
var mainPage = document.querySelector('.main-page');
var backToMain = document.querySelector('.back-to-main');
var favoritesArray = [];
sayingToSave = '';
// var buddhaBounce = new AnimationEvent('animationstart ', { animationName: slide })

typeBox.addEventListener('submit', insertSaying);

clearOut.addEventListener('click', clearBox);

sayDisplay.addEventListener('click', addToFavorites);

viewGallery.addEventListener('click', goToGallery);

backToMain.addEventListener('click', goHome);

favGallery.addEventListener('click', deleteSaying);

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function insertSaying() {
    event.preventDefault();
    buddha.style.display = 'none';
    clearOut.disabled = false;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked === true) {
            if (radios[i].value == 'affirmations') {
                sayingToSave = makeSaying(affirmations);
            } else if (radios[i].value == 'mantras') {
                sayingToSave = makeSaying(mantras);
            }
        }
    }
};

function makeSaying(type) {
    newSaying = new Saying(`${type[getRandomIndex(type)]}`, type);
    sayDisplay.innerHTML = `<p class="displayed-saying">${newSaying.quote}</p><button class="favorite" type="button">Fav Me!</button>`;
    return newSaying;
}




function clearBox() {
    sayDisplay.innerText = '';
    buddha.style.display = 'initial';
    clearOut.disabled = true;
};

// function disableButton() {
//     if (event.target.checked) {
//         clearOut.disabled = false;
//     } else {
//         clearOut.disabled = true;
//     }
// };

function addToFavorites(event) {
    if (event.target.matches('.favorite ')) {
        favoritesArray.push(sayingToSave);
        // favGallery.insertAdjacentHTML('afterbegin', `<p class="saved-sayings">${sayingToSave.quote}</p><button class="delete-saying" type="button" id="${sayingToSave.id}"
        //     ">Remove Me From Favorites (For Now)</button>`);
        // console.log(sayingToSave);
    }
};

function deleteSaying(event) {
    console.log(event.target);
    for (var i = 0; i < favoritesArray.length; i++) {
        if (event.target.id == favoritesArray[i].id) {
            favoritesArray.splice(i, 1);
        }
    }

}

function goToGallery() {
    builtGallery = '';
    for (var i = 0; i < favoritesArray.length; i++) {
        var quoteToDisplay = `<p class="saved-sayings">${favoritesArray[i].quote}</p><button class="delete-saying" type="button" id="${favoritesArray[i].id}"
        ">Remove Me From Favorites (For Now)</button>`;
        builtGallery += quoteToDisplay;
    };
    favGallery.innerHTML = builtGallery;
    hide(mainPage);
    show(favGallery)
}

function goHome() {
    show(mainPage);
    hide(favGallery);
};

function hide(thingToHide) {
    thingToHide.classList.add('hidden');
};

function show(thingToShow) {
    thingToShow.classList.remove('hidden');
};
// function createListener() {
//     if (favSaying) {
//         favSaying.addEventListener('click', addToFavorites)
//         console.log("HEY");
//     } else {
//         console.log("NO");
//     }
// }
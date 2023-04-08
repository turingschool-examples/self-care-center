var affirmationBox = document.querySelector('affirmation');
var mantraBox = document.querySelector('mantras');
var button = document.querySelector('.button');
var image = document.querySelector('#image') 
var selected = document.querySelector('input[name="which-message"]:checked.value')
button.addEventListener('click', createMessage);

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

function createMessage () {
    image.classList.add('hidden')
    if (document.getElementById('affirmation').checked) {
        message.innerText = affirmations[getRandomIndex(affirmations)]
    } else  if (document.getElementById('mantra').checked) { 
        message.innterText = mantras[getRandomIndex(mantras)]
    }
}






// var affirmationMessage = affirmations[getRandomIndex(affirmations)];
// var mantraMessage = mantras[getRandomIndex(mantras)]

    //     // quote.classList.remove('hidden')
//         if (affirmationBox.checked) {
//         quoteBox.innerHTML = `<p class"message">${affirmations[getRandomIndex(affirmations)]} <p>`
//     } else {
    //         quote.innerText = mantra[getRandomIndex(mantras)]
    // }
//     }
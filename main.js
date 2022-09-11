window.onload = function () {
    recieveMessageButton = document.querySelector('.rMButton')


    recieveMessageButton.addEventListener('click', showMessage)
}

function showMessage() {
    affirmationButton = document.querySelector("#Affirmation")
    if(affirmationButton.checked == true)
        console.log("affirmation")
}

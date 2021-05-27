/*---------Query Selectors and global variables ---------------*/
var message;
var favoriteMessages = [];

var form = document.querySelector('form');
var radio = form.elements['message-type'];

  // when the button is pressed
  // get the value of the radio button.

function displayMessage() {
    if (radio.value === 'affirmation') {
      //pull from the

    } else if(radio.value === 'mantra'){
      
    }

}


  // if id.value === mantra, then pull from the affirmation  array and store that in a variable
  // if id.value === affirmation, then pull from the mantra array
  // store that in a currentMessage variable

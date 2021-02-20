// AFFIRMATIONS ARRAY
var affirmations = ['Today is a beautiful day.',
'I am happy and full of joy.',
'I attract abundance and wonderful things.',
'I am surrounded by beautiful people.',
'Nothing will stand in my way of having a great day.',
'I am grateful for all of the wonderful things in my life.',
'Thank you for blessing me with good health.',
'My heart is filled with love and joy.',
'I radiate positive energy to all of those around me.',
'I am in control of my future and will succeed.',
'Nothing will stop me from creating success.',
'I am grateful for the amount of success in my life.',
'I am attracting great success and prosperity.',
'Everything I do becomes a great success.',
'I am inspired and motivated to achieve everything my heart desires.',
'I am accomplishing great things.']

// MANTRAS ARRAY
var mantras = ['Be with those who bring out the best in you, not the stress in you',
'May my heart be kind, my mind fierce, and my spirit brave.',
'I am enough.',
'Be someone who makes you happy.',
'I give myself permission to slow down.',
'Choose purpose over perfect.',
'Don’t ruin a good today by thinking about a bad yesterday. Let it go.',
'How you make others feel about themselves says a lot about you.',
'Be somebody who makes everybody feel like a somebody.',
'Don’t give up what you want the most for what you want right now.',
'Be a warrior, not a worrier.',
'Don’t let yesterday take up too much of today.',
'Breathe in, I send myself love. Breathing out, I send love to someone else who needs it.',
'Don’t say maybe if you want to say no.',
'Expect nothing and appreciate everything.',
'Anxiety is contagious. And so is calm.',
'May my heart be kind my mind fierce and my spirit brave.',
'Be with those who bring out the best in you, not the stress in you.',
'Ask yourself if what you’re doing today is getting you closer to where you want to be tomorrow.',
'Everything I need is within me.',
'I love myself.',
'All progress takes place outside your comfort zone.']

// SECTIONS
var bellDisplay = document.querySelector('.image');
var positiveDisplay = document.querySelector('.quote');
var positivity = document.querySelector('.text');

// BUTTON
var submitButton = document.querySelector('.msgButton');

// EVENT LISTENER RECEIVE MESSAGE BUTTON
submitButton.addEventListener('click', displayRandomMsg);

// FUNCTIONS AND EVENT HANDLERS
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function displayRandomMsg() {
  var radioButton = document.querySelector("input[type='radio']:checked");
  if (radioButton.value === 'mantra') {
    event.preventDefault(event);
    var randomMsg = mantras[getRandomIndex(mantras)];
    positivity.innerText = randomMsg;
    bellDisplay.classList.toggle('hidden');
    positiveDisplay.classList.toggle('hidden');
} else {
    event.preventDefault(event);
    var randomMsg = affirmations[getRandomIndex(affirmations)];
    positivity.innerText = randomMsg;
    bellDisplay.classList.toggle('hidden');
    positiveDisplay.classList.toggle('hidden');
  }
};

//variables here// 
var mantras = [
  'Be the little engine that could.',
  'Fake it \'til you make it.',
  'Patience is bitter but its fruit is sweet.',
  'Worrying is like betting against yourself.',
  'Relax and release.'

];

var affirmations = [
  'I have the best sense of humor out of all the voices in my head.',
  'I make people laugh...at me.',
  'Others laugh about my problems.',
  'I can find the humerus in any body.',
  'The voices in my head always think of something funny to say.',
  'I have perfect comedy timing...after the fact.',
  'I will always find a way to have fun...usually.'
];

var requestedMessage;

//delete all these console.log statements: //
console.log('These are my affirmations: ', affirmations)
console.log('These are my mantras: ', mantras)

// query selectors here//
var affirmationButton = document.querySelector('#affirmation-button');
var mantraButton = document.querySelector('#mantra-button');
var receiveMessageButton = document.querySelector('#receive-message-button');

// event listeners here //
affirmationButton.addEventListener('click', selectAffirmation);
mantraButton.addEventListener('click', selectMantra);
receiveMessageButton.addEventListener('click', returnMessage);

// functions here //
function selectAffirmation() {
  requestedMessage = 'affirmation';
}

function selectMantra() {
  requestedMessage = 'mantra';
}

function returnMessage() {
  if (requestedMessage === 'affirmation') {
    console.log('Affirmation requested')
  } 
  
  if (requestedMessage === 'mantra') {
    console.log('Mantra requested')
  }
 }

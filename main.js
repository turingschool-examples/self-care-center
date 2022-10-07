var mantras = ['Take it one day at a time',
'Breathe',
'Hour by hour, day by day, week by week',
'Take it slow',
'Manage your frustrations',
'Go at your own pace',
'Compare yourself only to past you',
'Be gritty',
'It is okay to ask for help',
'You are one google search away from solving it',
'Lean on your cohort - no one gets through this alone',
'This too shall pass',
'Mid mods got nothing on you',
'A tired brain does not code well - sleep is important',
'Make time for you'];
var affirmations = [
'You will make it through Turing in one piece',
'You are not supposed to know everything',
'Learning a new language is hard, but you can handle it',
'CSS will not get the best of you',
'Take a second to see how far you have come',
'You have already learned so much',
'You are smart enough for this',
'You can handle this',
'Take a break, walk away, clear your head - you will get it',
'Do not let yesterday take up too much of today'];
var createdMessages = [];

var meditationMan = document.querySelector('#logo');
var receiveMessageButton = document.querySelector('#receive-message');
var hitMeWithThatMessage = document.querySelector('.message');
var affirmButton = document.querySelector('.affirmMeNow');
var mantraButton = document.querySelector('.mantraMe');
var body = document.querySelector('body');
var animation = document.querySelector('.loader');
var fade = document.querySelector('.fade-in-text');
var clearButton = document.querySelector('#clear');
var clearForm = document.querySelector('#clearIt');
var addButton = document.querySelector('#add-message');
var inputForm = document.querySelector('#create-message');

function randomMessage(array) {
  var index = Math.floor(Math.random() * array.length)
    return array[index]
  }

function takeItAway() {
  meditationMan.classList.add('hidden');
  animation.classList.remove('hidden');
  hitMeWithThatMessage.innerHTML = '';
}

function reset() {
  animation.classList.add('hidden');
  meditationMan.classList.add('hidden');
}

function doNotRepeat() {
  hitMeWithThatMessage.classList.remove('fade-in-text');
  hitMeWithThatMessage.style.animationIterationCount = 1;
}

receiveMessageButton.addEventListener('click', () => {
  if (affirmButton.checked || mantraButton.checked) 
    {takeItAway();
    {setTimeout(display, 4000)}
    {setTimeout(clearIt, 4000)}
    doNotRepeat();} 
  else {
    alert('must choose first!');
    } 
});

function display() {
  hitMeWithThatMessage.classList.add('fade-in-text');
  if (affirmButton.checked === true) {
    hitMeWithThatMessage.innerHTML += affirmMe();
  } else if (mantraButton.checked === true) {
    hitMeWithThatMessage.innerHTML += mantraMeUp();
  }
  reset()
}

affirmButton.addEventListener('click', affirmMe)
  function affirmMe() {
    if (affirmButton.checked === true) {
      body.classList.add('color-change-affirm')
      body.classList.remove('color-change-mantra')
    }
    return affirmButton.value = randomMessage(affirmations)
  }

mantraButton.addEventListener('click', mantraMeUp)
  function mantraMeUp() {
    if (mantraButton.checked === true) {
      body.classList.add('color-change-mantra')
      body.classList.remove('color-change-affirm')
    }
    return mantraButton.value = randomMessage(mantras);
  }

function clearIt() {
  clearForm.classList.remove('hidden');
}

window.addEventListener('load', addHiddenClass);
function addHiddenClass() {
  clearForm.classList.add('hidden');
}

clearButton.addEventListener('click', deleteMessage);
function deleteMessage() {
  meditationMan.classList.add('hidden');
  hitMeWithThatMessage.innerHTML = '';
  meditationMan.classList.remove('hidden');
  addHiddenClass();
  changeItBack();
}

function changeItBack() {
  affirmButton.checked = false;
  mantraButton.checked = false;
  body.classList.remove('color-change-affirm');
  body.classList.remove('color-change-mantra');
}

addButton.addEventListener('click', createYourOwnMessage);
function createYourOwnMessage() {
  inputForm.classList.remove('hidden');
  // document.getElementById('create-message').submit();
}

//goal: when add message button is clicked, input form pops up and user can add message
//this is dom interacts with data model - add to empty array
//update with innerHTML 
//push created messages into global variable createdMessages
var randomAffirmation = document.querySelector('#affirmation');
var randomMantra = document.querySelector('#mantra');
var messageOptions = document.querySelector('.message-options');
var receiveMessageButton = document.querySelector('.receive-message');
var messageContainer = document.querySelector('.message-container');
var clearButton = document.querySelector('.clear-button');
var image = document.querySelector('img');
var displayMessage = document.querySelector('.display-message');
var randomMessage = document.querySelector('.random-message');

receiveMessageButton.addEventListener('click', showNewMessage);
clearButton.addEventListener('click', clearMessage);

var affirmations = ['I forgive myself and set myself free.', 'I believe I can be all that I want to be.', 'I am in the process of becoming the best version of myself.', 'I have the freedom & power to create the life I desire.', 'I choose to be kind to myself and love myself unconditionally.', 'My possibilities are endless.', 'I am worthy of my dreams.', 'I am enough.', 'I deserve to be healthy and feel good.', 'I am full of energy and vitality and my mind is calm and peaceful.', 'Every day I am getting healthier and stronger.', 'I honor my body by trusting the signals that it sends me.', 'I manifest perfect health by making smart choices.']

var mantras = ['Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.', 'Don/t let yesterday take up too much of today.', 'Every day is a second chance.', 'Tell the truth and love everyone.', 'I am free from sadness.', 'I am enough.', 'In the beginning it is you, in the middle it is you and in the end it is you.', 'I love myself.', 'I am present now.', 'Inhale the future, exhale the past.', 'This too shall pass.', 'Yesterday is not today.', 'The only constant is change.', 'Onward and upward.', 'I am the sky, the rest is weather.']

function getRandomIndex(messages) {
  return Math.floor(Math.random() * messages.length);
}

function showNewMessage() {
  image.classList.add('hidden')
  randomMessage.classList.remove('hidden')
  clearButton.classList.remove('hidden')
  if(randomAffirmation.checked) {
    randomMessage.innerText = affirmations[getRandomIndex(affirmations)] 
  } else if 
  (randomMantra.checked) {
    randomMessage.innerText = mantras[getRandomIndex(mantras)]
  } else {
    randomMessage.innerText = 'Please select a message option!'
  }
}
 
function clearMessage() {
  randomMessage.classList.add('hidden')
  clearButton.classList.add('hidden')
  image.classList.remove('hidden')
 }
//query selector variables go here 👇
var affirmInput = document.querySelector('#aff');
var affirmLbl = document.querySelector('.affirm');
var mantraInput = document.querySelector('#mant')
var mantraLbl = document.querySelector('.mantra');
var bellIcon = document.querySelector('.bell-icon');
var showMsg = document.querySelector('.show-msg');
var affirmations = [
  'I am love. I am purpose. I was made with divine intention.', 'I don’t sweat the small stuff.', 'I can. I will. End of story.', 'I am adventurous. I overcome fears by following my dreams.', 'I feed my spirit. I train my body. I focus my mind. It’s my time.', 'I am in charge of how I feel and today I am choosing happiness.', 'I will not compare myself to strangers on the Internet.', 'I am choosing and not waiting to be chosen.', 'I am enough.', 'I am whole.', 'I have the power to create change.', 'I let go of all that no longer serves me.', 'I refuse to give up because I haven’t tried all possible ways.'
];
var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.', 'Don’t let yesterday take up too much of today.', 'Every day is a second chance.', 'Tell the truth and love everyone.', 'I am free from sadness.', 'I am enough.', 'In the beginning it is you, in the middle it is you and in the end it is you.', 'I love myself.', 'I am present now.', 'Inhale the future, exhale the past.', 'This too shall pass.', 'Yesterday is not today.', 'The only constant is change.', 'Onward and upward.', 'I am the sky, the rest is weather.'
];
var savedMsg = [];
var currentMsg;

var msgBtn = document.querySelector('.msg-btn');

//event listeners go here 👇
msgBtn.addEventListener('click', displayMsg);

//List of functions 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function hideIcon(){
  bellIcon.classList.add('hidden');
  showMsg.classList.remove('hidden');
}
function getRandomAffirm(){
  showMsg.innerText = affirmations[getRandomIndex(affirmations)];
  hideIcon();
}
function getRandomMantra(){
  showMsg.innerText = mantras[getRandomIndex(affirmations)];
  hideIcon();
}
function displayMsg(){
  if(affirmInput.checked){
    getRandomAffirm();
  }else if(mantraInput.checked){
    getRandomMantra();
  }else{
    alert("AT LEAST ONE MESSAGE OPTION MUST BE SELECTED!");
  }
}

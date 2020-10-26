var mantras = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather."]

var affirmations = ["I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices."]

var messageSubmissionForm = document.querySelector("form");
var messageReturn = document.querySelector("#message-return");
var messageSelect = document.getElementsByName("message-select");
messageSubmissionForm.addEventListener('submit', sayingAndDisplaying);
var messageToBeViewed = undefined;
var previouslyViewedMantras = [];
var previouslyViewedAffirmations = [];

function sayingAndDisplaying(event) {
  event.preventDefault();
  for (var i = 0; i < messageSelect.length; i++) {
    if (messageSelect[i].checked === true) {
      if (messageSelect[i].value === "radio-left") {
         messageReturn.innerHTML = `<p class="message-align">${getRandomPhrase(affirmations)}</p>`;
         takeFromPhrasesAndGiveToViewedPhrases(affirmations, previouslyViewedAffirmations);
        // resetPhrases(affirmations, previouslyViewedAffirmations);
         console.log(affirmations.length, previouslyViewedAffirmations);
       } else if (messageSelect[i].value === "radio-right") {
         messageReturn.innerHTML = `<p class="message-align">${getRandomPhrase(mantras)}</p>`;
         takeFromPhrasesAndGiveToViewedPhrases(mantras, previouslyViewedMantras);
        // resetPhrases(mantras, previouslyViewedMantras);
         console.log(mantras.length, previouslyViewedMantras);
      }
    }
  }
}

function takeFromPhrasesAndGiveToViewedPhrases(phrases, viewedPhrases) {
  if (phrases.includes(messageToBeViewed)) {
    viewedPhrases.push(messageToBeViewed);
    phrases.splice(phrases.indexOf(messageToBeViewed), 1);
    if (!phrases.length) {
      for (var i = 0; i < viewedPhrases.length; i++) {
        phrases.push(viewedPhrases[i]);
      }
      viewedPhrases.splice(0);
      // also as part of this conditional, an alert should be displayed as such: `Your ${phrases} will now begin to repeat`
    }
  }
}

//arguments to be passed in the function call below would be mantras and previouslyViewedMantras,
//or affirmations and previouslyViewedAffirmations
// function resetPhrases(phrases, viewedPhrases) {
//   if (phrases.length === 0) {
//     phrases = viewedPhrases;
//   }
//}

function getRandomIndex(phrase) {
  return Math.floor(Math.random() * phrase.length);
}

function getRandomPhrase(sayings) {
  var randomSaying = sayings[getRandomIndex(sayings)];
  messageToBeViewed = randomSaying;
  return randomSaying;
}

// function getRandomMantra() {
//   var randomMantra = mantras[getRandomIndex(mantras)];
//   messageToBeViewed = randomMantra;
//   return randomMantra;
// }
//
// function getRandomAffirmation() {
//   var randomAffirmation = affirmations[getRandomIndex(affirmations)];
//   messageToBeViewed = randomAffirmation;
//   return randomAffirmation;
// }

var getAffirmation = document.querySelector("#affirmations");
var getMantra = document.querySelector("#mantras");
var button = document.querySelector("button");
var bell = document.querySelector("img");
var image = document.querySelector(".image");

var affirmations = [
"I forgive myself and set myself free.",

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

"I manifest perfect health by making smart choices."
];
var mantras = [
"Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",

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

"I am the sky, the rest is weather."
];



// button.addEventListener("click", getQuote);
button.onclick = function () {
  var radioBtns = document.querySelectorAll('input[name="choice"]');
  var selected;
  for (var btn of radioBtns) {
    if (btn.checked){
      selected = btn.value;
      break;
    }
  }
   getQuote(selected);
}



function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}




function getQuote(array) {
  var mantraQuote = mantras[getRandomIndex(array)];
  var affirmationQuote = affirmations[getRandomIndex(array)];

  bell.classList.add("hidden");
  var p = document.createElement("p");

  p.append(affirmationQuote);
  image.append(p);


// if (document.getElementById("affirmation").value){
//   p.append(affirmation);
//   image.append(p);
// } else if (document.getElementById("mantras").value) {
//   p.append(mantras);
//   image.append(p);
// }


}

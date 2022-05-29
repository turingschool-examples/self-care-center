var affirmations = [
  "I am in the right place at the right time, doing the right thing. - Louise Hay",
  "Conscious breathing is my anchor. - Thich Nhat Hanh",
  "You are loved just for being who you are, just for existing -Ram Dass.",
  "The chance to love and be loved exists no matter where you are. - Oprah",
  "Courage starts with showing up and letting ourselves be seen - Brené Brown",
  "Make way for the unprecedented and watch your reality rearrange yourself. - Yrsa Daley-Ward",
  "Open your heart and drink in the glorious day. - Heather Havrilesky",
  "Am I good enough? Yes I am. - Michelle Obama",
  "The perfect moment is this one - Jon Kabat-Zinn",
  "I am deliberate and afraid of nothing. - Audre Lord",
  "Your life is about to be incredible.",
  "Who you are inside is what helps you make and do everything in life. - Fred Rogers",
  "Your perspective is unique. It’s important and it counts. - Genn Close",
  "Every day above earth is a good day. - Ernest Hemingway",
  "Nothing can dim the light that shines from within. - Maya Angelou",
  "You must do the things you think you cannot do. - Elenor Roosevelt",
  "The secret of attraction is to love yourself. - Deepak Chopra",
  "Good riddance to decisions that don't support self-care, self-value, and self-worth. - Oprah",
  "I am the greatest. I said that even before I knew I was. - Muhammad li",
  "I’m better than I used to be. Better than I was yesterday. But hopefully not as good as I’ll be tomorrow. - Marianne Williamson",
 ];

var mantras = [
    "My mind is brilliant. My body is healthy. My spirit is tranquil.",
    "I create my own path and walk it with joy.",
    "My positive thoughts guide me to new heights.",
    "I am conquering my fears and becoming stronger each day.",
    "I will have a good day, because it’s my choice.",
    "I am not afraid to be wrong.",
    "My body is a temple. I keep my temple clean.",
    "I hold the key to better health through eating better and exercise.",
    "Good health is a practice, and I have patience.",
    "I listen to my body and give it what it needs.",
    "Every cell in my body is alive and beautiful.",
    "My potential is limitless, and I choose where to spend my energy.",
    "While I support others, I also ask for help when needed.",
    "I surrender to the flow and have faith in the ultimate good.",
    "I will speak with confidence and self-assurance.”",
    "My commitment to myself is unbreakable.",
  ];


//variables to query buttons
var mantraButton = document.querySelector("#mantra-button");
var affirmButton = document.querySelector("#affirmation-button");
var recieveButton = document.querySelector(".recieve-button");

//Variable(s) to query for displaying Message
var meditationMan = document.querySelector("#meditation-icon");
var messageBox = document.querySelector(".message-box");

//Recieve messgage event listener
recieveButton.addEventListener('click', showRandomMessage);

/*~~~~~~~~~~~~~~~~~ITERATION 1 ~~~~~~~~~~~~~~~~~~~~~~*/

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomMantra() {
  var currentMantra = mantras[getRandomIndex(mantras)];
  messageBox.innerText = currentMantra;
}

function getRandomAffirmation() {
  var currentAffirmation = affirmations[getRandomIndex(affirmations)];
  messageBox.innerText = currentAffirmation;
}
function showRandomMessage(){
  meditationMan.classList.add("hidden");
  if (mantraButton.checked === true) {
    getRandomMantra();
  } else if (affirmButton.checked === true) {
    getRandomAffirmation();
  }
}

// function displayRandomMessage() {
//   meditationMan.classList.add("hidden");
//     if (mantraButton.checked === true) {
//     return messageBox.innerHTML += `<p>${mantras[getRandomIndex(mantras)]}</p>`;
//     } else if (affirmButton.checked === true) {
//       return messageBox.innerHTML += `<p>${affirmations[getRandomIndex(affirmations)]}</p>`;
//       }
//     }

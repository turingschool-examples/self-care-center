var muggleAffirmations = [
  "I am worthy of love and happiness.",
  "I believe in myself and my abilities.",
  "I am capable of achieving my goals.",
  "I am present and grateful for this moment.",
  "I embrace change and welcome new opportunities.",
  "I let go of fear and embrace peace.",
  "I am deserving of success and happiness.",
  "I am confident and capable of handling any challenge.",
  "I am constantly growing and improving.",
  "I attract positive energy and abundance into my life.",
  "I trust in myself and my intuition.",
  "I am worthy of all the good things life has to offer.",
  "I am resilient and can overcome any obstacle.",
  "I am in control of my thoughts and actions.",
  "I am surrounded by love and support.",
  "I am worthy of respect and kindness.",
  "I am enough, just as I am.",
  "I am worthy of self-care and self-compassion.",
  "I am open to new experiences and opportunities.",
  "I am strong and capable of handling life's challenges.",
  "I am deserving of happiness and fulfillment.",
  "I am a valuable and important person.",
  "I am worthy of success and achievement.",
  "I am capable of creating the life I desire.",
  "I am deserving of love and affection.",
  "I am confident in my abilities and talents.",
  "I am worthy of forgiveness and second chances.",
  "I am deserving of happiness and joy.",
  "I am in control of my own happiness.",
  "I am worthy of all the good things that come my way.",
];

var magicMantras = [
  "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light. - Albus Dumbledore",
  "Of course, it's happening inside your head Harry, why should that mean that it's not real? - Albus Dumbledore",
  "My mum always said things we lose have a way of coming back to us in the end. - Luna Lovegood",
  "It takes a great deal of bravery to stand up to your enemies... but a great deal more to stand up to your friends. - Albus Dumbledore",
  "We've all got both light and dark inside us. What matters is the part we choose to act on. - Sirius Black",
  "It is the quality of one's convictions that determines success, not the number of followers. - Remus Lupin",
  "You have got to start standing up to people, Neville. - Ron Weasley",
  "Fear of a name only increases fear of the thing itself. - Hermione Granger",
  "When in doubt, go to the library. - Ron Weasley",
  "There are some things you can't share without ending up liking each other, and knocking out a twelve-foot mountain troll is one of them. - J.K Rowling",
  "Constant Vigilance! - Mad-Eye Moody",
  "Wit beyond measure is man's greatest treasure. - Luna Lovegood",
  "After all, to the well-organized mind, death is but the next great adventure. - Albus Dumbledore",
  "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals. - Sirius Black",
  "I'm hoping to do some good in the world! - Hermione Granger",
  "Fame's a fickle friend, Harry. - Gilderoy Lockhart",
  "You are protected, in short, by your ability to love! - Albus Dumbledore",
  "Do not pity the dead, Harry. Pity the living, and, above all, those who live without love. - Albus Dumbledore",
  "It is the unknown we fear when we look upon death and darkness, nothing more. - Albus Dumbledore",
  "Dumbledore says people find it far easier to forgive others for being wrong than being right. - Hermione Granger",
  "It does not do to dwell on dreams and forget to live. - Albus Dumbledore",
  "It is our choices, Harry, that show what we truly are, far more than our abilities. - Albus Dumbledore",
  "We're all human, aren't we? Every human life is worth the same, and worth saving. - Kingsley Shacklebolt",
  "It is a curious thing, Harry, but perhaps those who are best suited to power are those who have never sought it. Those who, like you, have leadership thrust upon them, and take up the mantle because they must, and find to their own surprise that they wear it well. - Albus Dumbledore",
  "It matters not what someone is born, but what they grow to be. - Albus Dumbledore",
  "For in dreams, we enter a world that is entirely our own. - Albus Dumbledore",
  "I am not worried, Harry…I am with you. - Albus Dumbledore",
  "Words are, in my not-so-humble opinion, our most inexhaustible source of magic. Capable of both inflicting injury, and remedying it. - Albus Dumbledore",
  "The happiest man on earth would be able to use the Mirror of Erised like a normal mirror, that is, he would look into it and see himself exactly as he is. - Albus Dumbledore",
  "Have you any idea how much tyrants fear the people they oppress? All of them realize that, one day, amongst their many victims, there is sure to be one who rises against them and strikes back! - Albus Dumbledore",
  "Differences of habit and language are nothing at all if our aims are identical and our hearts are open. - Albus Dumbledore",
  "No story lives unless someone wants to listen. The stories we love best do live in us forever. So whether you come back by page or by the big screen, Hogwarts will always be there to welcome you home. - J.K. Rowling",
  "It is impossible to manufacture or imitate love. - Horace Slughorn",
  "Books! And cleverness! There are more important things — friendship and bravery. - Hermione Granger",
  "We are only as strong as we are united, as weak as we are divided. - Albus Dumbledore",
  "Numbing the pain for a while will make it worse when you finally feel it. - Albus Dumbledore",
  "Time is Galleons, little brother. - Fred Weasley",
  "Yeah, size is no guarantee of power. - George Weasley",
  "Curiosity is not a sin. But we should exercise caution with our curiosity. - Albus Dumbledore",
  "Age is foolish and forgetful when it underestimates youth. - Albus Dumbledore",
  "The ones that love us never really leave us. You can always find them in here. - Sirius Black",
  "Soon we must all face the choice between what is right and what is easy. - Albus Dumbledore",
  "Ah, music. A magic beyond all we do here! - Albus Dumbledore",
  "I think I'll just go down and have some pudding and wait for it all to turn up — it always does in the end. - Luna Lovegood",
  "Indifference and neglect often do much more damage than outright dislike. - Albus Dumbledore",
];

var affirmationBox = document.getElementById('affirmation');
var mantraBox = document.getElementById('mantra');
var messageButton = document.getElementById('receive-button');
var meditationIcon = document.getElementById('meditation-icon');
var message = document.getElementById('message-text');
var loadingContainer = document.getElementById('loading-container');

messageButton.addEventListener('click', createMessage);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function createMessage() {
  meditationIcon.classList.add("hidden");
  var messageText = getMessageText();
  var headingText = "✨ ✨ ✨";
  var fontFamily = "'Quicksand', sans-serif";
  if (mantraBox.checked) {
    headingText = "🪄 ✨ Alohomora ✨ 🪄";
    fontFamily = "'Harry Potter'";
    document.documentElement.classList.add("harry-potter");
  } else {
    document.documentElement.classList.remove("harry-potter");
  }
  showMessage(messageText, headingText, fontFamily);
};

function showMessage(messageText, headingText, fontFamily) {
  message.innerText = messageText;
  message.style.fontFamily = fontFamily;
  document.querySelector("h1").innerText = headingText;
  document.querySelector("h1").style.fontFamily = fontFamily;

  loadingContainer.style.opacity = "1";
  setTimeout(function () {
    loadingContainer.style.opacity = "0";
    message.style.display = "block";
    message.style.opacity = "1";
  }, 1000);
};

function getMessageText() {
  if (affirmationBox.checked) {
    return muggleAffirmations[getRandomIndex(muggleAffirmations)];
  } else if (mantraBox.checked) {
    return magicMantras[getRandomIndex(magicMantras)];
  } else {
    return "";
  }
};

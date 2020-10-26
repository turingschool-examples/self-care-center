class Messages {
  constructor(type) {
    this.type = type;
    // this.messageText = ""; // i want this to run combineTexts
  }
}

function combineTexts(type) {
  if (this.type === "affirmation") {
    var chooseFrom = allMessages.defaultAffs.concat(allMessages.userAffs)[Math.floor(Math.random() * chooseFrom)]
    // this.messageText = chooseFrom
  } else {
    var chooseFrom = allMessages.defaultMantras.concat(allMessages.userMantras)[Math.floor(Math.random() * chooseFrom)]
    // this.messageText = chooseFrom
  }
}

var allMessages = {
  defaultAffs: [
    "I forgive myself and set myself free.",
    "I believe I can be all that I want to be.",
    "I am in the process of becoming the best version of myself.",
    "I have the freedom and power to create the life I desire."
  ],
  userAffs: [
    "aff user message 1",
    "aff user message 2",
    "aff user message 3",
  ],
  defaultMantras: [
    "I am enough.",
    "Every day is a second chance.",
    "Tell the truth and love everyone.",
    "I am free from sadness."
  ],
  userMantras: [
    "man user message 1",
    "man user message 2",
    "man user message 3",
  ]
}
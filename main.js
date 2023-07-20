// ===== QUERY SELECTORS =====

// ===== EVENT LISTENERS =====
window.addEventListener("load", createDataModel);

// ===== FUNCTIONS =====

function createDataModel() {
  // GDcP - C
  // create an array of objects (mantras and affirmations)
  // working with arrays, will be creating objects with properties of (type, message, favorite, id - length or date now)
  var messages = [];
  for (let i = 0; i < affirmations.length; i++) {
    var message = {
      type: "affirmation",
      message: affirmations[i],
      favorite: false,
      id: Date.now(),
    };
    messages.push(message);
  }
  for (let i = 0; i < mantras.length; i++) {
    var message = {
      type: "mantra",
      message: mantras[i],
      favorite: false,
      id: Date.now(),
    };
    messages.push(message);
  }
  console.log(messages);
  return messages;
}

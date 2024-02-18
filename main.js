function getRandomIndex(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomMessage = array[randomIndex]
    return randomMessage
  }

//Query Selectors
  var recieveButton = document.querySelector("#receive-message-button");
  var addButton = document.querySelector('#add-message-button');
  var submitButton = document.querySelector("#submit-message-button");
  var mantraChoice = document.querySelector("#radio-mantra");
  var affirmationChoice = document.querySelector("#radio-affirmation");
  var meditationImage = document.querySelector("#meditation-image");
  var meditationBox = document.querySelector(".meditation-box");
  var addMessageForm = document.querySelector('.add-message-form');
  //random variable arrays

  var newMessage = document.querySelector(`.input-box`).value



  //event listeners
  recieveButton.addEventListener('click', displaySelfCare)
  addButton.addEventListener('click', addSelfCare)
  submitButton.addEventListener('click', submitSelfCare)


  //functions
  function displaySelfCare(){
    meditationImage.classList.add(".meditation-hidden");
      if (mantraChoice.checked) {
          var randomMantra = getRandomIndex(mantras);
         meditationBox.innerText = `${randomMantra}`
      } else if (affirmationChoice.checked) {
          var randomAffirmation = getRandomIndex(affirmations);
          meditationBox.innerText = `${randomAffirmation}`;
      };
  };

  function addSelfCare() {
      addMessageForm.style.display = "flex";
    // innerHTML = 
    // `<label for="add-message-box">Add Your Own</label>

    // <input class="input-box" type="text" id="add-message-box" />
    // <div>
      
    //   <button type="submit" id="submit-message-button">Submit Message</button>`
  };


  function submitSelfCare() {
    meditationImage.classList.add(".meditation-hidden");
    meditationBox.innerText = newMessage

  };

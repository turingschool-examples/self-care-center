function getRandomIndex(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomMessage = array[randomIndex]
    return randomMessage
  }

//Query Selectors
  var submitButton = document.querySelector("#receive-message-button");
  var mantraChoice = document.querySelector("#radio-mantra")
  var affirmationChoice = document.querySelector("#radio-affirmation")
  var meditationImage = document.querySelector("#meditation-image");
  var meditationBox = document.querySelector(".meditation-box");
  //random variable arrays


  //event listeners
  submitButton.addEventListener('click', displaySelfCare)


  //functions
  function displaySelfCare(){
    meditationImage.classList.add(".meditation-hidden");
      if (mantraChoice.checked) {
          var randomMantra = getRandomIndex(mantras);
         meditationBox.innerHTML = `${randomMantra}`
      } else if (affirmationChoice.checked) {
          var randomAffirmation = getRandomIndex(affirmations);
          meditationBox.innerHTML = `${randomAffirmation}`;
      };
  }
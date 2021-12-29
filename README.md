# Self Care Center
## Motivation
How can I care for myself? One way is with affirmations and mantras!
Affirmations are thoughts of positive self-empowerment, meant to assert your self-worth.
Mantras are phrases that are repeated again and again during mindfulness practices.

I have built an application where you can choose between a preset Mantra and an Affirmation to receive a random message from either category.

*Or* if you would like to write your own message to be displayed, that functionality has been built in as well.

## Build Status
* Complete

## Code style
* HTML
* CSS
* javaScript

## Programs Used
* Github
* Atom

## Features
* Upon opening index.html from your terminal, you will be greeted with the main page.
<img align='center'width="1364" alt="Screen Shot 2021-12-29 at 3 28 10 PM" src="https://user-images.githubusercontent.com/92649050/147706187-def15448-5e70-4061-981b-e84e6c6c0ec9.png">

* You will be prompted to choose between an `Affirmation` and a `Mantra`.
* The `Recieve Message` button will then be revealed. Click to see your randomly generated message.
<img width="634" alt="Screen Shot 2021-12-29 at 3 53 25 PM" src="https://user-images.githubusercontent.com/92649050/147706467-041f684d-459c-473e-8563-87daf5943965.png">


<img width="890" alt="Screen Shot 2021-12-29 at 3 53 59 PM" src="https://user-images.githubusercontent.com/92649050/147706488-6e5c7de2-24e4-41b2-ad89-7930a2ec7baa.png">
The `Clear` button will return the page to it's original state.

* *Or* if you choose to write your own message, you can do so by clicking `Here` beneath the *Write your own soul nourishing message* prompt. 
<p align='center'>
<img width="421" alt="Screen Shot 2021-12-29 at 3 54 17 PM" src="https://user-images.githubusercontent.com/92649050/147706579-5ea5ef09-0cf6-4413-9174-e3d69bbf6b73.png">
    <p>
* Then follow the revealed next steps by choosing whether you are writing an `Affirmation` or a `Mantra`, clicking `Submit`, writing your  message and submitting once again to see your very own message revealed.
<img width="619" alt="Screen Shot 2021-12-29 at 3 55 20 PM" src="https://user-images.githubusercontent.com/92649050/147706587-4f6f98d4-c445-410b-a58c-addb87cda62e.png">
<img width="1147" alt="Screen Shot 2021-12-29 at 3 55 50 PM" src="https://user-images.githubusercontent.com/92649050/147706595-62b9059b-c5a6-4b3e-b5f5-c79b9a134ba0.png">

## Code Example
```
function sendMessage(){
    hide(imageBuddha)
    show(clearBtn)
    show(textBox)
  if (radioMantra.checked){
    giveMantra.innerText = mantras[randoMantra]
  }
  if (radioAffirmation.checked) {
    giveAffirmation.innerText = affirmations[randoAffirmation]
  }
};
```

## Installation
Start here. Click the link below.
https://github.com/Jerry-Vrrr/self-care-center
To edit this repo
- fork and clone to local
- `cd` into repository
- Open in text editor
- To view webpage, run the command `open index.html` in your `terminal`

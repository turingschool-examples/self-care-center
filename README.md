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
Upon opening index.html from your terminal, you will be greeted with the main page.

You will be prompted to choose between an `**Affirmation**` and a `**Mantra**`.

The `**Recieve Message**` button will then be revealed. Click to see your randomly generated message.

Or if you choose to write your own message, you can do so by clicking `**Here**` beneath the *Write your own soul nourishing message* prompt, then follow the revealed next steps by choosing whether you are writing an `**Affirmation**` or a `**Mantra**`, clicking `**Submit**`, writing your message and submitting once again to see your very own message revealed.

## Code Example
`function sendMessage(){
    hide(imageBuddha)
    show(clearBtn)
    show(textBox)
  if (radioMantra.checked){
    giveMantra.innerText = mantras[randoMantra]
  }
  if (radioAffirmation.checked) {
    giveAffirmation.innerText = affirmations[randoAffirmation]
  }
};`


## Installation
Start here. Click the link below.
https://github.com/Jerry-Vrrr/self-care-center
To edit this repo
- fork and clone to local
- `cd` into repository
- Open in text editor
- To view webpage, run the command `open index.html` in your **terminal**

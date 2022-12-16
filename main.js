//on click of the recieve message button, a random message should appear in the message div
    //I must have a randomize function
        //it should take in an array, use the length of the array to set the bounds of the numbers
    //that randomize function must be in my event handler
    //
//there are two radio buttons that should switch which array we are randomizing on click of the recieve message button
    //how do forms work?
        //is there any built in functionality in the forms html?
        //do I grab each radio button with a querySelector?
        //Do i use an event.target

//show message function -- show elements 
    //hide the image
    //show the message

    

function getRandomIndex(array) {
    randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
}


console.log(getRandomIndex(mantras))
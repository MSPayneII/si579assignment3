/*
* Excercise 1
*
*/
const block = document.querySelector("#color-block");
const colorName = document.querySelector("#color-name");
const textColor = document.querySelector("#center-text");

block.addEventListener("click", changeColor);


/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(colorName.textContent === "#F08080"){
       block.style.backgroundColor = "#191970";//change the background color using JS

       colorName.textContent = "#191970";//Change the text of the color using the span id color-name
       textColor.style.color = "#fff";

    }
    else{
        block.style.backgroundColor = "#F08080"; //change the background color using JS

        colorName.textContent = "#F08080";//Change the text of the color using the span id color-name
        textColor.style.color = "#000";

    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const button = document.querySelector("#convertbtn");
const userInput = document.querySelector("#f-input");
const result = document.querySelector("#c-output");

button.addEventListener("click", convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
   let temp = (userInput.value - 32) * (5/9)  //Calculate the temperature here

    result.textContent = Math.round(temp)//Send the calculated temperature to HTML

    return result;
}



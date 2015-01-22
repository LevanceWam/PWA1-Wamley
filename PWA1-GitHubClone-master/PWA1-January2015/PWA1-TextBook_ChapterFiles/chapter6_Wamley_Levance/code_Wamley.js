/*
Levance Wamley
1-21-15
 */
/*
var access = document.getElementById("code9");//accessing this document. getElement is giving us access
var code = access.innerHTML;//we are using this to get access to the actual text.
code = code + " midnight";
alert(code);//added the string code to the line above and now we plan to alert it.
*/
function init() {
    var myGreenText = document.getElementById("mygreentext");//this gets the id mygreentext from the html
    myGreenText.innerHTML = "Levance's 4th Green Alert: hit by phaser fire!";//this goes inside of the html and
    myGreenText.setAttribute("class","greentext");//this calls the class of green text and changes the color
    var myGreenheader = document.getElementById("mygreenheader");
    myGreenheader.innerHTML = "Green Planet";
    myGreenheader.setAttribute("class","greenheader");

    var myRedText = document.getElementById("myredtext");//this gets the id mygreentext from the html
    myRedText.innerHTML = "Levance's 4th RED Alert: hit by phaser fire!";//this goes inside of the html and
    myRedText.setAttribute("class","redtext");
    var myRedheader = document.getElementById("myredheader");
    myRedheader.innerHTML = "Red Planet";
    myRedheader.setAttribute("class","redheader");

    var myBlueText = document.getElementById("mybluetext");//this gets the id mygreentext from the html
    myBlueText.innerHTML = "Levance's Blue Alert: hit by phaser fire!";//this goes inside of the html and
    myBlueText.setAttribute("class","bluetext");
    var myBlueheader = document.getElementById("myblueheader");
    myBlueheader.innerHTML = "Blue Planet";
    myBlueheader.setAttribute("class","blueheader");

}

window.onload= init;//this activates the function once the window opens
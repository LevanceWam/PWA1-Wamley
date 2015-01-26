/**
 * Created by vancewamley on 1/21/15.
 */
window.onload = init;// Telling js what to do

function init() {//setting up the event handler for window.onload event
    var image = document.getElementsByTagName("img");//Declaring varuable to hold Images Element ID
    for (var i = 0; i < image.length; i++) {
        image[i].onclick = showAnswer;//
        //.. When the user clicks on the image
    }

}

/*
function showAnswer() {
    var images = document.getElementsByTagName("img");//calls out to all the tags with img in the html
    //image.src = "IMAGES/zero.jpg";
    for (var i = 0; i < images.length; i++){
        images[i].onclick = showAnswer;
    }
}
*/

function showAnswer(eventObject) {
    var image =eventObject.target;
    var name = image.id;
    console.log(" You have clicked on " + name + ".");
  name ="IMAGES/" +name+ ".jpg";
    image.src=name;
    setTimeout(reblur,2000,image)
}

function reblur(image){
    //var image = image.target;
    var name = image.id;
    name = "IMAGES/"+ name+"blur.jpg";
    image.src = name;
}

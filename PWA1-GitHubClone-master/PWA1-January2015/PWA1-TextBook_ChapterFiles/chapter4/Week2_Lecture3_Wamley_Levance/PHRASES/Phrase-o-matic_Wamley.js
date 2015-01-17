function makePhrases() {
    var words1 = {key1:"24/7", Key2:"multi-tier", Key3:"30,000 foot", Key4:"B-to-B", Key5:"win-win"};
    var words2 = {key1:"empowered", Key2:"value-added", key3:"oriented", Key4:"focused", Key5:"aligned"};
    var words3 = {key1:"process", key2:"solution", key3:"tipping-point",key4: "strategy",  Key5:"vision"};

    var rand1 = Math.floor(Math.random() * Object.keys(words1).length) + 1;
    var rand2 = Math.floor(Math.random() * Object.keys(words2).length) + 1;
    var rand3 = Math.floor(Math.random() * Object.keys(words3).length) + 1;

    var randomKey1 = "key"+ rand1;
    var randomKey2 = "key" + rand2;
    var randomKey3 = "key" + rand3;


    var phrase = words1[randomKey1] + " " + words2[randomKey2] + " " + words3[randomKey3];
    alert(phrase);
    console.log("Random Phrase is: ",words1[randomKey1] + " " + words2[randomKey2] + " " + words3[randomKey3]);
    console.log(randomKey1, " of 'Words1' is: ", words1[randomKey1]);
    console.log(randomKey2, " of 'Words2' is: ", words2[randomKey2]);
    console.log(randomKey3, " of 'Words3' is: ", words3[randomKey3]);

    document.write("Random Phrase is: ",words1[randomKey1] + " " + words2[randomKey2] + " " + words3[randomKey3]);
    document.write("<br>"+randomKey1, " of 'Words1' is: ", words1[randomKey1]);
    document.write("<br>"+randomKey2, " of 'Words2' is: ", words2[randomKey2]);
    document.write("<br>"+randomKey3, " of 'Words3' is: ", words3[randomKey3]);
}
makePhrases();



function makePhrases() {
    var words1 = {key1:"24/7", Key2:"multi-tier", Key3:"30,000 foot", Key4:"B-to-B", Key5:"win-win"};
    var words2 = {key1:"empowered", Key2:"value-added", key3:"oriented", Key4:"focused", Key5:"aligned"};
    var words3 = {key1:"process", key2:"solution", key3:"tipping-point",key4: "strategy",  Key5:"vision"};

    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);


    var phrase = words1.rand1 + " " + words2.rand2 + " " + words3.rand3;
    alert(phrase);
}
makePhrases();

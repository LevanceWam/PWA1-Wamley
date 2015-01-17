var makes = {
    key1:"Ford",
    key2:"Nissan",
    key3:"GM",
    key4:"Fiat",
    key5:"Honda"
};

var models = {
    key1:"Skyline",
    key2:"Charger",
    key3:"Mustang",
    key4:"Bel-air",
    key5:"Rolls Royce"
};

var years = {
    key1:"2014",
    key2:"1934",
    key3:"1988",
    key4:"1979",
    key5:"1835"
};

var colors = {
    key1:"Blue",
    key2:"Red",
    key3:"Yellow",
    key4:"Pink",
    key5:"Orange"
};

var convertible = {
    key1:true,
    key2:false
};
function makeCar() {


    var rand1 = Math.floor(Math.random() *Object.keys(makes).length)+1;
    var rand2 = Math.floor(Math.random() *Object.keys(models).length)+1;
    var rand3 = Math.floor(Math.random() *Object.keys(years).length)+1;
    var rand4 = Math.floor(Math.random() *Object.keys(colors).length)+1;
    var rand5 = Math.floor(Math.random() * 5) +1;
    var rand6 = Math.floor(Math.random() * 2);

    var randomKeys1 = "key" +rand1;
    var randomKeys2 = "key" +rand2;
    var randomKeys3 = "key" +rand3;
    var randomKeys4 = "key" +rand4;
    var randomKeys5 = "key" +rand5;
    var randomKeys6 = "key" +rand6;

    var car = {
        make: makes[randomKeys1],
        model: models[randomKeys2],
        year: years[randomKeys3],
        color: colors[randomKeys4],
        passengers:[randomKeys5],
        convertible: convertible[randomKeys6],
        mileage: 0

    };

    return car;


}makeCar();

function displayCar(car) {
    /*console.log("Your new car is a " + car.year + " " +
    car.make + " " + car.model);
    document.write("Your new car is a " + car.year + " " +
    car.make + " " + car.model);
    alert("Your new car is a " + car.year + " " +
    car.make + " " + car.model);

    console.log("Congrats!!! Your new Car is a " + car.year + " " +
    car.make + " " + car.model);

    console.log(car.make+" came from the array of choices:"+ makes);
    document.write("<br>"+ car.make+" came from the array of choices:"+ makes);

    console.log(car.model+" came from the array of choices:"+ models);
    document.write("<br>"+ car.model+" came from the array of choices:"+ models);

    console.log(car.year+" came from the array of choices:"+ years);
    document.write("<br>"+ car.year+" came from the array of choices:"+ years);

    console.log(car.color+" came from the array of choices:"+ colors);
    document.write("<br>"+ car.color+" came from the array of choices:"+ colors);
*/



    console.log("MAKES has this many Keys: " +Object.keys(makes).length);
    console.log("MODELS has this many Keys: " +Object.keys(models).length);
    console.log("YEARS has this many Keys: " +Object.keys(years).length);
    console.log("COLORS has this many Keys: " +Object.keys(colors).length);
    console.log("CONVERTIBLE has this many Keys: " +Object.keys(convertible).length);

    document.write("<br>"+"MAKES has this many Keys: " +Object.keys(makes).length);
    document.write("<br>"+"MODELS has this many Keys: " +Object.keys(models).length);
    document.write("<br>"+"YEARS has this many Keys: " +Object.keys(years).length);
    document.write("<br>"+"COLORS has this many Keys: " +Object.keys(colors).length);
    document.write("<br>"+"CONVERTIBLE has this many Keys: " +Object.keys(convertible).length);

}
    var carToSell = makeCar();
    displayCar(carToSell);



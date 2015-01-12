/*
Levance Wamley
Pre-test
1-5-15
 */

alert("Welcome to my Online store");

var item=prompt("How much is your item ?");

while (item==="" || isNaN(item)){
  item=prompt("Please enter in a number only.");
}

var discount=prompt("What is your discount");

while (discount==="" || isNaN(discount)){
    discount=prompt("Please enter in a number only");
while (discount<0 || discount>100){
    discount=prompt("Please enter in a value higher than 0 but lower than 100")
    }
}

function total (price,discount){
    var finalTotal=(100-discount);
    finalTotal/=100;
    finalTotal*=price;
    return finalTotal;
}

var returnedTotal=total(item,discount);

console.log("All together your item was $"+returnedTotal+" with the original price of $"+item+" and a discount of "+discount+"%");
alert("All together your item was $"+returnedTotal+" with the original price of $"+item+" and a discount of "+discount+"%");
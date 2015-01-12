/*
 Name: Levance Wamley
 Date: 1/11/15
 Assignment: Goal1: Assignment: Duel1
*/

// self-executing function
(function(){

    console.log("FIGHT!!!"); // Signals that the fight is going to start.

    //player name
    var playerOneName = "Spiderman"; //Name of player number one
    var playerTwoName = "Batman"; // Name of Player number two

    //player damage
    var player1Damage = 20; //the amount of damage player one can deal
    var player2Damage = 20;//The amount of damage player two cam deal

    //player health
    var playerOneHealth = 100;// the maximum amount of health player one has
    var playerTwoHealth = 100;// the maximum amount of health player two has

    var round=0; // the variable for the rounds

    function fight(){
        console.log ('in the fight function');//console logging the fight function

        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);//this is to alert the user that the fight is starting

        for (var i=0; i < 10; i++){ // this function runs where the damage is calculated.

            //random formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = player1Damage * .5; //the variable where the damage will be held
            var minDamage2 = player2Damage * .5;// the variable where the damage will be held
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);//this is the code where the damage is calculated for player 1
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);// this is the code where the damage for player 2 is calculated

            //inflict damage
            playerOneHealth-=f1;//this is where player one inflicts damage
            playerTwoHealth-=f2;//this is where player two inflicts damage

            console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);//console out players remaining health

            var results = winnerCheck();//this is calling out the function for the winner results
            console.log(results);//console out the results of the fight

            if (results === "no winner"){//this if statement is if no one wins
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER* "+playerTwoName+":"+playerTwoHealth);//this alerts the user the results of the draw
            }else{//else statement that hold the final result scenario
                alert(results);//user is alerted the results
                break;//break
            };

        };

    };

    function winnerCheck(){//this is the function that calculates the message for the result of the battle.
        console.log("in winnerCheck FN");//consoling out the winner

        var result="no winner";//the variable for no winner

        if (playerOneHealth<1 && playerTwoHealth<1){//the requirements for the code below
            result = "You Both Die";//what variable result equals
        } else if(playerOneHealth<1){//scenario if player 1 wins
            result =playerTwoName+" WINS!!!"//the results message
        } else if(playerTwoHealth<1){//scenario if player 2 wins
            result =playerOneName+" WINS!!!"//the results message
        };

        return result; // where the results are returned

    };

    /*******  The program gets started below *******/
    console.log('program starts')//the console out to indicate the program will begin
    fight();//calling out the function

})();
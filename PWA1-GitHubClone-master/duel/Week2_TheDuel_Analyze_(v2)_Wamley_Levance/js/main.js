/*
 Name: Levance Wamley
 Date: 1/11/15
 Assignment: Goal1: Assignment: Duel1
*/

// self-executing function
(function(){

    console.log("FIGHT!!!"); // Signals that the fight is going to start.
/*
    //player name
    var playerOneName = ["Spiderman","Ghost Rider","Martian Man-hunter","Magneto"]; //Name of player number one
    var playerTwoName = ["Batman","Wolverine","Rogue","Jean-Grey"]; // Name of Player number two

    //player damage
    var player1Damage = [20,40,60,80]; //the amount of damage player one can deal
    var player2Damage = [20,40,60,80];//The amount of damage player two cam deal

    //player health
    var playerOneHealth = [100,200,300,400,500];// the maximum amount of health player one has
    var playerTwoHealth = [100,200,300,400,500];// the maximum amount of health player two has
    */

    var fighter1=["Spiderman",20,100];//made the array with the following: Name of fighter, damage, health
    var fighter2=["Batman",20,100];//made the array with the following: Name of fighter, damage, health



    var round=0; // the variable for the rounds

    function fight(){
        console.log ('in the fight function');//console logging the fight function

        alert(fighter1[0]+":"+fighter1[2]+"  *START*  "+fighter2[0]+":"+fighter2[2]);//this is to alert the user that the fight is starting

        for (var i=0; i < 10; i++){ // this function runs where the damage is calculated.

            //random formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = fighter1[1] * .5; //the variable where the damage will be held
            var minDamage2 = fighter2[1] * .5;// the variable where the damage will be held
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);//this is the code where the damage is calculated for player 1
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);// this is the code where the damage for player 2 is calculated

            //inflict damage
            fighter1[2]-=f1;//this is where player one inflicts damage
            fighter2[2]-=f2;//this is where player two inflicts damage

            console.log(fighter1[0]+":"+fighter1[2]+" "+fighter2[0]+":"+fighter2[2]); //console out players remaining health

            var results = winnerCheck();//this is calling out the function for the winner results
            console.log(results);//console out the results of the fight

            if (results === "no winner"){//this if statement is if no one wins
                round++;
                alert(fighter1[0]+":"+fighter1[2]+"  *ROUND "+round+" OVER* "+fighter2[0]+":"+fighter2[2]);//this alerts the user the results of the draw
            }else{//else statement that hold the final result scenario
                alert(results);//user is alerted the results
                break;//break
            };

        };

    };

    function winnerCheck(){//this is the function that calculates the message for the result of the battle.
        console.log("in winnerCheck FN");//consoling out the winner

        var result="no winner";//the variable for no winner

        if (fighter1[2]<1 && fighter2[2]<1){//the requirements for the code below
            result = "You Both Die";//what variable result equals
        } else if(fighter1[2]<1){//scenario if player 1 wins
            result =fighter2[0]+" WINS!!!"//the results message
        } else if(fighter2[2]<1){//scenario if player 2 wins
            result =fighter1[0]+" WINS!!!"//the results message
        };

        return result; // where the results are returned

    };

    /*******  The program gets started below *******/
    console.log('program starts')//the console out to indicate the program will begin
    fight();//calling out the function

})();
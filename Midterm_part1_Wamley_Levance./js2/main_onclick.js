/*
    Midterm Exam for PWA-1
    NAME:
    DATE:
*/

(function(){  // CREATE SELF EXECUTING FUNCTION

i = 0; // DEFINE GLOBAL VARIABLE to count student objects during processing
var button = document.querySelector(".buttonred"); // SETUP GLOBAL BUTTON WITH DOM ELEMENT



// CREATE STUDENT ARRAY OF 2 OBJECTS
    var student = [//this will be for only 2 students this will be further explained in a later function
        {
            name: "True Religion", // this will be for the variable index0.name
            address: {street: "4953 International Drive", city: "Orlando", state: "florida"},
            gpa: [3.2, 3.6, 4],
            date: new Date()
        },
        //student 2
        {
            name: "Timberland",// this will be for the variable index1.name
            address: {street: "15777 S Apopka Vineland Rd", city: "Orlando", state: "Florida"},
            gpa: [3.2, 3.6, 4],
            date: new Date()
        }];


var max = student.length; // Store total number of student objects  -- reset this to your_array_name.length!!


// CREATE FUNCTION TO CONSOLE.LOG OUT ALL STUDENT OBJECTS/INFO
    var consoleData = function(){
        for (var i = 0,j = student.length; i < j; i++){
            console.log("Name: "+student[i].name);
            console.log("Address: "+student[i].address.street+" "+student[i].address.city+" "+student[i].address.state);
            console.log("GPA: "+student[i].gpa);
            console.log("Date: "
                +student[i].date.getMonth()+"/"
                +student[i].date.getDate()+"/"
                +student[i].date.getYear()

            );
        }
        return false;
    };


// CREATE FUNCTION TO DYNAMICALLY ADD A * NEW * STUDENT TO ORIGINAL ARRAY OF OBJECTS

    var newStudent = function(newname,newstreet,newcity,newstate,newgpa,newdate) {// this is for the pie store student
        //we are using this to add a new student
        student.push({
            name: newname, // this will be for the variable index2.name
            address: {street: newstreet, city: newcity, state: newstate},
            gpa: newgpa,
            date: newdate
        });
    };

// CREATE FUNCTION TO READ THROUGH ARRAY OF GPAs and Calculate 'GPA AVERAGE' OF ALL GPAs


// CREATE FUNCTION TO DISPLAY HTML OF ALL STUDENT INFO
var displayData = function(){

    // Define DOM elements for HTML page/display
    console.log("This is where you need to get access to your DOM Elements by ID");
    var innerName = document.getElementById("name");
    var innerAddress = document.querySelector("#address"); //query has to use the #
    var innerGPA = document.querySelector("#gpa");
    var innerDate = document.querySelector("#date");
    var innerAvgGPA = document.querySelector("#gpaavg");


    // IF THE NUMBER of Student Objects LEFT OVER IS NOT = TO THE MAX+1, DISPLAY ANOTHER STUDENT
    //if (i !== max+1){

        //console.log("This is where you need to get use innerHTML");
        //innerName.innerHTML = 'NAME:  ' + "my_array_name[i].uname";

    if(i !== max+1){
        innerName.innerHTML = "Name: "+student[i].name;
        innerAddress.innerHTML = "Address: "+student[i].address.street+" "+student[i].address.city+" "+student[i].address.state;
        innerGPA.innerHTML = "GPA: "+student[i].gpa;
        innerDate.innerHTML = "Date: "
        +student[i].date.getMonth()+"/"
        +student[i].date.getDate()+"/"
        +student[i].date.getYear();

		// GET THE DATE - ONLY NEED THIS AFTER EVERYTHING ELSE HAS BEEN DISPLAYED

		
		// invoke gpaAvg function and pass all GPAs for average calculation (students[i].gpa)


    // Else change the button text to DONE
	}else{
		button.onclick = "return false"; //DISABLE THE CLICK EVENT
        document.querySelector('.buttonred').innerHTML = 'DONE!!!';  //CHANGE THE 1ST INSTANCE OF CLASS 'BUTTONRED' TEXT TO 'DONE'

	};
	i++ ;// Increment number of items after each student object is processed
	return false;
};



// Create Button for click event
button.onclick = displayData;  // Every time the "NEXT" button is clicked, call the "displayData" function

// Print titles to Console.log showing original objects + Newly Added Objects
console.log('********* Below shows the original objects **************')
 consoleData();  // Invoke Function that Console Logs out all the data
newStudent('Black Widow', '123 My Super Hero Way', 'Orlando', 'Florida', [3.2, 4.0, 2.2], new Date());
console.log(' ');
console.log('********* Below shows the new object added to the original object **************')
 consoleData();  // Invoke Function that Console Logs out all the data a 2nd time
 displayData();  // Invoke Function that prints Student Info to HTML page

})();  // end wrapper
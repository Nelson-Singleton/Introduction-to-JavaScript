/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 21;
if(votingAge > 18 ){
    console.log("true");
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let myVar = "Yes";
let yourVar = "2";
if(yourVar===1){
let myVar = "Still a yes";
} else {
    let myVar = "Now it's no"
}
console.log(myVar);



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
console.log(parseFloat("1999"));




//Task d: Write a function to multiply a*b 
function multiply(a,b){
return a*b;
}
console.log(multiply(2,4));



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function dogYears(age){
    return age / 7;
}
console.log(dogYears(30));




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(weight, age){
    if (age >= 1 && weight <= 5){
        console.log(weight * .05);
    
    } else if (age >= 1 && weight >= 6 && weight <= 10){
        console.log( weight * .04);
    } else if (age >= 1 && weight >= 11 && weight <= 15){
        console.log(weight * .03);
    } else if (age >= 1 && weight >= 15){
        console.log(weight * .02);
        
        //puppies
    } else if (age >= 2/12  < 12/4){
        console.log(weight * .1);
    } else if (age >= 4/12 < 12/7){
        console.log(weight * .05);
    } else if (age >= 7/12 < 1){
        console.log(weight * .04);
    } else{
        console.log ("Your dog is too young to use this calculator.");
    }
}
    console.log(dogFeeder(15, 1));




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

//rockPaperScissors takes an argument of your Choice
function rockPaperScissors(yourChoice){


//return a random number between 0 and 1.
function randomNum(){
    return Math.random();
}



//convert randomNum returned value into a string and assign it to myChoice. I used var because it can't escape the if statement with "let"
if (randomNum() < .33){
    var myChoice = "rock";
} 

else if (randomNum() >= .33 < .66){
    var myChoice = "paper";
} 

else if (randomNum() >= .66){
    var myChoice ="scissors";
}

//game rules. Compare yourChoice argument and randomly generate myChoice 

if(yourChoice === "rock" && myChoice === "rock"){
console.log("You chose rock. I chose rock. Tie game!") 
} 
else if(yourChoice === "rock" && myChoice === "paper"){
    console.log("You chose rock. I chose paper. I win!")
} 
else if(yourChoice === "rock" && myChoice === "scissors"){
    console.log("You chose rock. I chose scissors. You win!")
}
else if(yourChoice === "paper" && myChoice === "rock"){
    console.log("You chose paper. I chose rock. You win!")
}
else if(yourChoice === "paper" && myChoice === "paper"){
    console.log("You chose paper. I chose paper. Tie Game!")
}
else if(yourChoice === "paper" && myChoice === "scissors"){
    console.log("You chose paper. I chose scissors. I win!")
}
else if(yourChoice === "scissors" && myChoice === "rock"){
    console.log("You chose scissors. I chose rock. I win!")
}
else if(yourChoice === "scissors" && myChoice === "paper"){
    console.log("You chose scissors. I chose paper. You win!")
}
else if(yourChoice === "scissors" && myChoice === "scissors"){
    console.log("You chose scissors. I chose scissors. Tie game!")
}
}

//always choose rock!
console.log(rockPaperScissors("rock"));

  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function convertKm(num){
    return num / 1.609;
}
console.log(convertKm(10));



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  function convertFeet(num2){
      return num2 * 30.48;      
  }
  console.log(convertFeet(6));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function bottles(howMany){
    for(let i = howMany; i > 0; i--){
        let remainder = i-1;
        console.log(i + " bottles of soda on the wall " + i + " bottles of soda. Take one down pass it around. " + remainder + " bottles of soda on the wall.");

    }
}
bottles(5);



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function grade(mark){
if (mark >= 90){
    return "A";
}else if(mark >=80 && mark < 90){
return "B";
}else if(mark >=70 && mark <80){
return "C";
}else if(mark >=60 && mark <70){
return "D";
}else {
return "F";
}
}
console.log(grade(95));
console.log(grade(84));
console.log(grade(73));
console.log(grade(62));
console.log(grade(50));


  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object






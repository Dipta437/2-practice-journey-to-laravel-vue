// First Class
console.log("Kamrul Hasan Dipta")

// Second Class
// We can store variable by 
// 1) var, 2) let and 3) const
// Data Type Two types
// 1) Premitive Data Type
// 2) Non-Premitive Data Type

var kamrulHasan = 10;
console.log(kamrulHasan);

var kamrulHasan = "dipta";
console.log(kamrulHasan);

// Third Class
// Operators are many types
// 1) Arithmatic Operator (+,-,*,/)
// 2) Comparison Operator
// 3) Assignment Operator
// 4) Logical Operator
// 5) Conditional Operator
// 6) Modulo Operator or Remainder Operator
// 7) Increment and Decrement Operator

var a = 20;
var b = 35;
console.log(a + b);
var c = 45;
var d = 55;
console.log(c - d);
var p = 56;
var n = 60;
console.log(p * n);
console.log(p / n);
console.log(p != n);
console.log(p == n);
console.log(p === 'n');
console.log(p >= n);
console.log(p % n);

// Fourth Class
// Conditional

var test = 10;
if (test == 5){
    console.log("This sould be displayed");
}else if(test == 10){
    console.log("Play the video");
}{
    console.log("Not correct");
}

// Fifth Class
// Switch Statement

var number = parseInt(prompt("Enter a number between 1 to 7 : "));

switch (number) {
    case 1:
        console.log("Sunday");
        break;
        case 2:
        console.log("Monday");
        break;
        case 3:
        console.log("Tuesday");
        break;
        case 4:
        console.log("Wednesday");
        break;
        case 5:
        console.log("Thursday");
        break;
        case 6:
        console.log("Friday");
        break;
        case 7:
        console.log("Saturday");
        break;

    default:
        console.log("Invalid Value");
        
}


// Sixth Class
// For loop, While loop, while do loop

for(let i = 1; i <= 5; i++){
    console.log("For loop learning");
    console.log("Learning laravel and Vue");

    console.log(i);
}
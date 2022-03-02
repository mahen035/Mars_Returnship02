// Scoped demonstration
/* let a = 5, b = 10;
if(a > b){
     let c = 50;  //Scope of c is only within the if block
 }
 else{
     let c = 100;
 }
 console.log(c); */

//Redeclaration
/* var user = "John";
var user = "Mike";
console.log(user); */

//let userProfile; //Camelcase

/* const COLOR = "red";

console.log(COLOR); */

//console.log("Test"/0);

/* let a=10, b=20;

console.log(`Sum of a and b is: ${a+b}`); //Expression is always followed by $

let age = null;
console.log(typeof(age));

console.log("Value of a is: "+a + ", Value of b is "+b); */

//console.log('5' == "5"); //Assignment

//let a = 10;
//console.log(++a); //pre increment
//console.log(a++);  //a++ (post increment) : a = a+1;
//a++;
//console.log(a);

let age = 18;

/* if(age > 18 && age>59){
    
         console.log('Eligible to vote and pension');
}   
    else if(age < 60){
        console.log('Wont get a pension now');
    }

else if(age===18){
    console.log('You turned 18');
}
else{
    console.log('Not Eligible to vote');
}
 */
/* switch(age){
    case 18:
        console.log('You turned 18');
        break;
    case 19:
        console.log('Eligible to vote'); 
        break;   
    default:
        console.log('No match');    
} */

//While loop :1.Initialization, 2. condition

/* let count;
for(count =0; count < 15; count++){
    if(count === 10){
        continue;
    }
    console.log(count);
    //count++;
        
} */

/* do{
    console.log(count);
    count++; 
} while(count < 5); */


let str = 'Hi how are you?'; 
/* str = 'hi'; 
console.log( str[0] ); */

console.log(str.substring(3,10));  //start index, length of original string

console.log(str.substr(3,10)); 




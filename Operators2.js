console.log("Assignment Operators :- ++  --  +=  -=  *=  /=  %=  'These are also called Short Cut Operators'");

var x = 10 ;
console.log (x) ;

x= x + 1 ;
console.log (x) ;

//Simply:-
var x = 10 ;
x++ ;
console.log (x) ;

console.log ("The value of x before Post Increment is " + x) ;
var y = x++ ;  // Post Increment
console.log (y) ;

console.log ("The value of x before Pre Increment is " + x) ;
var y = ++x ;   // Pre Increment
console.log (y) ;
console.log ("The value of x after Pre Increment is " + x) ;


// Similarly Post and Pre Decrement can be used according to the condition
console.log ( "The value of x before Pre Decrement is " + x ) ;  
var a = --x  ;   // Pre Decrement
console.log (a) ;

console.log ( "The value of x before Post Decrement is " + x ) ;
var b = x-- ;   // Post Decrement
console.log (b) ;

var x = 100;
x += 2; 
console.log (x) ;

x -= 2;
console.log (x) ;

x /= 2;
console.log (x) ;

x *= 2;
console.log (x) ;

x %= 11;
console.log (x) ;
// Consider the following code fragment

var a = "3";
var b = 2;
var c = b + a;


// Q: What is the value of c?
"23"

// Write to the best if your understanding
// why c is the value that it is.
/* The variable c value has assigned value from the two variables: a and b.
Since the variable a is a string data type then the other variable b will be treated the same way.
The output becomes the string due to the string concatenation. 
 */

var str = "Version " + 5 + 1;


// Q: What is the value of str?

 "Version 51"
// Write to the best if your understanding
// why str is the value that it is. How could
// it be altered to result in 6 instead of 51?

/*Three values ("Version " + 5 + 1) will be concatenated and assigned to var str.

The "Version" should be set up to false with the statement!"Version". 
The next true statement (5 and 1) will be executed and treated as numbers.
var str = !"Version " + 5 + 1; */

var str = !"Version " + 5 + 1;
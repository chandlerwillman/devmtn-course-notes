/* variables and datatypes */

var myStr = "";

var myNum = 1;

var myBool = true;

var myArr = [];

var myObj = {};

var myFunction = () => {};

function functionName (par1,par2){/*action*/}; //other way to initialize a function

var myNull = null;

var myUnd = undefined;

var $example_1; //characters we can use when naming variables


/* lexical scope - var */

//x and y connot be seen outside the scope of this function
var multiply = (x,y) => {
    return x * y;
};
//calling a function
multiply(3,6); 
//if statements and for loops do not create their own loops


/* block scoping - let & const */

for(let i=0;i<arr.length;i++){
}
i; //!ERROR, i can only be used within that block

function outerFunction (){
    localBlockVar; //!ERROR, you cannot use a blockscope variable before it's been declared wh
    let localBlockVar;
    localVar; //returns just fine because of "Hoisting" in javascript
    var localVar;
    const localConstVar; //!ERROR, must be assigned a value upon initialization, cannot be reassigned a diff value, except on objects

};


/* Other things said in class *

- objects compared against objects are looking at their reference address, or the place stored in memory
- const OBJECTS can be reassigned values because the const is declaring the reference, the value can change on the address
- functions will always remember the scope of the function they are declared in
- function declaration is the first time a function is declared; if a function is used a second  time, or is changed later, it is a function expression
- function declarations are the most flexible, so use those most often

*/

/* functions */

greeting(); //!ERROR, arrow functions are block scoped
var greeting = () => {};
gretting = function someName(){
    someName(); //function can be referenced inside the function
};
someName(); //!ERROR, someName was renamed to greeting **i think, not sure

//returning functions from a function
function myFuntion (){
    return function(num){ //entire function is returned
        /*action*/
    }
};
var innerFunction = myFunction(); //resulting function can be saved in a variable
innerFunction(num); //the returned function can now be invoked

//function declaration - leads to less unknown bugs apparently
function myDec (){};

//function expression
var myExp = function (){};

//adding values to an array
var myArray = [];
myArray.push(1); //adds a value onto the end of an array
myArray.unshift(5); //adds a value to the start of an array

myArray.length; //returns the lenght of the array, 2 in this case

//removing values from an array
myArray.pop(); //removes the last item from the variable and returns it
myArray.shift(); //removes first element from the array and returns it
myArray.splice(1,2); //removes items from array, the first value says where to start, second value tells how many items to pull out, returns items that were removed
myArray.splice(3,0,"New"); //third+ items add in value(s) where the original items were removed
myArray.slice(); //makes a copy of the entire array
myArray.slice(4); //makes a copy starting at the item notified
myArray.slice(4,4); //make a copy starting at the first item and stopping at the second item, DOES NOT MODIFY ORIGINAL ARRAY

//Callbacks - function passed into another function
function takesACallback(anyVar,anyFunction);

myArray.forEach(function(num,i,arr){
    return arr[i]++;
})


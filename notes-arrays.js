var list = [
    1,
    false,
    '',
    new Date(),
    {}
];

list[1]; //false

list.slice(); //makes a copy (does not modify the original array)
list.slice(2); //makes a copy starting at index 2
list.slice(2,4); //makes a copy starting at 2 up to 4 values after
list.slice(2,-1); //makes a copy starting at 2, ending 1 item from the end (special only for slice and splice)

list.splice(1); //removes items starting at index 1
list.splice(1,2); //removes 2 items starting at 1
list.splice(1,2,3); //removes 2 items starting at 1 and slips in 3

list.pop(); //**investigate 

list.push(1,2,3,4); //adding items to the end of the array, returns the new length of the array

list.shift(); //**investigate 

list.unshift(); //adds to the front of the array, returns the new length

list.indexOf(); //returns the index of the value within the parenthesis, must be same reference as well-- returns -1 if it can't find it

list.map(); //makes a copy, but can also transform items in an array

    const users = [
        {name:"Chandler"},
        {name:"Leah"},
        {name:"Paisley"}
    ];

    users.map(user => user.name); //returns new array of just the names

users.forEach((user,i,arr) => { //**investigate
    //do something
}); //void

//reduce method - sums all the values in an array
    
    const nums = [1,2,3,4,5];

    nums.reduce((total,elem,i,arr) => {
        return total + nums;
    },0); //initial value, doesn't get called unless there is this lasty boi (second argument of same datatype you're expecting from reduct)

list.filter(function(val,i,arr){
    return val > 5;
}); //loops through each index, returns true/false for condition, returns the new array

list.filter(val => val > 5 ); //same as above

//this is what filter does...apparently
Array.prototype.filter2 = function(callback){ //look up what "prototype" does
    const copy = this.slice(); //** look up what "this" does
    const newArr = [];
    for(var i=0; i<copy.length; i++){
        var elem = copy[i];
        var result = callback(elem,i,this);
        if (result){
            newArr.push(elem);
        }
    }

    return newArr;
};
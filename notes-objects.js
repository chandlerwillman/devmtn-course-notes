/* class notes - 1/10/2019 */

    //primitive vs reference types

        //primitive types

            'blah' == 'blah'; //true - even though they are separate string, they have the same values so they match

        //reference types

            var obj = {key:'value'};
            obj == {key:'value'}; //false - checks the current place in memory that the object takes up

            obj.key == obj.key; //true

            var obj1 = {};
            var obj2 = obj1 //now they the same 


    //fun facts about objects

        var newObj = {
            key: 'value', //can't start with a number, can use dollar signs, and other things
            key: 42,
            key: false,
            key: {
                innerObjKey: 'inner value',
            },
            method: () => {
                // do something
            },
            key: [],
            key: new Date(),
            key: new Symbol(),
            'key': 'some value', //keys aer actually stored as strings
            3: '' //a key can be a number
        };

        newObj.key; //usual way of accessing a key

        //newObj.3; ---does not work
        newObj[3]; //turns the three into a string so that it can be accessed

        newObj['key']; //lets you pass in a string that you want to match with

        for(var key in newObj){ //iterates through all keys in the object
            console.log(key, newObj[key]);
        }

    //Other things about objects

        var objTwo = {
            key: '',
            falsy: NaN
        };

        objTwo.foo; //undefined

        if(objTwo.key){
            //do something (wuth a number)
        }

        if (objTwo.hasOwnProperty('key')){ //checks to see if a property exists
            //do something
        }

    /* other shiz this guy says during class */

        var item = arr.find(item => {  // arr.find - this works like filter but stops looking through the array once it's passed the condition
            return item.id//...more codes
        });

        newObj.foo; //I honestly have no idea wtf the foo thing is about

/* class notes - 1/15/2019 */

    const propName = 'foo';

    const obj = {
        key: 'value',
        '@randomKeyName': '',
        [propName]: '' //still valid way to create property on an object
    };

    const wasSuccessful = delete obj['@randomKeyName']; //returns boolean of if it worked or failed

    obj.hasOwnProperty('@randomKeyName'); //false

    obj['@randomKeyName'] = undefined;

    obj.hasOwnProperty('@randomKeyName'); //true

    for(const key in obj){
        console.log(key,obj[key]); // it might console log like this:('key', 'value'), ('foo', ''), ('@randomKeyName', undefined)
    }

    for (const index in arr) {
        console.log(index, arr[index]); // (index, value), (index, value), etc....
    }

    //mapping data within one object and copying it into another
        
        const bookFragment = {
            title: 'Worrds of Radiance',
            page: 2045,
            weight: 5
        };

        const book = {
            author: 'Brandon Sanderson',
            publishDate: new Date(), //*investigate this
        };

        for (const key in bookFragment) {
            book[key] = bookFragment[key];
        }

    //one more thing to talk about
        
        const newBook = {
            ...book, //spread operator - the three dots means to take the key/value pairs of the book object and expand/assign them to the newBook object
            ...bookFragment
        };

        object.assign(newBook, bookFragment); //same as above essentially

    //something else i missed the explanation to while looking up electric scooters

        class Person { //allows you to create objects multiple times
            //name = '';

            constructor(nane) {  //constructor makes a new object *investiage
                // var this = {}
                // adds prototype to that object
                //runs code in constructor
                
                this.name = name; //this - adds to the object that was made with this constructor, *investigate
                //returns the new object
            }
            
            sayName() {
                console.log(this.name);
            }
        }

        //this is the same as above
        function createPerson(name){
            return {
                name,
                sayName() {
                    console.log(this.name);
                }
            };
        };

        /*also the same
        function Person(name){
            this.name = name;
        }*/

        Person.prototype.sayName = function sayName(){ //*investigate prototype
            console.log(this.name);
        };

        //how to use the Person class
        var bob = new Person('bob'); // creates a new person object named bob, need to use 'new' to call it

        bob.sayName(); //logs out to developer console since the function is available in the class
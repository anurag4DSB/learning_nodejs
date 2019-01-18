var square = x => x * x;
console.log(square(9));
//If you have a single parameter you can skip the () in arrow fucntions
// so (x) => can be written as x =>
var user = {
    name: 'Anurag',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I am ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I am ${this.name}`);
    }
};
//this doesn't work in arrow functions
// You need to use a different syntax which is not a arrow function
// Arguments keyword works in regular functions.
// Arguments in arrow function will come from global arguments. 
// So basically arrow functions take global arguments and this instead of local 

user.sayHi(1, 2, 3);


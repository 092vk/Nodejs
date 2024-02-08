// we are required to code in a modular way , 
// which means we split our project in different modules , which we import in our project and use it then 

const mathModule = require('./math');

const {add,sub} = require('./math');
//if you want to import only some functions only you can import only them by destructuring and manually giving the name of functions,*** now we can directly use the add and sub function***

let value = mathModule.add(2,3);

console.log(value);


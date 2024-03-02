// we are required to code in a modular way , 
// which means we split our project in different modules , which we import in our project and use it then 

// const mathModule = require('./math');
// const {add,sub} = require('./math');

//Es module
import * as mathi from './math.js';
import {add,sub} from './math.js'
// here you have to give the extension , usually .mjs is used for modules , but if you specify type as module in package json , it will work fine 



//if you want to import only some functions only you can import only them by destructuring and manually giving the name of functions,*** now we can directly use the add and sub function***

// let value = mathModule.add(2,3);

// console.log(value);

console.log(mathi.add(9,8));


function add(a,b) {
    return a+b;
}

const sub = (a,b) => {
    return a-b; 
}

module.exports = {
    add,sub
}

// module.exports={
//     addFunc:add,
//     subFunc:sub
// }***you can also export them like this ****

//exports.add = (a,b)=>a+b;
//exports.sub = (a,b)=>a-b;

// module.exports={add,sub};


//here we are making and exporting a object of functions , we are doing this becuz we want to export more than one thing ,
//  so we are just bundling them in a object



// this is the commonjs syntax , now we use ES6 syntax 
// there we dont use require and module.exports but import and exports 
// also we have options of default exports and named exports





















// ********************************** ES6
/*

Certainly! Here's a comprehensive list highlighting the key differences between CommonJS (Node.js modules) and ES6 (ECMAScript 2015 and later) modules:

Syntax:

CommonJS:
require function is used for importing modules.
module.exports is used to export values.
ES6 Modules:
import and export statements are used for importing and exporting.
Dynamic Import:

CommonJS:
Supports dynamic imports using require at runtime.
ES6 Modules:
Static imports with import at compile-time. Dynamic imports are supported using import().
Loading:

CommonJS:
Synchronous loading. Modules are loaded and executed at runtime.
ES6 Modules:
Asynchronous loading. Loaded at the beginning but executed only when needed.
Top-level Scope:

CommonJS:
Modules have their own scope. Exported values are copies.
ES6 Modules:
Modules have their own scope, but exports are live bindings. Changes to exported values are reflected.
Default Exports:

CommonJS:
Supports default exports.
ES6 Modules:
Explicit support for default exports using export default.
Named Exports:

CommonJS:
Exports are often assigned to module.exports directly.
ES6 Modules:
Use export { variable } for named exports.
Circular Dependencies:

CommonJS:
Allows circular dependencies.
ES6 Modules:
Handles circular dependencies more gracefully.
Browser Support:

CommonJS:
Originally designed for server-side environments (Node.js).
ES6 Modules:
Supported in modern browsers, making them suitable for both server and client-side development.
Static Analysis:

CommonJS:
Analysis of dependencies is done at runtime.
ES6 Modules:
Imports are statically analyzable, enabling better optimizations like tree-shaking.
Hoisting:

CommonJS:
No hoisting of exports.
ES6 Modules:
Hoists import statements to the top but not exports.
Tooling:

CommonJS:
Tools like Webpack and Browserify have been commonly used for bundling CommonJS modules.
ES6 Modules:
Native browser support for ES6 Modules, and tools like Webpack, Rollup, and Parcel handle bundling.
Usage:

CommonJS:
Predominantly used in Node.js environments.
ES6 Modules:
Becoming the standard in modern JavaScript, widely used in both Node.js and browser environments.

*/
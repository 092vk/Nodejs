// how node works 

// frontend -> request ->backend ->event loop(queue)
// -->types of requests 
// 1.blocking 
// 2.non blocking 

// if blocking --> it comes and blocks the call stack , uses the single thread of the nodejs to run that task , once it gets finished and result is returned , the next operation on call stack runs 


// if non-blocking --> it comes , it then gets passed into a  callback register(its callback gets saved there) , then it is passed into a node api which assigns it a worker(thread of hardware ) it does does the work , on completion it is passed to event queue , here there is a event loop that constantly removes the elements from the event or task queue and pushes it into the callstack back again , when this task is run in callstack , it calls it's callback function and runs it .





import os from 'os';
console.log(os.cpus().length);
// gives the number of core , the max thread which we can use 



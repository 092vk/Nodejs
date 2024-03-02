// file handling in nodeJs
// it is done using fs module

import fs from 'fs';
// the fs module has two types of methodes , 1.async , 2.sync , sync methods are blocking in nature , so they will block the whole call stack untill they are not completed ,

// while async methods are non-blocking in nature , whihc means that they will not block the call stack untill they are completed and they run in background asunchronously untill it completes , for this reason we need to give it a callback error function , 


// creating a file 

fs.writeFileSync("./text.txt","helo text file , you are generated using fs module");



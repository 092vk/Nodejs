// file handling in nodeJs
// it is done using fs module

import { error } from 'console';
import fs from 'fs';
// the fs module has two types of methodes , 1.async , 2.sync , sync methods are blocking in nature , so they will block the whole call stack untill they are not completed ,

// while async methods are non-blocking in nature , whihc means that they will not block the call stack untill they are completed and they run in background asunchronously untill it completes , for this reason we need to give it a callback error function , 


// creating a file 
// sync ....
// fs.writeFileSync("./text.txt","helo text file , you are generated using fs module");


// // async ....
// fs.writeFile("./textA.txt","you are written by fs module but asynchronously",(err)=>{
//     if(err){
//         console.log("can't write");
//         return;
//     }
//     else{
//         console.log("written succesfully");
//     }
// });


// reading from different file 
const read = fs.readFileSync('./contact.txt',"utf-8");
console.log(read);

//one difference that arise when we use async is that , ****we can't save the value which we get from async , we have to use a callback on it ****
fs.readFile("./contact.txt","utf-8",(err,result)=>{
    if(err){
        console.log("can't read , ops failed",err);
        return;
    }
    console.log(result);
})



// appending data in files
fs.appendFileSync("./contact.txt",new Date().toLocaleDateString()+"\n");
//this code runs before above one 




//we can do a lot more things using fs , like creating directory recursively , opening ,closing, deleting(unlink) , etc on both files and directories , copy ,stats , etc 

fs.mkdirSync("./clown/joker/villan",{recursive:true});


// fs module is only found in node and not in js , as it is very dangerous 
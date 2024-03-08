
import fs from 'fs';
import http, { createServer } from 'http';
import url from 'url';

// there will be two routes one student and he can give him name as a parameter or a page for teacher 

const server = createServer((req,res)=>{
    console.log("req received");
    const myurl = url.parse(req.url,true);

    console.log(myurl);

    const pathName = myurl.pathname;

    switch(pathName){
        case '/':
            res.write("welcome to our website,please visit our pages of students and teachers ");
            res.end("thnx for visiting us");
            break;

        case '/student':
            const name = myurl.query.name;
            console.log(name);

            try {

                const content = fs.readFileSync('./students.json', 'utf-8');
                console.log(content);

                const marksData = JSON.parse(content).marks;
                console.log(marksData);

                const marks = marksData[name];
                console.log(marks);

                res.end(`${name} : ${marks}`);

            } catch (err) {
                res.end("No such student");
            }

            break;

        case '/teacher':
            res.write("hello teacher , welcome ");
            res.end("this site is still on progress for teachers , visit us sometime later ...");
            break;
    }
})

server.listen(8080,()=>{
    console.log("we are listning");
});

// fs.readFile('./students.json', 'utf-8', (err, content) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
    
//     const jsonData = JSON.parse(content);
//     console.log(jsonData);
// });

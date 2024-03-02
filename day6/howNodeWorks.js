import http from 'http';

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.end('bye');
})

const port = 4000;

server.listen(port,()=>{
    console.log(`server is running`);
})





// libUV


// request code : frontend 

// import http from 'http';

// const serverUrl = 'http://localhost:4000';

// http.get(serverUrl, (res) => {
//   let data = '';

//   // A chunk of data has been received.
//   res.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received.
//   res.on('end', () => {
//     console.log('server response:', data);
//   });
// }).on('error', (error) => {
//   console.error('error making request:', error.message);
// });

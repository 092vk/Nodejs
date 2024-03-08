// rest api

// api --> this are rules through which we make requests 

// restFull APis --> they are rules/styles through which we make requests /apis

// rules of RESTFull APIS (representational state transfer )

// 1.Based on Client - Server Architecture
// the FrontENd and BackENd must be Independent of each other, 
// our server can give response in form of :
// 1.text
// 2.image 
// 3.html
// 4.JSON

// now if we send data in form of html(server side rendering) it causes problem if the application is run on crossplatforms(mobile , web, alexa, watch) etc , there we cant send html , it that case we send data in a particular form called raw JSON data, using this , on receiving this data from the server , our frontend depending on whcih kind of it is . can handle it accordingly 
 
// so untill you are sure that frontend is browser dont send html , ssr is recomended and are very fast , but dangerous 


// 2.always respect http methods
// 3. stateless communication --> this means that whenever we make a request , the request must contain all the info, the server should not contain any info about the state of frontend and give response based on it , the resqest should contain the state of frontend

// 4.cachebale and non cacheble 


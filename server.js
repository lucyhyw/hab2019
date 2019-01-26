const http = require("http");
const assert = require('assert');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:aEpNJ0tCWxo00jvm@cluster0-qapyv.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
	const collection = client.db("app").collection("objs");
 	// perform actions on the collection object
 	collection.find({}).toArray(function(err, items) {
    	console.log(items)
    	db.close();
   	});
  client.close();
});


http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(process.env.PORT || 8081 );

// Console will print the message
console.log('Server running at http://127.0.0.1:/' + process.env.PORT);


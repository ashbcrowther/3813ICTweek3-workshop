const PORT = 8888

var express = require('express'); //used for routing
var app = express();
var http = require('http').Server(app); //used to provide http functionality

app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());
app.use(express.static(__dirname + 'www'));
app.get('/test', function (req, res){
    res.sendFile(__dirname + '/www/test.html');
});
console.log(__dirname);
require('./routes/check.js').routeFunc(app);

http.listen(PORT,
    () => {
        console.log('Server listening on:' + PORT);
    }
);

/*let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: "+ host + " port: " + port);
    }); */


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 8888;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS) from "www" directory
app.use(express.static(path.join(__dirname, 'www')));

// Import routes
require('./routes/homeroute.js').route(app, path);
require('./routes/accountroute.js').route(app, path);
require('./routes/check.js').routeFunc(app); 

// Starts the server on specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

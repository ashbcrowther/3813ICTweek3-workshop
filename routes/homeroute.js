const path = require('path');

// Account route in express server to serve form.html
module.exports = {
    route: (app, path) => {
        app.get('/', (req, res) => {
            res.sendFile(path.resolve('./www/form.html'));
        });
    }
};
const path = require('path');

// Account route in express server to serve sccount.html
module.exports = {
    route: (app, path) => {
        app.get('/account', (req, res) => {
            res.sendFile(path.resolve('./www/account.html'));
        });
    }
};

const fs = require('fs');

module.exports = {
    routeFunc: (app) => {
        app.post('/check', function(req, res) {
            const c = {
                email: req.body.email,
                password: req.body.password
            };

            fs.readFile('./data/userlist.json', 'utf8', function(err, data) {
                if (err) throw err;
                let users = JSON.parse(data);

                // Use .find() to get the user object
                let user = users.find(u => u.email === c.email && u.password === c.password);

                if (user) {
                    res.json({
                        ok: true,
                        name: user.name
                    });
                } else {
                    console.log("Invalid Login");
                    res.json({
                        ok: false,
                        errors: []
                    });
                }
            });
        });
    }
};

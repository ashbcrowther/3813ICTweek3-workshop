


module.exports = {
    routeFunc: (app) =>
        app.post('/check', function(req, res){

            c = {
                "email": req.body.username,
                "password": req.body.psw
            }

            fs.readFile('./data/userlist.json', 'utf8', function(err, data){
                if (err) throw err;
                let obj = JSON.parse(data);
                console.log(obj);
                console.log(c);

                let find = obj.some(e => (e.email == c.email && e.password == c.password));
                if (find) {
                    res.json({
                        "ok": true
                    });
                } else {
                    console.log("Invalid Login");
                    res.json({
                        "ok": false,
                        errors: []
                    });
                }
            })
        })
}
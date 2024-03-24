var router = require('express').Router();
//const loginsDal = require('../../services/pg.logins.dal') // Import the DAL page pg.logins.dal.js
const loginsDal = require('../../services/m.logins.dal'); // get all the data from mongoDB


// api/logins
router.get('/', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/logins/ GET ' + req.url);
    try {
        let theLogins = await loginsDal.getLogins(); 
        res.json(theLogins);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }

    router.get('/:id', async (req, res) => {
        if(DEBUG) console.log('ROUTE: /api/logins/:id GET ' + req.url);
        try {
            let aLogin = await loginsDal.getLoginByLoginId(req.params.id); // from postgresql
            if (aLogin.length === 0)
                res.statusCode = 404;
            res.json(aLogin);
        } catch {
            // log this error to an error log file.
            res.statusCode = 503;
            res.json({message: "Service Unavailable", status: 503});
        }
    });

    
});

module.exports = router;
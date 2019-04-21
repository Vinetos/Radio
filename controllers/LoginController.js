const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const { exec } = require('child_process');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/', (req, res) => {
    if (req.body.username && req.body.password) {
        exec(`java -jar D:\\Developpement\\SafexTy\\Hooligan\\build\\libs\\Hooligan-0.0.1.jar login ${req.body.username} ${req.body.password}`, (err, output, stderr) => {
            if (err || stderr)
                return res.sendStatus(500);
            const loginAllowed = JSON.parse(output).connexion.connexionAutorisee;
            res.json({allowed: loginAllowed === undefined ? false : loginAllowed}).send();
        });
    } else {
        res.status(422).send(); // Request understood but not valid
    }
});

module.exports = router;

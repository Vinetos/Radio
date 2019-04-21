const express = require('express');
const app = express();
const port = process.env.RADIO_PORT || 4000;

const loginController = require('./controllers/LoginController');
app.use('/login', loginController);

app.listen(port, () => console.log('Radio server started on: ' + port));

require('dotenv').config();
const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

app.use(compression());

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile('/public/index.html', { root: __dirname });
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, '0.0.0.0', (err) => {
    if (err) { console.log(err); }
    console.info(`==> 🌎 app listening on http://localhost:${PORT}.`);
});
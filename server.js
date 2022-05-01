const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/01-heroes-app-tutorial'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/01-heroes-app-tutorial'}),
);

app.listen(process.env.PORT || 6543);
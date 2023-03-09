const express = require('express');
const app = express();
const path = require('path');

// middle ware
app.use(express.static(path.join(__dirname, 'public')));

// routing

// listen
app.listen(3000, '0.0.0.0', (a) => {
    console.log('server open');
});
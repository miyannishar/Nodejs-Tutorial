// Accessing public file nad html pages

const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.listen(5000);

//Load localhost:5000/about.html to access about.html file
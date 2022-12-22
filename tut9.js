//Accesing file without extension

const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, 'public');

// app.use(express.static(publicPath));
app.get('',(_, resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/about',(_, resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})

// If url is invalid or Error 404 Not Found
app.get('*',(_, resp)=>{
    resp.sendFile(`${publicPath}/404.html`)
})


app.listen(5000);

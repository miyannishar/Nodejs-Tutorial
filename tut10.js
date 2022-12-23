//Accesing file without extension

const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

// app.use(express.static(publicPath));
app.get('',(_, resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/about',(_, resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})


//
app.get('/profile',(_, resp)=>{
    const user={
        name: 'Nishar Miya',
        email: 'miyannishar786@gmail.com',
        city: "Gorkha"
    }
    resp.render('profile', {user});
})

// If url is invalid or Error 404 Not Found
app.get('*',(_, resp)=>{
    resp.sendFile(`${publicPath}/404.html`)
})


app.listen(5000);

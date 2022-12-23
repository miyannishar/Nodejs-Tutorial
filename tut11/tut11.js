
const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get('/profile',(_, resp)=>{
    const user={
        name: 'Nishar Miya',
        email: 'miyannishar786@gmail.com',
        city: "Gorkha",
        country: 'Nepal',
        skills:['js', 'php', 'c++']
    }
    resp.render('profile', {user});
})

app.get('/login',(_, resp)=>{
    resp.render('login');
})

app.listen(5000);

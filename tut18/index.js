const express = require('express');
require('./config');
const Product = require('./products');

const app = express();

app.use(express.json());

app.post('/create', async (req, resp)=>{
    let data = new Product(req.body);
    let result = await data.save();
    console.log(req.body);
    resp.send(result)
})

app.get('/search/:key', async (req, resp)=>{
    console.log(req.params.key);
    let data = await Product.find(
        {
            "$or":
            [ 
            {"name":{$regex:req.params.key}}
            // {"price":{$regex:req.params.key}}
            ]
        }
    );
    resp.send(data)
})

app.listen(5000);
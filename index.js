const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017/'
const database = 'e-com'
const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('products');
    let response = await collection.find({name: 'Mechnanical Keyboard'}).toArray();
    console.log(response)
}

getData();
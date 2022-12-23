const dbConnect = require('./mongodb');

const updateData = async ()=>{
    let data = await dbConnect();
    let result = await data.updateMany(
        {name: "Laptop stand"},
        {$set: {price: 20}}
    )
    console.warn(result);
}

updateData();
const mongoose = require('mongoose');

const main = async ()=>{
    await mongoose.connect("mongodb://0.0.0.0:27017/e-com");
    const ProductSchema = new mongoose.Schema({
        name: String,
        price: int
    });

    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = new ProductsModel({name:"sticker", price:5000});
    let result = await data.save();
    console.log(result);
}

main();
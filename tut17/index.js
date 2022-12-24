const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/e-com");

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String
});

const saveInDB = async ()=>{

    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = new ProductsModel({
        name:"sticker", price:5000, brand: "NKU Printer"
    });
    let result = await data.save();
    console.log(result);
}

const updateInDB= async ()=>{
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = await ProductsModel.updateOne(
        {name: "Humidifier"},
        {$set:{name: "Diffuser"}}
    )
    console.log(data);
}


const deleteInDB= async ()=>{
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = await ProductsModel.deleteOne(
        {name:"sticker"}
    )
    console.log(data)
}

const findInDB= async ()=>{
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = await ProductsModel.find()
    console.log(data)
}

findInDB();
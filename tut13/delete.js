const dbConnect = require('./mongodb');

const deleteData = async ()=>{
    const data = await dbConnect();
    const result = await data.deleteMany(
        {name: 'Laptop stand'}
    )
    console.warn(result);
    if(result.acknowledged){
        console.log("Data Deleted")
    }
}

deleteData();
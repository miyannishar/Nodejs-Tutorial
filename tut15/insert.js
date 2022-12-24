const dbConnect = require('./mongodb');

const insert = async ()=>{
    const db = await dbConnect();
    const result = await db.insert(
        [
            {name: "Laptop stand", price: 5000},
            {name: "Monitor", price: 60},
            {name: "Speaker", price: 30}
        ]
    )
    console.log(result);
    if(result.acknowledged){
        console.log("Data Inserted");
    }
}

insert();
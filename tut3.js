// CRUD with File System

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/pineapple.txt`;

//Create
// fs.writeFileSync(filePath, 'This is a simple text file');    

//Read
fs.readFile(filePath, 'utf8', (err, item)=>{
    console.log(item);
})

//Update
// fs.appendFile(filePath, " and file name is pineapple.txt",(err)=>{
//     if(!err) console.log("File is updated");
//     else console.log("File is not updated.")
// });

//Rename
fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{
    if(!err) console.log("File is renamed");
    else console.log("File is not renamed.")
})

//Delete
fs.unlinkSync(`${dirPath}/fruit.txt`)
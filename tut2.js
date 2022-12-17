// Way to play with folder and files

const fs = require('fs');
const path = require('path');

// Getting path of folder files
const dirPath = path.join(__dirname, 'files'); // Path of files folder 

// Creating files
for(i = 0; i < 5; i++){
    fs.writeFileSync(dirPath + `/hello${i}.txt`, 'A simple text files');
}

//Reading files and printing the name of each files using foreach
fs.readdir(dirPath,(err, files)=>{
    files.forEach((item)=>{
        console.log(item);
    })
});


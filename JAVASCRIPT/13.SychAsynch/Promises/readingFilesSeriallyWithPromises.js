const fs = require('fs');

let f1p = fs.promises.readFile('./f1.txt');

f1p.then(cb);

function cb(data){

    console.log('File data ->' + data);
    let f2p = fs.promises.readFile('./f2.txt');

    f2p.then(cb2);
}

function cb2 (data){

    console.log("File data -->"+ data);
    let f3p = fs.promises.readFile('./f2.txt');

    f3p.then(cb3);
     

}

function cb3 (data){

    console.log("File data -->"+ data); 
}



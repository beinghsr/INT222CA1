// program to read a file 'test.txt' and if it is not empty should append the content to 'test1.txt'


var fs = require('fs');

fs.readFile('test.txt',(err, fd) =>{
    if(err){ throw err; }
    // console.log(fd.toString());
    var content = fd.toString();
    if(!content || 0 == content.length )
    {
        console.log("File is empty");
    }
    else{
        fs.appendFile('test1.txt', fd , (err) =>{
            if(err){
                throw err;
            }
            else{
                console.log("Content of the new file is \n ");
                fs.readFile('test1.txt', (err, data) => {
                    if(err){ throw err; }
                    console.log(data.toString());
                });
            }
        });
    }
    
});

// function sumOfN(n){
//     var sum = n * (n+1) / 2;
//     console.log(sum);

//     fs.writeFile('results.txt', sum, (err)=>{ 
//         if( err ) { 
//             console.log("Error occurred");
//             throw err;
//         } 
//         else{
//             console.log("Success");
//         }
//     });

// }


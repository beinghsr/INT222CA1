// node js app to take n as input from user and compute sum of n natural numbers and
// store the result in a existing file and acknowledge it with message

var fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter the number n \n", n => {
    sumOfN(n);
    readline.close();
});

function sumOfN(n){
    var sum = 0;

    sum = (n * (n+1)) / 2;

    fs.writeFile('results.txt', sum, (err)=>{ 
        if( err ) { 
            console.log("Error occurred");
        } 
        else{
            console.log("Success");
        }
    });

}


// function that takes array of numbers 
// and return even and odd numbers in seperate array

function oddEven(ar)
{
    var evenAr = [];
    var oddAr = [];
    
    ar.forEach(i => { ((i % 2) != 1) ? ( evenAr.push(i)) : ( oddAr.push(i)  );  });

    console.log("Even Array " + evenAr);
    console.log("Odd Array " + oddAr);
}

oddEven([1,2,3,4,0,5,6,7,8,9,10,0]);



// function oddEven(ar)
// {
//     var evenAr = [];
//     var oddAr = [];
    
//     ar.forEach(i => {
//         if((i % 2) != 1)
//         {
//             evenAr.push(i);
//         }
//         else{
//             oddAr.push(i);
//         }
//     });
//     console.log("Even Array " + evenAr);
//     console.log("Odd Array " + oddAr);
// }
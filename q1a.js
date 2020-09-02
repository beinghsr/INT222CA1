// an arrow function which takes in numbers and an array as inputs and return an array containing 
// all the numbers that are greater the first number and less than the second one 


var arrBw = (n1, n2, ar) =>
{   
    var ar2 = [];
    (n1<n2)? (ar.forEach(i => { (i>n1)?((i<n2)? (ar2.push(i)) :('')) :('') }) ):console.log("Warning- Second number is not greater than the first one.");
    return ar2;
}

console.log(arrBw(3,8,[1,5,95,0,4,7]));






// var arrBw = (n1, n2, ar) =>
// {   
//     var ar2 = [];
//     if(n1<n2)
//     {
//         ar.forEach(i => {
//             if(i>n1)
//             {
//                 if(i<n2)
//                 {
//                     ar2.push(i);
//                 }
//             }
//         });
//     }
//     return ar2;
// }

// console.log(arrBw(3,8,[1,5,95,0,4,7]));
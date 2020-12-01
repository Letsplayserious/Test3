let a = [1,244,3,4,5];

// let sum = a[0];

// for (let i = 0; i < a.length; i++){
//     if(a[i]> sum){
//         sum = a[i];
//     }
// }

// console.log(sum);

let max = a[0];
let index = 0;
for (let i = 0; i < a.length; i ++){
    if(a[i] > max){
        max = a[i];
        index = i;
    }
}

console.log(index);
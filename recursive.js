"use strict"
//release 0

// let prime_factors = (angka, hasil = []) => {
//   //write your code here


let primeFactor = (number) =>
{
  let noPrime =[];
  let primes =[];
  for (var i=2; i<= number;i++) {
    if (!noPrime[i]) {
        primes.push(i);
        for (var j=i;j<= number;j+=i)
        noPrime[j]=true;
    }
  }

  console.log(primes);
}
primeFactor(25);
  //
  // var dont = [], max = 50, primes = [];
  //
  // for (var i = 2; i <= max; i++) {
  //     if (!dont[i]) {
  //         primes.push(i);
  //         for (var j = i; j <= max; j += i) dont[j] = true;
  //     }
  // }
  //
  // console.log(primes);
/*
function largestPrimeFactor(number) {
var prime = 0
if (number % 2 == 0 || number % 3 == 0 || number %5 == 0 || number % 7 == 0) {
    n
} else {
  console.log("not prime")
}
}
*/
//console.log(isPrime(5))

//     if (number % i == 0) {
//         number /= i;
//     } else {
//         i++;
//     }
// }
// console.log(i);
// }
// var a = 64 ;
// largestPrimeFactor(a)
//
// console.log(prime_factors(3));        // => [3]
// console.log(prime_factors(6));         // => [2,3]
// console.log(prime_factors(8));         // => [2,2,2]
// console.log(prime_factors(25));        // => [5,5]
// console.log(prime_factors(123123123)); // => [3, 3, 41, 333667]
//
// //release 1
//
// let simple_recursive = (number) => {
//   //write your code here
// }
//
// console.log(simple_recursive(39)); // 4
// console.log(simple_recursive(999)); // 2
// console.log(simple_recursive(3)); // 3

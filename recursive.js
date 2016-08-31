"use strict";
//release 0

let prime_factors = (angka, hasil = []) => {
  //write your code here
    let faktornya = []

    for (var i = 2; i <= angka / i; i++) {
      while (angka % i == 0) {
        faktornya.push(i);
        angka /= i;
      }
    }
    if (angka > 1) {
      faktornya.push(angka);
    }
    return faktornya;
}

console.log("========= release 0 =========")
console.log(prime_factors(3));        // => [3]
console.log(prime_factors(6));         // => [2,3]
console.log(prime_factors(8));         // => [2,2,2]
console.log(prime_factors(25));        // => [5,5]
console.log(prime_factors(123123123)); // => [3, 3, 41, 333667]

//release 1
console.log("========= release 1 =========")
let simple_recursive = (number) => {
  //write your code here
  let temp = number.toString().split("")
  let panjang = temp.length
  let hasil = 1
  if(panjang==1)
  {
      return temp[0]
  }
  for(var i=0 ; i<temp.length ; i++){
    hasil *= temp[i]
  }
  return simple_recursive(hasil)

}

console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3

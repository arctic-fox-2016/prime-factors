"use strict";
//release 0

let prime_factors = (angka, hasil = []) => {
  //write your code here
  for (let i=2; i<= angka; i++){
    while (angka%i===0){
      angka = angka/i
      hasil.push(i)
    }
  }
  return hasil;
}

console.log(prime_factors(3));        // => [3]
console.log(prime_factors(6));         // => [2,3]
console.log(prime_factors(8));         // => [2,2,2]
console.log(prime_factors(25));        // => [5,5]
console.log(prime_factors(123123123)); // => [3, 3, 41, 333667]

//release 1

let cariLength = (number) => {
  let temp = number.toString();
  let pisah = temp.split("");
  return pisah
}
let internal = (number) => {

    let temp = number.toString();
    let pisah = temp.split("");
    let digit = pisah.length;
    let hasil = 1;
    // console.log(digit)
    for (let i=0; i<= (digit-1); i++){
      hasil = hasil*pisah[i]
    }
    return hasil
}

let simple_recursive = (number) => {
  //write your code here
    let jumlahDigit = cariLength(number)
    let result = internal(number)
    // console.log(jumlahDigit)
    while (jumlahDigit.length>1){
      result = internal(result)
      jumlahDigit = cariLength(result)
    }
    return result
}

console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3

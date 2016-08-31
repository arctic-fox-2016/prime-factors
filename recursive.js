"use strict";
//release 0
let prime_number = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997, 333667];
let prime_factors = (angka, hasil = []) => {
  //write your code here
  let end_flag = false;
  for (var i = 0; i < prime_number.length; i++) {
    if((angka / prime_number[i]) % 1 == 0){
      hasil[hasil.length] = prime_number[i];
      angka /= prime_number[i];
      break;
    } else if(i == prime_number.length - 1){
      end_flag = true;
      return hasil;
    }
  }
  return prime_factors(angka, hasil);
}

console.log("Prime Factor with recrusive")
console.log(prime_factors(3));        // => [3]
console.log(prime_factors(6));         // => [2,3]
console.log(prime_factors(8));         // => [2,2,2]
console.log(prime_factors(25));        // => [5,5]
console.log(prime_factors(123123123)); // => [3, 3, 41, 333667]

//release 1

let simple_recursive = (number) => {
  //write your code here
  let text_number = number.toString().split("");
  if(text_number.length == 1){
    return parseInt(text_number);
  }
  let merge_number = text_number[0];
  for(let idx = 1; idx < text_number.length; idx++){
    merge_number *= parseInt(text_number[idx]);
  }
  return simple_recursive(merge_number);
}


console.log("\n\n\nSimple Recrusive")
console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3

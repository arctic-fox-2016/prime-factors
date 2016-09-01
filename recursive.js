"use strict";
//release 0

let prime_factors = (angka, hasil = []) => {
  // Initialize variable i start counting from 2
  var i = 2;

  // Start while loop to get all factors in array
  while (i <= angka) {

    // Check if current i is factor of angka, by checking % = 0
    if (angka % i == 0) {

      // If % = 0, push to array
      hasil.push(i);

      // Update angka, divide by i
      angka /= i;

      // Exit while if angka == 1, no more factors
      if (angka == 1) {
        break;
      }

      // Reinitalize i = 2, start counting
      i = 2;
    }

    // Increment i, check factor next number
    else {
      i++;
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

let simple_recursive = (number) => {
  //write your code here
  // Initialize
  var newNumber = 1;
  var newNumberArray = [];

  // Check if return single digit number
  if (number < 10) {
    return number;
  } else {
    newNumberArray = number.toString().split("").map(function(t){return parseInt(t)});
    // Semua angka saling dikali
    for (var i = 0; i < newNumberArray.length; i++) {
      newNumber = newNumber * newNumberArray[i];
    }
    simple_recursive(newNumber);
  }
}

console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3

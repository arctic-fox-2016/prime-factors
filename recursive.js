"use strict";
//release 0
let seekPrime = (x) =>{
  let result=[2]
  let notprime = []
  for (var i = 2; i <= x; i++) {
    let isprime = true
    for (var j = 2; j < i; j++) {
      if(i%j === 0) {
        isprime = false
        break
      }
    }
    if(isprime && result.indexOf(i)<0){
      result.push(i)
    }
  }
  return result
}


let prime_factors = (angka, hasil = []) => {
  //write your code here
  let prime = [2]
  if(angka > 100){
    prime = seekPrime(333750)
  } else {
  prime = seekPrime(angka)
}
  let finish = false
  let index = prime[prime.length-1]
  let pembagi = angka
  while (!finish) {
    if(pembagi%prime[index] === 0) {
      hasil.push(prime[index])
      pembagi = pembagi/prime[index]
      if(pembagi === 1) finish = true
      if(pembagi%prime[index] !== 0){
        index = pembagi
      }
    } else{
      index--
    }
  }
  return hasil.reverse()
}

console.log(prime_factors(3));        // => [3]
console.log(prime_factors(6));         // => [2,3]
console.log(prime_factors(8));         // => [2,2,2]
console.log(prime_factors(25));
console.log("tunggu sekitar 15 detik ya...")
var start = new Date().getTime();        // => [5,5]
console.log(prime_factors(123123123)); // => [3, 3, 41, 333667]

var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + Math.round((time/1000)*100)/100+" detik");
//release 1 

let simple_recursive = (number) => {
  //write your code here
  let num = (""+number).split("")
  let sum = 1
  if(num.length === 1) return num*1
  for(let n in num){
    sum*= num[n]
  }
  return simple_recursive(sum)
}

console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3

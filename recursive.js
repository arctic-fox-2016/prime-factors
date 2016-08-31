"use strict";
//release 0

let primeFactor = (number) =>
{
 let noPrime =[];
 let primes =[];
 for (let i=2; i<= number;i++) {
   if (!noPrime[i]) {
       primes.push(i);
       for (let j=i;j<= number;j+=i)
       noPrime[j]=true;
   }
 }
 console.log(primes);
}

console.log(primeFactor(3));        // => [3]
console.log(primeFactor(6));         // => [2,3]
console.log(primeFactor(8));         // => [2,2,2]
console.log(primeFactor(25));        // => [5,5]
console.log(primeFactor(123123123)); // => [3, 3, 41, 333667]

//release 1

let simple_recursive = (number) => {
  //write your code here
  if(number < 0)
  {
    return -1;
  }else if (number == 0) {
    return 1
  }


  var temp = number;
  while(number-- > 2)
  {
    temp *= number;
  }
  return temp;
}

console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3

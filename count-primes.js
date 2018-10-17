/*
## Count Primes
// Count the number of prime numbers less than a non-negative number, n.
//
// Example:
//
// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let map = [];
    let count = 0;

    for(let i = 2; i < n; i++){
        if(map[i] === 0) continue;
        map[i] = 1;
        count++;
        for(let j = 2; i * j < n; j++){
            map[i * j] = 0;
        }
        //console.log(n % i === 0)
    }
    return count;
};

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}



console.time('countPrime');
//console.log(countPrimes(1000));
console.log(countPrimes(10));
console.timeEnd('countPrime');
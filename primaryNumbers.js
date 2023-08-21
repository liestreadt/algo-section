function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
}

function getPrimes(n) {
    const result = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) result.push(i);
    }
    return result
}

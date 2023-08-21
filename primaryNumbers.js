


const primes = (n) => {
    const arr = Array.from(Array(n), (_, index) => index + 1);
    const result = [];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] !== null) {
            result.push(arr[i]);
            for (let j = i; j < arr.length; j += result.at(-1)) {
                arr[j] = null;
            }
        }
    }

    return result;
}
console.log(primes(100))
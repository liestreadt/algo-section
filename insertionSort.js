const asd = [-10, -9, -5, 0, 12, 5,4,3,2,1]

const insertionSort = (arr) => {
    if (!arr.length) return [];
    const result = [arr[0]];
    for (let i = 1; i < arr.length; i += 1) {
        const item = arr[i];
        let index = i;
        for (let j = 0; j < result.length; j += 1) {
            if (item < result[j]) {
                index = j;
                break
            }
        }
        result.splice(index, 0 , item)
    }
    return result;
}

console.log(insertionSort(asd));
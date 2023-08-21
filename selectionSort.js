const selectionSort = (arr) => {
    for (let j = 0; j < arr.length; j += 1) {
        let min = arr[j];
        let minIndex = j;
        for (let i = j; i < arr.length; i += 1) {
            if (arr[i] < min) {
                min = arr[i];
                minIndex = i;
            }
        }
        arr[minIndex] = arr[j]
        arr[j] = min;
    }
    return arr;
};

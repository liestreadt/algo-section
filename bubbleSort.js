const bubbleSort = (initArr) => {
    for (let j = 0; j < initArr.length; j += 1) {
        for (let i = 1; i < initArr.length; i += 1) {
            if (initArr[i] < initArr[i - 1]) {
                const curr = initArr[i];
                const prev = initArr[i - 1];
                initArr[i - 1] = curr;
                initArr[i] = prev;
            } else {
                continue;
            }
        }
    }
    return [...initArr];
};

const asd = '(a)s(({(()})d)dasd{ss}[]';


const validParenthesis = (str) => {
    const arr = str.split('');

    const stack = [];

    const dict = {
        '}': '{',
        ']': '[',
        ')': '(',
    }
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].match(/[\(\)\{\}\]\[]/)) {
            if (arr[i] === '{' || arr[i] === '(' || arr[i] === '[') {
                stack.push(arr[i])
                continue
            }
            if (stack.at(-1) === dict[arr[i]]) {
                stack.pop()
                continue
            } else {
                return false
            }
        }
        }
    if (stack.length) {
        return false
    }
    return true;
}

console.log(validParenthesis(asd));
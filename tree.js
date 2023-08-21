const asd = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
        },
        right: {
            val: 5,
        },
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: {
                val: 10,
            },
            right: {
                val: 15,
            }
        },
        right: {
            val: 7,
        },
    },
};

const treeLevel = (object) => {
    const result = [];

    const queue = [object];

    for (let i = 0; i < queue.length; i += 1) {
        result.push(queue[i].val);
        if (queue[i].left) {
            queue.push(queue[i].left);
        }
        if (queue[i].right) {
            queue.push(queue[i].right);
        }
    }

    return result;
}

console.log(treeLevel(asd));

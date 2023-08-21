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

const treeDepth = (object) => {
    const result = [];

    const helper = (obj) => {
        if (obj.val) result.push(obj.val);

        if (obj.left) {
            helper(obj.left);
        } else {
            if (!result.includes(obj.val)) result.push(obj.val);
        }

        if (obj.right) {
            helper(obj.right);
        } else {
            if (!result.includes(obj.val)) result.push(obj.val);
        }
    };

    helper(object);

    return result;
};

console.log(treeDepth(asd));

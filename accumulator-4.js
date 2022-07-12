let arr = ['alvi', 'adam', 'djabrail', 'islam', 'ayub', 'movsar', 'isa', 'ibragim', 'muhammad', 'salambek'];
let accumulator = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 'a') {
        accumulator.push(arr[i]);
    }
};

console.log(accumulator);
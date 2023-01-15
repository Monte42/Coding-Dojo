// ODD GRIDS
const g = [ // true
    [1,2,3], // 0
    [4,7,null], //          inversions even
    [8,5,6] // 2
]
const h = [ // false
    [1,2,3], // 0
    [4,7,null], // 0        inversions odd
    [5,8,6] // 1
]

// EVEN GRIDS
const a = [ // true
    [1,2,3,4], // 0
    [6,5,7,8], // 1         Both inversions even &
    [9,null,10,11], // 0    null 2nd to row - even
    [13,12,14,15] // 1
]
const b = [ // true
    [1,2,3,4], // 0         Both inversions odd &
    [6,5,null,7], // 1      null 3rd to row - odd
    [8,9,10,11], // 0
    [12,13,14,15] // 0
]
const c = [ // false
    [1,2,3,4], // 0         Inversions even &
    [6,5,null,7], // 1      null 3rd to row - odd
    [8,9,10,11], // 0
    [12,13,15,14] // 1
]


const is_solvable_odd = arr => {
    let inversions = 0
    arr.forEach((row) => {
        for(let i=0;i<row.length;i++){
            for(let j=i+1;j<row.length;j++) {
                if (row[i] && row[j] && row[i]>row[j]) {
                    inversions++
                }
            }
        }
    })
    return inversions%2===0
}


const is_solvable_even = arr => {
    let is_solvable = false
    let locationOfNull = 0
    let inversions = 0
    arr.forEach((row,index) => {
        for(let i=0;i<row.length;i++){
            if (row[i]===null) locationOfNull = arr.length - index
            for(let j=i+1;j<row.length;j++) {
                if (row[i] && row[j] && row[i]>row[j]) {
                    inversions++
                }
            }
        }
    })
    if (((locationOfNull)%2===0 && inversions%2===0) || ((locationOfNull)%2!==0 && inversions%2!==0)) is_solvable = true
    return is_solvable
}

const is_board_solvable = arr => {
    let is_solvable = false
    arr.length%2===0?
    is_solvable = is_solvable_even(arr) :
    is_solvable = is_solvable_odd(arr)
    return is_solvable
}

console.time('Board generate time')
console.log(is_board_solvable(a)); // ture
console.log(is_board_solvable(b)); // ture
console.log(is_board_solvable(c)); // false
console.log(is_board_solvable(g)); // true
console.log(is_board_solvable(h)); // false
console.timeEnd('Board generate time')
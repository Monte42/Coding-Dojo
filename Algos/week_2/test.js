// // ODD GRIDS
// const g = [ // true
//     [1,2,3], // 0
//     [4,7,null], //          inversions even
//     [8,5,6] // 2
// ]
// const h = [ // false
//     [1,2,3], // 0
//     [4,7,null], // 0        inversions odd
//     [5,8,6] // 1
// ]

// // EVEN GRIDS
// const a = [ // true
//     [1,2,3,4], // 0
//     [6,5,7,8], // 1         Both inversions even &
//     [9,null,10,11], // 0    null 2nd row from bottom - even
//     [13,12,14,15] // 1
// ]
// const b = [ // true
//     [1,2,3,4], // 0         Both inversions odd &
//     [6,5,null,7], // 1      null 3rd row from bottom - odd
//     [8,9,10,11], // 0
//     [12,13,14,15] // 0
// ]
// const c = [ // false
//     [1,2,3,4], // 0         Inversions even &
//     [6,5,null,7], // 1      null 3rd row from bottom - odd
//     [8,9,10,11], // 0
//     [12,13,15,14] // 1
// ]
// const d = [ // false
//     [1,2,3,4], // 0         Inversions odd &
//     [5,6,7,13], // 0      null 3rd row from bottom - odd
//     [8,9,10,11], // 0
//     [12,null,15,14] // 1
// ]

// // 4-(4-0) = 0
// // 4-(4) = 0
// // 4-(4-1) = 1
// // 4-(3) = 1
// // 4-(4-2) = 2
// // 4-(2) = 2
// // 4-(4-3) = 3
// // 4-(1) = 3


// const is_solvable_odd = arr => {
//     let inversions = 0
//     arr.forEach((row) => {
//         for(let i=0;i<row.length;i++){
//             for(let j=i+1;j<row.length;j++) {
//                 if (row[i] && row[j] && row[i]>row[j]) {
//                     inversions++
//                 }
//             }
//         }
//     })
//     return inversions%2===0
// }


// const is_solvable_even = arr => {
//     let is_solvable = false
//     let locationOfNull = 0
//     let inversions = 0
//     arr.forEach((row,index) => {
//         for(let i=0;i<row.length;i++){
//             if (row[i]===null) locationOfNull = arr.length-(arr.length-index)
//             for(let j=i+1;j<row.length;j++) {
//                 if (row[i] && row[j] && row[i]>row[j]) {
//                     inversions++
//                 }
//             }
//         }
//     })
//     if (((locationOfNull)%2===0 && inversions%2===0) || ((locationOfNull)%2!==0 && inversions%2!==0)) is_solvable = true
//     return is_solvable
// }

// const is_board_solvable = arr => {
//     let is_solvable = false
//     arr.length%2===0?
//     is_solvable = is_solvable_even(arr) :
//     is_solvable = is_solvable_odd(arr)
//     return is_solvable
// }

// console.time('Board generate time')
// console.log(is_board_solvable(a)); // ture
// console.log(is_board_solvable(b)); // ture
// console.log(is_board_solvable(c)); // false
// console.log(is_board_solvable(g)); // true
// console.log(is_board_solvable(h)); // false
// console.log(is_board_solvable(d)); // false
// console.timeEnd('Board generate time')

// for (let index = 0; index < 5; index++) {
//     console.log("100%");
// }

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class SLL {
    constructor() {
        this.head = null
    }

    addToFront(newNode) {
        newNode.next = this.head
        this.head = newNode
    }

    addToBack(newNode) {
        let currNode = this.head
        if (currNode === null) {
            this.head = currNode
            return this
        }
        while(currNode.next !== null) currNode = currNode.next
        currNode.next = newNode
        return this
    }
}

// let mySLL = new SLL()
// console.log(mySLL);

// mySLL.addToBack(new Node(6))
// mySLL.addToBack(new Node(3))
// mySLL.addToBack(new Node(6))
// // mySLL.addToFront(new Node(10))
// // mySLL.addToFront(new Node(5))
// // mySLL.addToFront(new Node(7))
// console.log(mySLL.head.data);
// console.log(mySLL.head.next.data);
// console.log(mySLL.head.next.next.data);



// const mainGrid = document.getElementById('mainGrid')

// const grid1 = [[1,2,3],[4,5,6],[7,null,9]]

// grid1.forEach(el => {
//     let node = document.createElement('div')
//     node.classList.add('row')
//     for (let i=0;i<el.length;i++){
//         let h3 = document.createElement('h3')
//         h3.classList.add('board-peice')
//         let val = null
//         el[i] ? console.log('yes') : console.log('no')
//         h3.appendChild(val)
//         node.appendChild(h3)
//     }
//     mainGrid.appendChild(node)
// });
// console.log('done');
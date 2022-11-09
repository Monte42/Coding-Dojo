// const nums1 = [2,7,11,15]
// const target1 = 9
// const nums2 = [3,2,4]
// const target2 = 6
// const nums3 = [3,3]
// const target3 = 6
// const nums4 = [3,2,3]
// const target4 = 6

// BRUTE FORCE
// const twoSum = (arr, trgt) => {
//     for (let i=0; i<arr.length-1; i++){
//         for (let j=i+1; j<arr.length-1; j++){
//             if (arr[i]+arr[j]==trgt){
//                 return [arr[i],arr[j]]
//             }
//         }
//     }
// }


// My Solution
// const twoSum = (arr, trgt) => {
//     for (let i=0; i<arr.length; i++) {
//         const remainder = trgt - arr[i]
//         if (arr.includes(remainder, i+1)){
//             arr.splice(i,1)
//             return [i, arr.indexOf(remainder)+1]
//         }
//     }
// }

// Class Solution
// const twoSum = (nums, target) => {
//     const map = {}
    // for (let index = 0; index < nums.length; index++) {
    //     const element = nums[index]
    //     const complement = target - element
    //     if (complement in map) {
    //         return [map[complement], index]
    //     } else {
    //         map[element] = index
    //     }
    // }
    // return []
// }

// console.log(twoSum(nums1,target1));
// console.log(twoSum(nums2,target2));
// console.log(twoSum(nums3,target3));
// console.log(twoSum(nums4,target4));


const searchArr = (arr,trgt) => {
    let start = 0
    let end = arr.length-1
    if (arr.indexOf(trgt)==-1) return -1;
    while(start<=end){
        let mid = arr[Math.floor((start+end)/2)]
        if(mid===trgt) return arr.indexOf(mid)
        if(start===trgt) return arr.indexOf(start)
        if(end===trgt) return arr.indexOf(end)
        mid > trgt ? end=mid-1 : start=mid+1
    }
    return -1
}

console.log(searchArr([1,2,3,4,5,6,7,8,9],6));
console.log(searchArr([1,2,3,4,5,6,7,8,9],3));
console.log(searchArr([1,2,3,4,5,6,7,8,9],8));
console.log(searchArr([1,2,3,4,5,6,7,8,9],5));
console.log(searchArr([1,2,3,4,5,6,7,8,9],11));
console.log(searchArr([1,3,33,44,57,61,72,88,90],57));
console.log(searchArr([-21,22,33,44,55,66,67,78,79],22));
console.log(searchArr([-111,-92,-3,4,25,46,57,68,79],-3));


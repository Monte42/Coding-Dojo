const nums1 = [2,7,11,15]
const target1 = 9
const nums2 = [3,2,4]
const target2 = 6
const nums3 = [3,3]
const target3 = 6
const nums4 = [3,2,3]
const target4 = 6

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
const twoSum = (arr, trgt) => {
    for (let i=0; i<arr.length; i++) {
        const remainder = trgt - arr[i]
        if (arr.includes(remainder, i+1)){
            arr.splice(i,1)
            return [i, arr.indexOf(remainder)+1]
        }
    }
}

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

console.log(twoSum(nums1,target1));
console.log(twoSum(nums2,target2));
console.log(twoSum(nums3,target3));
console.log(twoSum(nums4,target4));


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


// const searchArr = (arr,trgt) => {
//     let start = 0
//     let end = arr.length-1
//     if (arr.indexOf(trgt)==-1) return -1;
//     while(start<=end){
//         let mid = arr[Math.floor((start+end)/2)]
//         if(mid===trgt) return arr.indexOf(mid)          
//         if(start===trgt) return arr.indexOf(start)     Need to arr[start]
//         if(end===trgt) return arr.indexOf(end)
//         mid > trgt ? end=mid-1 : start=mid+1
//     }
//     return -1
// }

// const arr1 = [1,12,-5,-6,50,3]


// const findMaxAvg = (nums, k) => {
//     let endPoint = k
//     let maxAvg = -Infinity
//     while (endPoint<=nums.length){
//         const currentAvg = nums.slice((endPoint-k), endPoint).reduce((a,b) => a+b,0)/k;
//         maxAvg = Math.max(maxAvg, currentAvg)
//         endPoint++
//     }

//     return maxAvg;
// }

// console.log(findMaxAvg(arr1, 4))
// console.log(findMaxAvg([5], 1))


// var maxArea = function(height){
    //     let start = 0
    //     let end = height.length-1
    //     let max = 0
    //     while(start<end){
        //         let width = end-start
        //         let h = Math.min(height[start], height[end])
        //         max = Math.max(max, (h*width))
        //         height[start] > height[end] ? end-- : start++
        //     }
        //     return max
        // }
        
        // console.log(maxArea(arr1))
        
// arr1 = [1,8,6,2,5,4,8,3,7]
// arr2 = [1,5,3]

// const rotate = (nums,k) =>{
//     if (nums.length<k) {
//         let a = k%nums.length
//         console.log(a);
//         nums.unshift(...nums.splice(-a))
//     } else if (nums.length>k) {
//         nums.unshift(...nums.splice(-k));
//     }
//     return nums
// }


// console.log(4%3);
// console.log(arr2);
// arr2 = rotate(arr2,4)
// console.log(arr2);
// console.log(arr1);
// arr1 = rotate(arr1,3)
// console.log(arr1);


var lengthOfLongestSubstring = function(s) {
    let subString = ""
    let max = 0
    if (s.trim().length === 0 && s.length>0)
    for (let i=0;i<s.length; i++){
        if(subString.includes(s[i])){
            max = Math.max(max, subString.length)
            subString = ""
        }
        subString+=s[i]
        curr++
    }
    return max
};

console.log(lengthOfLongestSubstring(" "))
console.log(lengthOfLongestSubstring(""))
console.log(lengthOfLongestSubstring("au"))
console.log(lengthOfLongestSubstring("hello"))
console.log(lengthOfLongestSubstring("aaasddsfvbssadafgh"))
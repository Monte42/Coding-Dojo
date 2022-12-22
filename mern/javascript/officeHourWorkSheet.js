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


// var lengthOfLongestSubstring = function(s) {
//     let subString = ""
//     let max = 0
//     if (s.trim().length === 0 && s.length>0)
//     for (let i=0;i<s.length; i++){
//         if(subString.includes(s[i])){
//             max = Math.max(max, subString.length)
//             subString = ""
//         }
//         subString+=s[i]
//         curr++
//     }
//     return max
// };

// console.log(lengthOfLongestSubstring(" "))
// console.log(lengthOfLongestSubstring(""))
// console.log(lengthOfLongestSubstring("au"))
// console.log(lengthOfLongestSubstring("hello"))
// console.log(lengthOfLongestSubstring("aaasddsfvbssadafgh"))

// prices = [2,4,1]

// var maxProfit = function(prices) {
//     let min = prices[0]
//     let profit = 0
//     for (let i=0; i<prices.length; i++){
//         min = Math.min(prices[i], min)
//         profit = Math.max(profit, prices[i]-min)
//     }
//     return profit
// };

// console.log(maxProfit(prices));

// const arr1 = [-4,3,2,1]
// const arr2 = [5]
// const arr3 = [3,-6,5,-2,1]
// const arr4 = [-5,4,-2,3,1]
// const arr5 = [0]
// const arr6 = [-2,-3,3,-1,6,7,-3]

// const findMinVal = arr => {
//     let min = 1
//     let sum = 1
//     for(let i=0;i<arr.length;i++){
//         sum += arr[i]
//         if (min+sum<0) min += (sum*-1)+1
//     }
//     console.log("min: ", min);
// }

// findMinVal(arr1)
// findMinVal(arr2)
// findMinVal(arr3)
// findMinVal(arr4)
// findMinVal(arr5)
// findMinVal(arr6)


var str1 = [
    "(){}[]", //t
    "({[{}]}){[{[()]}]}[{({[]})}]", //t
    "(){}[}]",//f
    "(){}[{}{({}})}]",
    "({}}{)}){}[{{()({})}}]",//f
    "(){}[]{}()[]",//t
]

var isValid = function(s) {
    let map = new Map()
    map.set("(", 0)
    map.set("{", 0)
    map.set("[", 0)


    for (let i=0;i<s.length;i++){
        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i])+1)
        }
        else{
            map.set(s[i], map.get(s[i])-1)
            console.log(map.get(s[i]));
            if (map.get(s[i])>0) return false
        }
    }

    console.log(map);

    return map
};

console.log(isValid(str1[2]));

// for (i in str1) {
//     console.log(isValid(i));
// }
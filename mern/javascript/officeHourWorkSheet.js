let nums = [2,7,8,1,4,6]
let target = 9

const twoSum = (arr, trgt) => {
    let answer = [];
    for (let i=0; i<arr.length-1; i++){
        for (let j=0; j<arr.length-1; j++){
            if(i!=j){
                if (arr[i]+arr[j]==trgt){
                    answer.push([arr[i],arr[j]])
                    const index = arr.indexOf(i)
                    arr.splice(index,1)
                }
            }
        }
    }
    return answer;
}

console.log(twoSum(nums,target));


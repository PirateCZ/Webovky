let nums = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]
function equals30(){
    let x = 1
    for(let i = 0;i < nums.length;i++){
        for(let j = 0;j < nums.length;j++){
            for(let k = 0;k < nums.length;k++){
                console.log(`${x++}. ${nums[i]}+${nums[j]}+${nums[k]}=${nums[i]+nums[j]+nums[k]}`)
                if(nums[i]+nums[j]+nums[k]==30){
                    return true
                }
            }
        }
    }
    return false
}
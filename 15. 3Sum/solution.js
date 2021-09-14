/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let o = []
    for (let i = 0; i < nums.length; ++i) {
        for (let j = 0; j < nums.length; ++j) {
            for (let k = 0; k < nums.length; ++k) {
                if (i != j && i != k && j != k) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        o.push([nums[i],nums[j],nums[k]])
                    }   
                }
            }
        }
    }
    return o
};
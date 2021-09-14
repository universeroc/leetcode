/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; ++i) {
        for (let j = nums.length - 1; j >= 0; --j) {
            if (nums[i] + nums[j] === target && i !== j) {
                return [i,j]
            }
        }
    }
};
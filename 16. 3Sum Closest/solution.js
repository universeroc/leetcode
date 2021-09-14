/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    let t = Number.MAX_VALUE
    let o = t
    for (let i = 0; i < nums.length; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            for (let k = j + 1; k < nums.length; ++k) {
                let m = Math.abs(target - (nums[i] + nums[j] + nums[k]))
                if (m < t) {
                    t = m
                    o = (nums[i] + nums[j] + nums[k])
                }
            }
        }
    }
    return o
};
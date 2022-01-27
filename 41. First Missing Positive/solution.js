/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const l = nums.length
    let ret = l + 1
    for (let i = 0; i < l; ++i) {
        while (nums[i] > 0 && nums[i] <= l && nums[i] !== nums[nums[i] - 1]) {
	    // Why commented code not work ?
            // let t = nums[i]
            // nums[i] = nums[nums[i] - 1]
            // nums[nums[i] - 1] = t
            let t = nums[nums[i] - 1]
            nums[nums[i] - 1] = nums[i]
            nums[i] = t
        }
    }
    
    for (let i = 0; i < l; ++i) {
        if (nums[i] !== i + 1) {
            ret = i + 1
            break
        }
    }
    return ret
};

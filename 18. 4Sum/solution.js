/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    var nums = nums.sort()
    let out = []
    for (let i = 0; i < nums.length; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            for (let k = j + 1; k < nums.length; ++k) {
                for (let m = k + 1; m < nums.length; ++m) {
                    if (nums[i] + nums[j] + nums[k] + nums[m] === target) {
                        let t = [nums[i], nums[j], nums[k], nums[m]]
                        let added = out.some(e => e.every((el, index) => {
                            return el === t[index]
                        }))
                        if (!added)
                            out.push(t)
                    }
                }
            }
        }
    }
    return out
};
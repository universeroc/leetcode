/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let max = 0
    for (let i = 0, j = height.length - 1; i < j;) {
        let h = height[i] > height[j] ? height[j] : height[i]
        let w = j - i
        if (h * w > max) {
            max = h * w
        }
        if (height[i] > height[j]) {
            --j
        } else {
            ++i
        }
    }
    return max
};
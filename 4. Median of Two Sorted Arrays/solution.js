/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let f = [...nums1, ...nums2]
    f.sort((a,b)=>a-b)
    
    if (f.length % 2 === 0) {
      let mid = Math.floor(f.length / 2)
      return (f[mid - 1] + f[mid]) / 2
    }
    
    if (nums2.length === nums1.length) {
      let mid = Math.floor((nums2.length + nums1.length) / 2)
      return (f[mid - 1] + f[mid]) / 2
    }

    return f[Math.floor((nums1.length + nums2.length) / 2)]
  };
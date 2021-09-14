/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if (s.length < 1)
      return s
    
    function isPalindrome(s) {
      if (s.length % 2 === 0) {
        let mid = s.length / 2
        for (let i = mid, j = i - 1; j >=0 && i < s.length; ++i, --j) {
          if (s[i] !== s[j]) {
            console.log('mid', mid, 'i: ', i, s)
            return false
          }
        }
      } else {
        let mid = Math.floor(s.length / 2)
  
        for (let i = mid - 1, j = mid + 1; i >= 0 && j < s.length; --i, ++j) {
          if (s[i] !== s[j]) {
            console.log(i, j, s[i], s[j], mid)
            return false
          }
        }
      }
      return true
    }
    
    let maxLength = 0
    let max
    
    for (let i = 0, j = i; i < s.length && j < s.length;) {
      let p = s.substring(i, j-i+1)
      if (isPalindrome(p)) {
        if (p.length > maxLength) {
          maxLength = p.length
          max = p 
        }
        ++j
      } else {
        ++i
        j = i
      }
    }
    
    return max
  };
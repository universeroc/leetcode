/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    let a = []
    for (let r = 0; r < numRows; ++r) {
      a.push([])
    }
    for (let i = 0; i < s.length;) {
      for (let r = 0; r < numRows && i < s.length; ++r) {
        a[r].push(s[i++])
      }
      for (let z = numRows - 2; z > 0 && i < s.length; --z) {
        a[z].push(s[i++])
      }
    }
    let o = ''
    a.forEach(row=>{
      row.forEach(e=>{
        o += e
      })
    })
    return o
  };
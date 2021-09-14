/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let abs = Math.abs(x)
    let b = abs
    let o = 0
    let time = -1
    while (abs) {
      abs = Math.floor(abs / 10)
      time++
    }
    console.log('time:', time)
    
    for (let i = time; i >= 0; --i) {
      let pow10 = Math.pow(10, i)
      let t = Math.floor(b / pow10)
      o += t * Math.pow(10, time - i)
      b %= pow10
    }
    
    let minimize = -Math.pow(2, 31)
    let maximize = -minimize - 1
    o = x < 0 ? -o : o
    if (o < minimize || o > maximize)
      return 0
    
    return o
  };
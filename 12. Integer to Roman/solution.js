/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    const m = {
        '1': 'I',
        
        '2': 'II',
        '3': 'III',
        
        '5': 'V',
        
        '6': 'VI',
        '7': 'VII',
        '8': 'VIII',
        
        '10': 'X',
        '50': 'L',
        
        '60': 'LX',
        '70': 'LXX',
        '80': 'LXXX',
        
        '100': 'C',
        '500': 'D',
        
        '600': 'DC',
        '700': 'DCC',
        '800': 'DCCC',
        
        
        '1000': 'M',
        // six instances
        '4': 'IV',
        '9': 'IX',
        '40': 'XL',
        '90': 'XC',
        '400': 'CD',
        '900': 'CM'        
    }
    
    if (num > 0 && num < 11)
        return m[num.toString()]
    
    const i = m[num.toString()]
    if (i)
        return i
    else {
        let pow10 = 1000
        let o = ''
        while (num) {
            let n = Math.floor(num / pow10)
            if (n) {
                let r = m[(pow10*n).toString()]
                if (r) {
                    o += r
                } else {
                    r = m[(pow10).toString()]
                    for (let i = 0; i < n; ++i) {
                        o += r
                    }
                }
            }
            num %= pow10
            pow10 /= 10
        }
        return o
    }
};
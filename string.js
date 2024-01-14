//344. Reverse String
var reverseString = function (s) {

    // return s.reverse();

    let start = 0;
    let end = s.length - 1;

    while (start < end) {

        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;

        start++;
        end--;
    }
    return s;
};

//709. To Lower Case
var toLowerCase = function (s) {

    let result = '';

    for (let i = 0; i < s.length; i++) {

        if (s[i] <= 'Z' && s[i] >= 'A') {

            result += String.fromCharCode(s[i].charCodeAt(0) + 32);
        }
        else
            result += s[i];
    }

    return result;
};

//2744. Find Maximum Number of String Pairs
var maximumNumberOfStringPairs = function (words) {

    return words.reduce((acc, s, i) => {

        if (i === words.length - 1) return acc;

        for (let j = i + 1; j < words.length; j++) {

            if (s === reverse(words[j])) acc++;
        }
        return acc;
    }, 0);

    function reverse(s) {

        let reversed = '';

        for (let i = s.length - 1; i >= 0; i--) {

            reversed += s[i];
        }
        return reversed;
    }
};
//1844. Replace All Digits with Characters
var replaceDigits = function (s) {

    const shift = (char, num) => String.fromCharCode(char.charCodeAt(0) + Number(num));

    let result = '';

    for (let i = 0; i < s.length - 1; i += 2) {

        let shifted = shift(s[i], s[i + 1]);

        result += s[i] + (shifted ? shifted : '');
    }
    return s.length % 2 !== 0 ? result.concat(s.at(-1)) : result;
};

//console.log(replaceDigits('a1b2c3d4e'));

//1309. Decrypt String from Alphabet to Integer Mapping
var freqAlphabets = function (s) {

    const decrypt = (val) => String.fromCharCode('a'.charCodeAt(0) + Number(val) - 1);

    s = s.split('');

    const ans = [];

    for (let i = s.length - 1; i >= 0; i--) {

        if (s[i] === '#') {

            ans.unshift(s[i - 2] + s[i - 1]);

            i -= 2;

            continue;
        }

        ans.unshift(s[i]);
    }
    return ans.reduce((acc, val) => acc + decrypt(val), '');
};

console.log(freqAlphabets("10#11#12"))
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

    //String.fromCharCode(char.charCodeAt(0) + 32)

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

console.log(replaceDigits('a1b2c3d4e'));;
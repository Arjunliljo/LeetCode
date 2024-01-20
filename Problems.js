//344.1 Reverse String
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

//709.2 To Lower Case
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

//2744.3 Find Maximum Number of String Pairs
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
//1844.4 Replace All Digits with Characters
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

//1309.5 Decrypt String from Alphabet to Integer Mapping
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

//console.log(freqAlphabets("10#11#12"))


//944.6 Delete Columns to Make Sorted
var minDeletionSize = function (strs) {
    const createCol = (num) => {
        let col = '';
        for (let i = 0; i < strs.length; i++) {
            col += strs[i][num];
        }
        return col;
    }

    const isSorted = (col) => {
        for (let i = 0; i < col.length - 1; i++) {
            if (col[i] > col[i + 1])
                return false;
        }
        return true;
    }
    //https://github.com/Arjunliljo/LeetCode.git
    const columns = strs[0].length;

    // gpt helped
    const grid = Array.from({ length: columns }, (_, i) => createCol(i));

    return grid.reduce((acc, val) => (isSorted(val) ? acc : acc + 1), 0);
};


//2553.7 Separate the Digits in an Array
var separateDigits = function (nums) {

    const splitNum = (num) => {

        const ans = [];

        while (num > 0) {

            ans.unshift(num % 10);

            num = Math.trunc(num / 10);
        }

        return ans;
    }

    const ans = nums.map(digit => {

        if (digit < 10) return digit;

        return splitNum(digit);
    })

    return ans.flat();
};
//git config --global commit.gpgSign true


//1684.8 Count the Number of Consistent Strings
var countConsistentStrings = function (allowed, words) {

    return words.reduce((acc, word) => {

        for (let i = 0; i < word.length; i++) {
            if (!allowed.includes(word[i])) return acc;
        }

        return acc + 1;
    }, 0)
};

//2733.9 Neither Minimum nor Maximum
var findNonMinOrMax = function (nums) {

    if (nums.length <= 2) return -1;

    const max = Math.max(...nums);

    const min = Math.min(...nums);

    return nums.find((val) => val !== min && val !== max);
};

//1351.10 Count Negative Numbers in a Sorted Matrix
var countNegatives = function (grid) {

    function negCount(arr) {

        let start = 0;
        let end = arr.length - 1;
        let target;


        if (arr[end] >= 0) return 0;

        if (arr[start] < 0) return arr.length;

        while (start <= end) {

            let mid = Math.trunc((start + end) / 2)

            if (arr[mid - 1] >= 0 && arr[mid] < 0) {
                target = mid;
                break;
            }

            if (arr[mid] >= 0) start = mid + 1;

            if (arr[mid] < 0) end = mid - 1;

        }

        if (target) return arr.length - (target);

        return -1;
    }
    return grid.reduce((acc, arr) => {

        if (negCount(arr) > 0) return acc + negCount(arr);

        return acc;
    }, 0)
};

//2706.11 Buy Two Chocolates
var buyChoco = function (prices, money) {

    prices.sort((a, b) => a - b);

    const total = prices[0] + prices[1];

    if (total <= money) return money - total;

    return money;
};

//2057.12 Smallest Index With Equal Value
var smallestEqual = function (nums) {
    return nums.findIndex((val, i) => i % 10 === val) ?? -1;
};

//2951.13 Find the Peaks
var findPeaks = function (mountain) {

    return mountain.reduce((acc, val, i) => {
        if (i === 0 || i === mountain.length - 1) return acc;
        if (val > mountain[i + 1] && val > mountain[i - 1]) acc.push(i);
        return acc;
    }, [])

};

//1295.14 Find Numbers with Even Number of Digits
var findNumbers = function (nums) {

    const evenCount = (num) => {

        let digit = 0;

        while (num > 0) {
            digit++;
            num = Math.trunc(num / 10);
        }
        return digit % 2 === 0;
    }

    return nums.reduce((acc, val) => evenCount(val) ? ++acc : acc, 0);
};
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

//2544. Alternating Digit Sum
var alternateDigitSum = function (n) {

    const digit = [];

    while (n > 0) {

        digit.unshift(n % 10);

        n = Math.floor(n / 10);
    }

    return digit.reduce((acc, val, i) => {

        if (i % 2 !== 0) {

            return acc + (val * -1);
        }
        else {

            return acc + val;
        }

    }, 0)

};

//268. Missing Number
var missingNumber = function (nums) {

    const correctSum = (nums.length * (nums.length + 1)) / 2;

    const currSum = nums.reduce((sum, val) => sum + val, 0);

    return correctSum - currSum;

};

//1688. Count of Matches in Tournament
var numberOfMatches = function (n) {

    let correntTeam = n;

    let matches = (team) => {

        if (team % 2 === 0) {

            correntTeam = team / 2;

            return correntTeam;
        }

        else {

            correntTeam = ((team - 1) / 2) + 1;

            return (team - 1) / 2;
        };
    };

    let totalMatch = 0;

    while (correntTeam > 1) {

        totalMatch += matches(correntTeam);
    }
    return totalMatch;
};

//1304. Find N Unique Integers Sum up to Zero
var sumZero = function (n) {

    const ans = [];

    for (let i = 1; i <= n / 2; i++) {

        ans.push(i, -i);
    }

    n % 2 !== 0 && ans.push(0);

    return ans;

};

//389. Find the Difference
var findTheDifference = function (s, t) {

    s = s.split('');

    s.forEach(val => t = t.replace(val, ''));

    return t;

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
//2441. Largest Positive Integer That Exists With Its Negative
var findMaxK = function (nums) {

    return nums.reduce((acc, val) => {

        if (val > acc && nums.includes(-val)) return val;

        return acc;

    }, 0) || -1;
};

//575. Distribute Candies
var distributeCandies = function (candyType) {

    const differentType = new Set(candyType);

    const allowed = candyType.length / 2;

    return differentType.size > allowed ? allowed : differentType.size;
};

//744. Find Smallest Letter Greater Than Target
var nextGreatestLetter = function (letters, target) {

    letters = [...new Set(letters)];

    const ans = letters.indexOf(target);

    if (ans === letters.length - 1) return letters[0];

    if (ans !== -1) return letters[ans + 1];

    return letters.find(char => char.charCodeAt(0) > target.charCodeAt(0)) || letters[0];
};
//628. Maximum Product of Three Numbers
function maximumProduct(nums) {
    nums.sort((a, b) => a - b);

    const n = nums.length;

    // Case 1: Product of three largest positive numbers
    const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];

    // Case 2: Product of two smallest negative numbers and the largest positive number
    const product2 = nums[0] * nums[1] * nums[n - 1];

    // Return the maximum of the two cases
    return Math.max(product1, product2);
}

//34. Find First and Last Position of Element in Sorted Array

var searchRange = function (nums, target) {

    const ans = [];

    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {

        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {

            while (nums[mid] === target) mid--;

            ans.push(++mid);

            while (nums[mid] === target) mid++;

            ans.push(--mid);

            return ans;
        }

        if (nums[mid] < target) start = mid + 1;

        else end = mid - 1;
    }

    return [-1, -1];
};
//81. Search in Rotated Sorted Array II
var search = function (nums, target) {

    if (nums.length <= 1 && nums[0] === target) return true;

    if (nums.length === 0) return false;

    nums = [...new Set(nums)]

    if (nums[0] < nums.at(-1)) return searching(0, nums.length, nums, target)

    const pivot = findPivot(nums);

    console.log(pivot);

    if (searching(pivot, nums.length, nums, target)) return true;

    if (searching(0, pivot, nums, target)) return true;

    return false;


    function findPivot(nums) {

        let start = 0;
        let end = nums.length - 1;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);

            if (mid > 0 && nums[mid] < nums[mid - 1]) {

                return mid;
            }

            if (nums[mid] < nums[0]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return -1;
    }

    function searching(start, end, nums, target) {

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);

            if (nums[mid] === target) return true;

            if (nums[mid] < target) start = mid + 1;

            else end = mid - 1;
        }

        return false;
    }

};

//852. Peak Index in a Mountain Array
var peakIndexInMountainArray = function (arr) {

    return arr.findIndex((val, i) => {

        if (i === 0) return;

        return val > arr[i + 1] && val > arr[i - 1]
    })
};



